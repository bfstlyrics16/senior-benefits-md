import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page(){
  return (
    <>
      <div className="page-wrap">
        <Navbar />

        {/* Purple hero banner */}
        <section className="hero">
          <div className="container">
            <h1>Are you confused about Medicare?</h1>
            <p>If you are turning 65 soon or are on Medicare now and are unsure what to do…</p>
          </div>
        </section>

        {/* Intro + image */}
        <section className="section">
          <div className="container grid grid-2" style={{alignItems:"start"}}>
            <div>
              <p><strong>I can help</strong> with Medicare decisions about Supplemental Insurance Plans (also called Medigap Plans) and Medicare Advantage Plans.</p>
              <p className="muted">I am:</p>
              <ul className="clean">
                <li>An independent life and health insurance agent specializing in Medicare</li>
                <li>Multi-licensed: representing a wide selection of Medicare insurance carriers</li>
                <li>Local to Maryland and the Greater Baltimore Area</li>
                <li>Over 35 years of experience with a variety of insurance products</li>
                <li>Unbiased. I present several alternatives and let you decide</li>
                <li>Able to give personal attention and help devise solutions tailored to your situation</li>
              </ul>
            </div>
            <div className="card">
              <img src="/person-maze.jpg" alt="Two seniors in a maze" />
            </div>
          </div>
        </section>

        {/* --- Ignorance is not bliss section --- */}
        <section className="section" aria-labelledby="ignorance-heading">
          <div className="container">
            <h2 id="ignorance-heading" className="h-serif" style={{ marginBottom: 8 }}>
              Ignorance is not bliss when it comes to Medicare . . .
            </h2>
            <p className="muted" style={{ maxWidth: 900 }}>
              Making the wrong choices when joining (or switching) Medicare plans could cost you a lot of money
              and could permanently cut off options for some coverage. Avoid making choices you may regret later!
            </p>
          </div>
        </section>

        {/* Three CTAs */}
        <section className="section">
          <div className="container grid grid-3">
            <article className="card" style={{textAlign:"center"}}>
              <h3 className="h-serif" style={{color:"var(--brand-blue)"}}>Attend a Medicare Workshop</h3>
              <p className="muted">“This workshop was much easier to understand than other sessions we’ve attended.”<br />"Clear, comprehensive, well-organized."<br />"Wish I’d heard this info several years ago!"</p>
              <a href="/resources" className="btn" style={{marginTop:8}}>Learn More</a>
            </article>
            <article className="card" style={{textAlign:"center"}}>
              <h3 className="h-serif" style={{color:"var(--brand-blue)"}}>Request one-on-one help</h3>
              <p className="muted">By phone or in-person. Get clear answers specific to you.</p>
              <a href="/forms/one-on-one" className="btn" style={{marginTop:8}}>Learn More</a>
            </article>
            <article className="card" style={{textAlign:"center"}}>
              <h3 className="h-serif" style={{color:"var(--brand-blue)"}}>Request my Guide to Medicare</h3>
              <p className="muted">An easy-to-understand guide to get you started.</p>
              <a href="/forms/medicare-guide" className="btn" style={{marginTop:8}}>Learn More</a>
            </article>
          </div>
        </section>

        {/* Plans columns */}
        <section className="section">
          <div className="container">
            <h2 className="h-serif">Maryland plans I represent</h2>
            <div className="rule"></div>
            <div className="grid grid-2">
              <div>
                <h3 className="h-serif" style={{marginBottom:6}}>Medicare Supplement Insurance (aka Medigap)</h3>
                <p className="muted">Aetna, Ace Property & Casualty Ins. Co., Aflac, Bankers Fidelity Assurance Company, CareFirst BlueCross BlueShield of Maryland, Cigna, Humana, Mutual of Omaha, United Healthcare (AARP), United American Life Ins. Co., Wellabe/Medico, and many more.</p>
              </div>
              <div>
                <h3 className="h-serif" style={{marginBottom:6}}>Medicare Advantage Plans</h3>
                <p className="muted">CareFirst BlueCross Blue Shield of Maryland, Aetna, Alterwood, Cigna Healthcare, Humana, Johns Hopkins Medicare Advantage plan, Kaiser Permanente, United Healthcare (AARP).</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
