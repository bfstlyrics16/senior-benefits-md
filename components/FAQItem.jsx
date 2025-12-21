export default function FAQItem({ q, a }) {
  return (
    <details className="card faq-item">
      <summary
        className="h-serif"
        style={{ cursor: "pointer", color: "var(--brand-blue)", fontSize: "22px" }}
      >
        {q}
      </summary>
      <div
        style={{
          marginTop: 8,
          color: "var(--ink)",
          whiteSpace: "pre-line" // <-- keeps your newlines
        }}
      >
        {a}
      </div>
    </details>
  );
}
