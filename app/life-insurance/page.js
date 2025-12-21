import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LifeInsurance() {
  return (
    <div className="page-wrap">
      <Navbar />
      <section className="section">
        <div className="container">
          <h1 className="h-serif">Life Insurance</h1>
          <div className="rule"></div>

          <div className="card">
            <p>
              I am also a licensed broker for Life Insurance for seniors (or their family members).
            </p>

            <p>
              Many seniors don’t realize that if you are age 85 or under and can sign your name, you CAN still
              enroll in life insurance, regardless of any health challenges. I help seniors acquire affordable,
              quality Life Insurance with top-rated companies. Whether you are in excellent health or facing serious
              health challenges there is a life insurance solution available for you.
            </p>

            <p>
              Most plans do not require a medical exam. Most seniors prefer Whole Life Insurance which guarantees
              that the premium will never increase and the death benefit will never decrease in value.
            </p>

            <p>
              Life insurance for all family members of any age (including grandkids) is also available.
            </p>

            <p>
              After learning some details about your situation and what you are looking for I search a database of
              dozens of top-rated life insurance companies to find the most competitive policies available for you.
            </p>

            <p style={{ marginTop: 16 }}><strong>Companies I represent include:</strong></p>
            <p className="muted" style={{ marginTop: 6 }}>
              Aetna, AIG, Americo, Gerber Life, Foresters, Prosperity, Mutual of Omaha,
              Royal Neighbors of America, Liberty Bankers Life, Great Western Life,
              National Life Group, Transamerica Life, United Home Life Insurance Company,
              United American and dozens of other quality life insurance companies.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
