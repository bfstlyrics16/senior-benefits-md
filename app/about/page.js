import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About(){
  return (
    <div className="page-wrap">
      <Navbar />
      <section className="section">
        <div className="container">
          <h1 className="h-serif">About Senior Benefit Solutions</h1>
          <div className="rule"></div>

          <div className="grid grid-2 about-grid">
            <figure className="card portrait-card">
              <img className="portrait-img" src="/portrait.png" alt="David Wagenheim" />
              <figcaption style={{padding:"10px 12px"}}>
                <strong>David Wagenheim</strong><br/>CEO and Medicare Specialist
              </figcaption>
            </figure>

            <div className="card">
              <p>I realized how confusing the Medicare selection process can be and decided to specialize in helping seniors understand Medicare and find the best options for their needs.</p>
              <p>I take the annual Medicare AHIP certification (required by CMS) for agents who wish to write Medicare Advantage plans and Prescription Drug plans.</p>
              <p>I understand that choosing one’s healthcare coverage is among the most important decisions a person will make—especially in their senior years. I don’t take it lightly that clients depend on my guidance to find the best plan for their needs.</p>
            </div>
          </div>
          <section className="section">
            <h2 className="h-serif">Here’s how I can help you navigate the Medicare landscape:</h2>
            <div className="grid grid-2">
              <ul className="clean">
                <li>I’m an independent agent with freedom to work with many insurers.</li>
                <li>No cost to you if you choose to use me as your Medicare navigator.</li>
                <li>I’ll match you with the best plan for your situation.</li>
              </ul>
              <ul className="clean">
                <li>I save individuals time (and stress) during annual plan reviews.</li>
                <li>We’ll review pros/cons of each plan together in plain English.</li>
                <li>I help evaluate eligibility for programs that lower costs.</li>
              </ul>
            </div>
          </section>

          <section className="section">
            <div className="grid grid-2">
              <div>
                <h3 className="h-serif">Maryland plans I represent</h3>
                <h4 className="h-serif" style={{margin:"6px 0"}}>Medigap:</h4>
                <p className="muted">Aetna, Aflac, Bankers Fidelity, CareFirst BCBS of Maryland, Cigna, Humana, Mutual of Omaha, United Healthcare (AARP), United American, and more.</p>
              </div>
              <div>
                <h3 className="h-serif">Medicare Advantage Plans</h3>
                <p className="muted">CareFirst BCBS of Maryland, Aetna, Alterwood, Cigna Healthcare, Humana, Johns Hopkins, Kaiser Permanente, United Healthcare (AARP).</p>
              </div>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </div>
  );
}
