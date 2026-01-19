export default function Footer() {
  return (
    <footer
      className="section"
      style={{
        borderTop: "1px solid var(--line)",
        paddingTop: 28,
        background: "#fafafa",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
          textAlign: "center",
        }}
      >
        {/* “Call-to-action” style links */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "14px",
          }}
        >
          <a
            href="live-workshop"
            className="footer-link"
          >
            Live Workshop
          </a>
          <a
            href="/one-on-one-help"
            className="footer-link"
          >
            Get 1-on-1 Help
          </a>
          <a
            href="/medicare-guide"
            className="footer-link"
          >
            Request a Medicare Guide
          </a>
        </div>

        {/* Maryland-only note */}
        <div
          style={{
            color: "var(--muted)",
            fontSize: 13,
            lineHeight: 1.5,
            maxWidth: "640px",
          }}
        >
          Serving seniors throughout the state of Maryland.<br />
          Not connected with or endorsed by the U.S. government or the federal
          Medicare program.
        </div>
      </div>
    </footer>
  );
}
