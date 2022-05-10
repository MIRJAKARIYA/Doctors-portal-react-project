import React, { useEffect, useState } from "react";
import './Footer.css';
const Footer = () => {
  const [currentYear, setCurrentYear] = useState('');
  useEffect(()=>{
    const year = new Date().getFullYear();
    setCurrentYear(year);
  },[])
  return (
    <div className="footer-style p-14">
        <footer className="footer md:justify-around text-neutral-content">
      <div>
        <span className="footer-title">Services</span>
        <span className="link text-[17px] link-hover">Emergency Checkup</span>
        <span className="link text-[17px] link-hover">Monthly Checkup</span>
        <span className="link text-[17px] link-hover">Weekly Checkup</span>
        <span className="link text-[17px] link-hover">Deep Checkup</span>
      </div>
      <div>
        <span className="footer-title">ORAL HEALTH</span>
        <span className="link text-[17px] link-hover">Fluoride Treatment</span>
        <span className="link text-[17px] link-hover">Cavity Filling</span>
        <span className="link text-[17px] link-hover">Teath Whitening</span>
      </div>
      <div>
        <span className="footer-title">Our address</span>
        <span className="link text-[17px] link-hover">New York - 101010 Hudson</span>

      </div>
      
    </footer>
    <p className="text-center mt-[80px]">Copyright {currentYear} All Rights Reserved</p>
    </div>
  );
};

export default Footer;
