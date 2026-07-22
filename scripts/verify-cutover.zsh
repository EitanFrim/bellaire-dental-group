#!/bin/zsh
# Post-cutover verification for bellairedentalgroup.com.
# Run this the moment DNS is pointed at Vercel:  zsh scripts/verify-cutover.zsh
# Every line prints PASS or FAIL; exit code is non-zero if anything fails.

set -u
CURL=/usr/bin/curl
GREP=/usr/bin/grep
# CUTOVER_BASE override exists only for pre-cutover smoke tests of this script.
WWW="${CUTOVER_BASE:-https://www.bellairedentalgroup.com}"
APEX="${CUTOVER_APEX:-https://bellairedentalgroup.com}"
fails=0

check() {
  local label="$1" ok="$2"
  if [ "$ok" = "1" ]; then
    print "PASS  $label"
  else
    print "FAIL  $label"
    fails=$((fails + 1))
  fi
}

# 1. www serves the NEW site (200 + new-design marker + hero video asset)
body=$($CURL -s -m 20 "$WWW")
code=$($CURL -s -o /dev/null -w "%{http_code}" -m 20 "$WWW")
check "www returns 200 (got $code)" $([ "$code" = "200" ] && echo 1 || echo 0)
check "www serves the new site (hero-loop.mp4 present)" \
  $(print -r -- "$body" | $GREP -qc "hero-loop.mp4" && echo 1 || echo 0)
check "www has no old-WordPress markers" \
  $(print -r -- "$body" | $GREP -qic "wp-content" && echo 0 || echo 1)

# 2. Canonical is self-referential on www
check "www canonical points to itself" \
  $(print -r -- "$body" | $GREP -qc "rel=\"canonical\" href=\"$WWW\"" && echo 1 || echo 0)

# 3. Apex 308s to www
redir=$($CURL -s -o /dev/null -w "%{http_code} %{redirect_url}" -m 20 "$APEX")
check "apex redirects to www (got: $redir)" \
  $(print -r -- "$redir" | $GREP -qE "^30[18] $WWW" && echo 1 || echo 0)

# 4. SEO endpoints
for p in robots.txt sitemap.xml llms.txt; do
  c=$($CURL -s -o /dev/null -w "%{http_code}" -m 20 "$WWW/$p")
  check "/$p returns 200 (got $c)" $([ "$c" = "200" ] && echo 1 || echo 0)
done
check "sitemap URLs use the www domain" \
  $($CURL -s -m 20 "$WWW/sitemap.xml" | $GREP -qc "<loc>$WWW/" && echo 1 || echo 0)

# 5. Old WordPress URLs 301/308 to their mapped new pages
typeset -A LEGACY
LEGACY=(
  /meet-houston-tx-dentist /about
  /patient-reviews /reviews
  /appointment /book
  /our-practice /about
  /gallery /smile-gallery
  /our-blog /blog
  /dental-care /services
  /patient-resources /new-patients
  /privacy-policy /privacy
  /contact-us /contact
)
for src dst in "${(@kv)LEGACY}"; do
  out=$($CURL -s -o /dev/null -w "%{http_code} %{redirect_url}" -m 20 "$WWW$src")
  check "legacy $src -> $dst (got: $out)" \
    $(print -r -- "$out" | $GREP -qE "^30[18] $WWW$dst/?$" && echo 1 || echo 0)
done

print ""
if [ $fails -eq 0 ]; then
  print "ALL CHECKS PASSED. Next: verify the domain property in Search Console, submit $WWW/sitemap.xml, and request indexing on the top pages."
else
  print "$fails check(s) FAILED. If DNS was changed less than an hour ago, propagation may still be in progress: rerun shortly."
fi
exit $fails
