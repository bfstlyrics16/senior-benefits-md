import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import testimonials from "@/data/testimonials";
import TestimonialCard from "@/components/TestimonialCard";

export default function Testimonials(){
  return (
    <>
      <Navbar />
      <section className="section">
        <div className="container">
          <h1>Testimonials</h1>
          <div className="grid grid-3" style={{marginTop:16}}>
            {testimonials.map((t,i)=> <TestimonialCard key={i} {...t}/>)}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
