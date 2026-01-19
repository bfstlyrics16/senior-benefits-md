import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkshopList from "@/components/WorkshopList";

export default function Workshops(){
  return (
    <div className="page-wrap">
      <Navbar />
      <section className="section">
        <div className="container">
          <h1 className="h-serif">Workshops</h1>
          <div className="rule"></div>
          <p className="muted" style={{marginBottom: 16}}>
            Attend an upcoming educational talk to (finally!) understand how Medicare works and learn what your choices are as you enter Medicare (or seek to improve your current Medicare health coverage).
          </p>
          <p className="muted" style={{marginBottom: 16}}>
            These workshops are <u>purely educational;</u> there will be no discussion of any specific product or company and there will be nothing for sale, nor  will there be the solicitation of any product.
          </p>
          <p className="muted" style={{marginBottom: 16}}>
            This “Medicare Simplified” presentation will explain in simple terms how Medicare works, what the “gaps” in Medicare are, what you can do to “fill the gaps”, what you need to do to enroll correctly, avoid life-time penalties (for missing deadlines), and what you should consider as you seek to find the best plan for your specific situation.
          </p>
          <h2>These talks are FREE!! and run about 90 minutes.</h2>
          <h3>Upcoming talks:</h3>
          <WorkshopList />
        </div>
      </section>
      <Footer />
    </div>
  );
}
