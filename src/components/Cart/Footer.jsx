import React from "react";
import "./footer.css";
import FaceBook from "../../../public/assets/images/facebook.png";
import LinkedIn from "../../../public/assets/images/linkedIn.png";
import Twitter from "../../../public/assets/images/twitter.png";

const Footer = () => {
  return (
    <footer className="footer text-[#9f9f9f] text-[16px]">
      <div>
        <div className="flex items-center mt-8">
          <p>SKU </p>
          <p>: SS001</p>
        </div>
        <div className="flex items-center mt-4">
          <p>Category </p>
          <p>: Sofas</p>
        </div>
        <div className="flex items-center mt-4">
          <p>Tags</p>
          <p>: Sofa, Chair, Home, Shop</p>
        </div>
        <div className="flex items-center mt-4">
          <p>Share</p>
          <p className="flex items-center gap-8">
            : <img src={FaceBook} alt="FaceBook" />
            <img src={LinkedIn} alt="LinkedIn" />
            <img src={Twitter} alt="Twitter" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
