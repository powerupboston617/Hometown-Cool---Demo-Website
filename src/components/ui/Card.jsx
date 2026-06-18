export default function Card({ children, className = "" }) {
  return (
    <div
      className={`card-surface p-6 transition-all duration-200 ease-out hover:shadow-card-hover motion-reduce:hover:shadow-card ${className}`}
    >
      {children}
    </div>
  );
}