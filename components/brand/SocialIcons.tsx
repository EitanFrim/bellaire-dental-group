/** Brand social glyphs (lucide removed its brand icons). currentColor-aware. */

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.95h-1.5c-1.48 0-1.95.92-1.95 1.86v2.23h3.31l-.53 3.49h-2.78V24C19.61 23.1 24 18.1 24 12.07z" />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5.2" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YelpIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M13.6 2.2c.9-.3 2.4.3 2.5 1.2.1.6-.1 4.3-.3 6.6-.1.9-.3 1.5-.9 1.7-.6.2-1.1-.1-1.7-.7-1.5-1.7-3.7-4.6-4-5.2-.4-.8.2-1.9 1.2-2.4l3.2-1.2zM10.7 12.9c.6.3.7 1 .3 1.6-.9 1.5-2.5 3.7-3 4.2-.6.6-1.4.4-1.9-.4l-1.2-2.1c-.4-.8 0-1.7.9-1.9 1-.2 3.3-1 4-1.5zM9.6 9.2c.4.6.1 1.3-.6 1.5-1.7.5-4.2 1-4.9 1-.9 0-1.4-.8-1.2-1.7l.5-2.3c.2-.9 1.1-1.3 1.9-.8 1 .6 3.3 2 4.3 3.3zM19.6 13.6c.9.1 1.4 1 1 1.8l-1.1 2.2c-.4.8-1.3.9-1.9.2-.7-.8-2-2.9-2.5-3.8-.3-.6 0-1.3.7-1.4 1-.1 3 .7 3.8.8zM20 8.7c.8.4 1 1.4.3 2l-1.8 1.6c-.7.6-1.6.3-1.8-.6-.2-1.1-.3-3.5-.2-4.3.1-.7.9-1.1 1.6-.7l1.9 1z" />
    </svg>
  );
}
