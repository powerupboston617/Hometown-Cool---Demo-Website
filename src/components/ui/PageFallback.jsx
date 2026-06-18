export default function PageFallback() {
  return (
    <div
      className="flex min-h-[50vh] items-center justify-center"
      aria-live="polite"
      aria-busy="true"
    >
      <p className="text-text-muted">Loading…</p>
    </div>
  );
}