import React from "react";
import { Column } from "./Column";
import tg from "../../public/assets/footer/tg.svg";

const footerData = {
  about: [
    "History",
    "Our Team",
    "Brand Guidelines",
    "Terms & Condition",
    "Privacy Policy",
  ],
  services: [
    "How to Order",
    "Our Product",
    "Order Status",
    "Promo",
    "Payment Method",
  ],
  description: [
    "Lorem ipsum dolor sit amet",
  ],
};

export const Footer = () => {
  return (
    <footer>
      <div className="footer-container container-fluid bg-dark text-white">
        <div className="footer-section">
          <Column className="About" title="About" items={footerData.about} />
          <Column className="Services" title="Services" items={footerData.services} />
          <Column className="TitleHere" title="Title Here" items={footerData.description} />
          <input className="search" type="search" placeholder=""></input><img className="tg-icon" src="../public/assets/footer/tg.svg"
              alt="tg-logo" />
          <div className="flex footer-icons">
            <img
              src="../public/assets/footer/ig.svg"
              alt="instagram-logo"
            />
            <img
              src="../public/assets/footer/fb.svg"
              alt="facebook-logo"
            />
            <img src="../public/assets/footer/tw.svg" alt="twitter-logo" />
            <img
              src="../public/assets/footer/wa.svg"
              alt="whatsapp-logo"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
