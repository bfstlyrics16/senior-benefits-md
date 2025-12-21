export default function TestimonialCard({ name, text, source }) {
  return (
    <blockquote className="card">
      <p style={{ whiteSpace: "pre-line" }}>“{text}”</p>
      <footer style={{ marginTop: 10 }}>
        <strong>{name}</strong>{source ? ` — ${source}` : ""}
      </footer>
    </blockquote>
  );
}
