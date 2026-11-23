// Vector version of the CODA mark (rounded "play" shape built from the brand's
// red, sky and yellow layers). Scales cleanly for the header, footer and favicon.
export function CodaMark({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <clipPath id="coda-play">
          <path d="M14 10.5c0-4.6 5-7.5 9-5.2l31.5 18.2c4 2.3 4 8.1 0 10.4L23 52.1c-4 2.3-9-.6-9-5.2Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#coda-play)" style={{ mixBlendMode: 'normal' }}>
        <rect x="0" y="0" width="64" height="64" fill="#ff3d6f" />
        <path d="M14 4h22c8 0 12 6 9 12-2 4-7 5-11 7-5 2-7 6-5 10 2 5 9 6 13 8 6 3 5 11-2 13H14Z" fill="#38bdf8" opacity=".95" />
        <path d="M36 6c10 4 22 12 22 22 0 9-12 16-20 21-5 3-9 0-7-4 2-5 8-7 8-13 0-5-6-7-8-11-2-5 0-17 5-15Z" fill="#ffd23f" opacity=".95" />
        <circle cx="30" cy="32" r="10" fill="#2563eb" opacity=".9" />
      </g>
    </svg>
  )
}

export function CodaLogo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <CodaMark className="h-9 w-9 drop-shadow-[0_0_14px_rgba(56,189,248,.35)]" />
      <span className="flex flex-col leading-none">
        <span className="text-lg font-extrabold tracking-[-0.03em] text-white">CODA</span>
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-neutral-400">for Square</span>
      </span>
    </span>
  )
}
