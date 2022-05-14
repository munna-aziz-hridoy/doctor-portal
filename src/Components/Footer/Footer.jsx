import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-footer-bg bg-cover bg-no-repeat bg-center text-base-content justify-items-center py-20">
        <div>
          <span className="footer-title">checkup</span>
          <Link to="/" className="capitalize link link-hover">
            emergancy checkup
          </Link>
          <Link to="/" className="capitalize link link-hover">
            monthly checkup
          </Link>
          <Link to="/" className="capitalize link link-hover">
            daily checkup
          </Link>
          <Link to="/" className="capitalize link link-hover">
            weekly checkup
          </Link>
        </div>
        <div>
          <span className="footer-title">oral health</span>
          <Link to="/" className="capitalize link link-hover">
            fluoride treatment
          </Link>
          <Link to="/" className="capitalize link link-hover">
            cavity filling
          </Link>
          <Link to="/" className="capitalize link link-hover">
            teeth whitening
          </Link>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <p className="text xl capitalize">new york 100100 bailey road</p>
        </div>
      </footer>
      <div>
        <p className="text-center">
          Copyright © 2022 - All right reserved by Doctor Portal Ltd
        </p>
      </div>
    </>
  );
};

export default Footer;
