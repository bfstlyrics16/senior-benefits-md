import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MedicareGuideForm(){
  return (
    <>
      <Navbar />
      <section className="section">
        <div className="container">
          <h1 className="h-serif">Request A Medicare Guide</h1>
            <div className="rule"></div>
            <div className="card" style={{padding:16}}>
            <iframe className="form-frame" title="Medicare Guide Form" src="https://docs.google.com/forms/d/e/1FAIpQLSdZngPLID62EMk6XeG1VQVAlaOLg2k_YrmXcp5OuNIBtt_p3w/viewform"></iframe>
            </div>
        </div>
        
      </section>
      <Footer />
    </>
  );
}
