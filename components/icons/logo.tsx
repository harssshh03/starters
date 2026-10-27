/** The extension's own mark: three squares and one turned on its corner. */
export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2.9" y="2.9" width="8" height="8" />
      <rect x="2.9" y="13.1" width="8" height="8" />
      <rect x="13.1" y="13.1" width="8" height="8" />
      <path d="M17.1 2.2 21.8 6.9 17.1 11.6 12.4 6.9Z" />
    </svg>
  )
}
