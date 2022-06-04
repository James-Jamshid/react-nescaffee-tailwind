import React from "react";
import BottomLine1 from "../assets/bottom1.png";
import BottomLine2 from "../assets/bottom2.png";
import inst from "../assets/Insta.png";
import fb from "../assets/Fb.png";
import twit from "../assets/twitter.png";
import pint from "../assets/pinterest.png";
import { Link } from "react-router-dom";

const Bottom = () => {
  return (
    <div className="flex flex-col items-center pt-5 pb-5 bg-[#C08267]">
      <div className="flex">
        <img src={BottomLine1} alt="" />
      </div>
      <div className="flex gap-x-48 pt-32 pb-32 ">
        <div className="flex  flex-col justify-center">
          <Link to="/btn">
            <h4>Merchandise</h4>
          </Link>
          <Link to="/btn">
            <h5>T-shirts</h5>
          </Link>
          <Link to="/btn">
            <h5>Caps</h5>
          </Link>
          <Link to="/btn">
            <h5>Masks</h5>
          </Link>
        </div>
        <div className="flex  flex-col justify-center">
          <Link to="/btn">
            <h4>Franchise</h4>
          </Link>
          <Link to="/btn">
            <h5>Coffee Outlet</h5>
          </Link>
          <Link to="/btn">
            <h5>Coffee Vending Machine</h5>
          </Link>
          <Link to="/btn">
            <h5>Contact Us</h5>
          </Link>
        </div>
        <div className="flex  flex-col justify-center">
          <Link to="/btn">
            <h4>About Us</h4>
          </Link>
          <Link to="/btn">
            <h5>Promotions</h5>
          </Link>
          <Link to="/btn">
            <h5>Customer Care</h5>
          </Link>
          <Link to="/btn">
            <h5>Legal Information</h5>
          </Link>
          <Link to="/btn">
            <h5>Achievements </h5>
          </Link>
          <Link to="/btn">
            <h5>Careers</h5>
          </Link>
        </div>
        <div className="flex  flex-col justify-center">
          <div className="flex">
            <Link to="/btn">
              <h4>Follow Us</h4>
            </Link>
          </div>
          <div className="flex">
            <a href="https://www.instagram.com">
              <img id="icon" src={inst} alt="" className="flex" />
            </a>
            <a href="https://www.facebook.com">
              <img id="icon" src={fb} alt="" className="flex" />
            </a>
            <a href="https://twitter.com">
              <img id="icon" src={twit} alt="" className="flex" />
            </a>
            <a href="https://www.pinterest.com">
              <img id="icon" src={pint} alt="" className="flex" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex">
        <img src={BottomLine2} alt="" />
      </div>
    </div>
  );
};

export default Bottom;
