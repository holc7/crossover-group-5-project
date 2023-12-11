import fifthSectionImgOne from "../assets/Section-5/fifth-section-img-one.svg";
import fifthSectionImgTwo from "../assets/Section-5/fifth-section-img-two.svg";
import fifthSectionImgThree from "../assets/Section-5/fifth-section-img-third.svg";

const FifthSection = () => {
  return (
    <section className="fifth-section">
      <div className="fifth-section-title-container">
        <h2 className="fifth-section-title">Title Here</h2>
        <p className="fifth-section-subtitle">
          Lorem Ipsum available, but the majority have suffered alteration in
          some form.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="fifth-section-card">
              <img src={fifthSectionImgOne} alt="" />
              <div className="fifth-section-card-text">
                <h4>
                  <span className="fifth-section-line-through">$50</span>{" "}
                  <span>$30</span>
                </h4>
                <button className="fifth-section-card-button" type="button">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="fifth-section-card">
              <img src={fifthSectionImgTwo} alt="" />
              <div className="fifth-section-card-text">
                <h4>
                  <span className="fifth-section-line-through">$40</span>{" "}
                  <span>$25</span>
                </h4>
                <button className="fifth-section-card-button" type="button">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="fifth-section-card">
              <img src={fifthSectionImgThree} alt="" />
              <div className="fifth-section-card-text">
                <h4>
                  <span className="fifth-section-line-through">$45</span>{" "}
                  <span>$20</span>
                </h4>
                <button className="fifth-section-card-button" type="button">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
