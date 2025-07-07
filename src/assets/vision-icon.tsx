export default function VisionIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="32" cy="32" rx="28" ry="18" fill="#0A3753" />
      <ellipse cx="32" cy="32" rx="10" ry="10" fill="#fff" />
      <circle cx="32" cy="32" r="5" fill="#0A3753" />
    </svg>
  );
}
