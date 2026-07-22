"use client";

import { useEffect, useRef, useState } from "react";
import { getImageProps } from "next/image";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";

const MOBILE_QUERY = "(max-width: 640px)";

/**
 * Full-bleed cinematic hero media: an art-directed poster (16:9 desktop,
 * 9:16 mobile) that paints immediately as the LCP, with a muted ambient
 * video loop that fades in over it once it can actually play.
 *
 * The video never loads for users with prefers-reduced-motion or Save-Data,
 * and it pauses while scrolled out of view. If autoplay is blocked
 * (e.g. iOS Low Power Mode), the poster simply remains.
 */
export function HeroMedia({
  poster,
  posterPortrait,
  posterAlt,
  videoDesktop,
  videoMobile,
}: {
  poster: string;
  posterPortrait: string;
  posterAlt: string;
  videoDesktop: string;
  videoMobile: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const srcRef = useRef<string | null>(null);
  const [src, setSrc] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection?.saveData;
    if (reduce || saveData) return;
    const mq = window.matchMedia(MOBILE_QUERY);
    // Recompute on every resize (covers rotation too) instead of relying on
    // the MediaQueryList "change" event, which some environments drop; the
    // ref guard means only a genuine breakpoint crossing swaps the source.
    const apply = () => {
      const next = asset(mq.matches ? videoMobile : videoDesktop);
      if (srcRef.current === next) return;
      srcRef.current = next;
      setPlaying(false);
      setSrc(next);
    };
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, [videoDesktop, videoMobile]);

  // Save battery: pause the loop whenever the hero is scrolled off screen.
  // Also kick playback when the source swaps (autoplay does not re-fire on
  // an src change, and the aborted play() promise from the old source is
  // swallowed).
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;
    video.play().catch(() => {});
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    });
    io.observe(video);
    return () => io.disconnect();
  }, [src]);

  // Art direction: one <picture>, only the matching crop ever downloads.
  // priority => eager + fetchpriority=high (this is the LCP element).
  const common = { alt: posterAlt, sizes: "100vw", priority: true };
  const {
    props: { srcSet: desktopSet, src: desktopSrc },
  } = getImageProps({ ...common, width: 1920, height: 1086, src: asset(poster) });
  const {
    props: { srcSet: mobileSet, src: mobileSrc, alt, ...rest },
  } = getImageProps({
    ...common,
    width: 1080,
    height: 1910,
    src: asset(posterPortrait),
  });

  return (
    <div className="absolute inset-0 overflow-hidden">
      <picture>
        <source media="(min-width: 641px)" srcSet={desktopSet ?? desktopSrc} />
        <source media="(max-width: 640px)" srcSet={mobileSet ?? mobileSrc} />
        <img
          {...rest}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>

      {src && (
        <video
          // Remount per source: swapping src in place strands the element in
          // a half-reloaded state (autoplay and loop do not re-arm reliably)
          key={src}
          ref={videoRef}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-out",
            playing ? "opacity-100" : "opacity-0",
          )}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          onPlaying={() => setPlaying(true)}
          onCanPlay={(e) => {
            e.currentTarget.play().catch(() => {});
          }}
        />
      )}
    </div>
  );
}
