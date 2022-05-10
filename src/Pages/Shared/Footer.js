import React from "react";
import './Footer.css';
const Footer = () => {
  return (
    <div className="footer-style p-14">
        <footer className="footer justify-around text-neutral-content">
      <div>
        <span className="footer-title">Services</span>
        <span className="link text-[18px] link-hover">Emergency Checkup</span>
        <span className="link text-[18px] link-hover">Monthly Checkup</span>
        <span className="link text-[18px] link-hover">Weekly Checkup</span>
        <span className="link text-[18px] link-hover">Deep Checkup</span>
      </div>
      <div>
        <span className="footer-title">ORAL HEALTH</span>
        <span className="link text-[18px] link-hover">Fluoride Treatment</span>
        <span className="link text-[18px] link-hover">Cavity Filling</span>
        <span className="link text-[18px] link-hover">Teath Whitening</span>
      </div>
      <div>
        <span className="footer-title">Our address</span>
        <span className="link text-[18px] link-hover">New York - 101010 Hudson</span>

      </div>
      
    </footer>
    <p className="text-center mt-[80px]">Copyright 2022 All Rights Reserved</p>
    </div>
  );
};

export default Footer;
