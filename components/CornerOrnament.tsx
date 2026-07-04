// A small eight-point star / rosette motif, echoing the geometric
// medallions used to frame illuminated Quran folios. Placed at the
// corners of the main artifact image as this project's signature detail.
export default function CornerOrnament({
  className
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.1">
        <path d="M24 4 L28 20 L44 24 L28 28 L24 44 L20 28 L4 24 L20 20 Z" />
        <circle cx="24" cy="24" r="5" />
      </g>
    </svg>
  );
}
