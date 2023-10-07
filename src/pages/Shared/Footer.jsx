/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
// import logo from "../../../assets/logo/logo.png";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year.toString());
  }, []);
  return (
    <>
      <footer className="footer p-10 bg-[#173857] text-white ">
        <div>
          {/* <img className="w-16" src={logo} alt="" /> */}
          <p>
            Elegant Jewels.
            <br />
            Providing reliable
            <br />
           and authentics Jewellery.
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Gold</a>
          <a className="link link-hover">Diamond</a>
          <a className="link link-hover">Silver</a>
          <a className="link link-hover">Others</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-[#173857] text-white ">
        <div>
          <p>
            Copyright &copy; {currentYear} Elegant Jewels
            <sup className="text-[8px]">TM</sup>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
