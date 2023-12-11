import thirdSectionImgOne from "../assets/Section-3/third-section-img-one.svg";
import thirdSectionImgTwo from "../assets/Section-3/third-section-img-two.svg";
import thirdSectionImgThree from "../assets/Section-3/third-section-img-three.svg";

const ThirdSection = () => {
  return (
    <section className="third-section">
      <div className="third-section-title-container">
        <h2 className="third-section-title">Title Here</h2>
        <p className="third-section-subtitle">
          Lorem Ipsum available, but the majority have suffered alteration in
          some form.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="third-section-card">
              <img src={thirdSectionImgTwo} alt="" />
              <div className="third-section-card-text">
                <h4>Veterinarian</h4>
                <p>
                  Lorem Ipsum available, but the majority have suffered
                  alteration in some.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="third-section-card">
              <img src={thirdSectionImgOne} alt="" />
              <div className="third-section-card-text">
                <h4>Vaccination Care</h4>
                <p>
                  Lorem Ipsum available, but the majority have suffered
                  alteration in some.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="third-section-card">
              <img src={thirdSectionImgThree} alt="" />
              <div className="third-section-card-text">
                <h4>Dental Care</h4>
                <p>
                  Lorem Ipsum available, but the majority have suffered
                  alteration in some.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
