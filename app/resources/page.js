import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import resources from "@/data/resources";

function ResourceColumn({ items }) {
  return (
    <div style={{ display: "grid", gap: 28 }}>
      {items.map((r) => (
        <article key={r.id}>
          <h3 style={{ margin: "0 0 6px" }}>
            <a href={r.url} target="_blank" rel="noreferrer">
              {r.title}
            </a>
          </h3>
          <p className="muted" style={{ margin: 0 }}>{r.description}</p>
        </article>
      ))}
    </div>
  );
}

export default function Resources() {
  // split into two columns like the screenshot
  const left = resources.filter((_, i) => i % 2 === 0);
  const right = resources.filter((_, i) => i % 2 === 1);

  return (
    <div className="page-wrap">
      <Navbar />
      <section className="section">
        <div className="container">
          <h1 className="h-serif">Workshops &amp; Resources</h1>
          <div className="rule"></div>
          <div className="grid grid-2" style={{ alignItems: "start" }}>
            <ResourceColumn items={left} />
            <ResourceColumn items={right} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
