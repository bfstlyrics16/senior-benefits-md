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
            Free local sessions—learn the basics and ask questions live.
          </p>
          <WorkshopList />
        </div>
      </section>
      <Footer />
    </div>
  );
}
