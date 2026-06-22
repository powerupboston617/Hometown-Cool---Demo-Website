import { cardHoverClass } from "../../utils/cardAccent";

export default function Card({ children, className = "", accent = "green" }) {
  return (
    <div className={`card-surface p-6 ${cardHoverClass[accent] ?? cardHoverClass.green} ${className}`}>
      {children}
    </div>
  );
}