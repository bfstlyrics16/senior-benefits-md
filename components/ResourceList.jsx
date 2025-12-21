import resources from "@/data/resources";

export default function ResourceList(){
  return (
    <div className="grid grid-3">
      {resources.map(r=>(
        <article key={r.id} className="card">
          <h3>{r.title}</h3>
          <p style={{color:"var(--muted)"}}>{r.description}</p>
          <a className="btn" href={r.url} target="_blank" rel="noreferrer">Open</a>
        </article>
      ))}
    </div>
  );
}
