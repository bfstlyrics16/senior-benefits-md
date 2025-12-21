import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function OneOnOneForm(){
  return (
    <>
      <Navbar />
      <section className="section">
        <div className="container">
          <h1 className="h-serif">Request One on One Help</h1>
            <div className="rule"></div>
            <div className="card" style={{padding:16}}>
            <iframe className="form-frame" title="Medicare Guide Form" src="https://docs.google.com/forms/d/e/1FAIpQLSdN-I1tV4BASaURxbUR-aJWqM6z124inKdEG2oAtnPUu9pWbg/viewform"></iframe>
            </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
