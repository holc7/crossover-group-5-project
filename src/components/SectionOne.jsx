import React from "react";
import dog from "../../public/assets/sectionOne/dog.svg";

const SectionOne = () => {
  return (
    <div className="SectionOne sectionOne-dog ">
      <h2>First I wanted to be a veterinarian</h2>
      <p>
        Lorem Ipsum available but the majority have suffered alteration in some
        form, by injected humour randomised words
      </p>
      <div className="button">
        <button type="button" className="btn btn-primary efbtn-lg" on>
          Contact Us
        </button>
        <button type="button" className="btn btn-primary efbtn-lg" on>
          Our Service
        </button>
      </div>
    </div>
  );
};

export default SectionOne;
