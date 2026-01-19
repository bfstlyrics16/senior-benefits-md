import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="header">
      <div className="container header-top">
        {/* Make brand clickable to go home */}
        <Link href="/" className="brand" style={{ textDecoration: "none" }}>
          <Image
            src="/hero.png"
            alt="Senior Benefit Solutions"
            width={36}
            height={36}
          />
          <div className="brand-title">
            <span className="name">Senior Benefit Solutions</span>
            <span className="tagline">
              Medicare information and resources for seniors in the greater
              Baltimore, MD area
            </span>
          </div>
        </Link>

        <div className="contact">
          <div style={{ color: "#6e72a0" }}>Contact:</div>
          <div>
            Phone/Text: <strong>443-613-3029</strong>
          </div>
          <div>
            Email:{" "}
            <a href="mailto:david@seniorbenefitsmd.com">
              david@seniorbenefitsmd.com
            </a>
          </div>
        </div>
      </div>

      <div className="header-nav">
        <div className="container nav-links">
          <Link href="/about">About</Link>
          <Link href="/faq">FAQs &amp; Testimonials</Link>
          <Link href="/workshops">Workshops</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/life-insurance">Life Insurance Plans</Link>
        </div>
      </div>
    </div>
  );
}
