import workshops from "@/data/workshops";

export default function WorkshopList(){
  const upcoming = workshops
    .slice()
    .sort((a,b)=> new Date(a.date) - new Date(b.date));

  return (
    <div className="grid grid-3">
      {upcoming.map(w=>(
        <article key={w.id} className="card">
          <h3 style={{marginTop: 0}}>{w.title}</h3>
          <p className="muted" style={{margin: "4px 0"}}>
            {new Date(w.date).toLocaleString()}
          </p>
          <p style={{margin:"6px 0"}}>{w.location}</p>
          <p className="muted" style={{margin:"6px 0 12px"}}>{w.description}</p>
          {w.signupUrl && <a className="btn" href={w.signupUrl} target="_blank" rel="noreferrer">RSVP</a>}
        </article>
      ))}
    </div>
  );
}
