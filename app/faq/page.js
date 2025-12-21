import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import faqs from "@/data/faqs";
import FAQItem from "@/components/FAQItem";
import testimonials from "@/data/testimonials";
import TestimonialCard from "@/components/TestimonialCard";

export default function FAQ(){
  return (
    <div className="page-wrap">
      <Navbar />
      <section className="section">
        <div className="container">
          <h1 className="h-serif">FAQs &amp; Testimonials</h1>
          <div className="rule"></div>

          <div style={{display:"grid", gap:12}}>
            {faqs.map((f,i)=> <FAQItem key={i} q={f.q} a={f.a}/>)}
          </div>

          <section className="section">
            <h2 className="h-serif">See What Our Clients Think</h2>
            <p className="muted">Don’t just take our word for it.</p>
            <div className="grid t-grid" style={{ marginTop: 12 }}>
              {testimonials.map((t,i)=> <TestimonialCard key={i} {...t} />)}
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </div>
  );
}
