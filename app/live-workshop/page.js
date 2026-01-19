"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function LiveWorkshops(){
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    script.async = true;

    script.onload = () => {
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler(
          "iframe[id='JotFormIFrame-260186198791065']",
          "https://form.jotform.com/"
        );
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="page-wrap">
      <Navbar />
      <section className="section">
        <div className="container">
          <h1 className="h-serif">Attend a live workshop</h1>
          <div className="rule"></div>
          <iframe
            id="JotFormIFrame-260186198791065"
            title="I plan to attend:"
            src="https://form.jotform.com/260186198791065"
            frameBorder="0"
            style={{ width: "100%", height: 539, border: "none" }}
            scrolling="no"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
