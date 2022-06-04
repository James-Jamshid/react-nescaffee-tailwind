import React from "react";
import UpperLine from "../assets/Explore.png";
import BelowLine from "../assets/Brands.png";
import Cappacino from "../assets/Coffee.png";
import Latte from "../assets/latte.png";
import Mocha from "../assets/mocha.png";
import java from "../assets/java.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import { Link } from "react-router-dom";

const Wrapper = () => {
  return (
    <div className="flex flex-col items-center gap-y-11 bg-[#f7f7db] pt-10">
      <div className="flex">
        <img src={UpperLine} alt="" className="flex" />
      </div>
      {/* coffee type start */}
      <div className="flex gap-x-10">
        <div className="flex w-[260px] h-[450px] flex-col bg-[#C08267] rounded-[20px] p-3 gap-y-2">
          <Link to="/btn">
            <img
              src={Cappacino}
              alt=""
              className="flex w-[230px] h-[150px] rounded-[20px] "
            />
          </Link>
          <Link to="/btn">
            <h4>Cappacino</h4>
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa,
            fermentum id id vitae, integer fermentum tellus. In vitae id nisl
            quis ornare diam commodo in vel dolor.
          </p>
          <div className="flex justify-between items-center pt-5">
            <p>$8.60</p>
            <Link to="/btn">
              <button className="flex w-[120px] h-[30px] rounded-lg shadow-[#000] shadow-[30px] bg-[#A0583C] hover:bg-[#5f5f5e] text-[white]  hover:scale-100   justify-center items-center ">
                Order now
              </button>
            </Link>
          </div>
        </div>
        <div className="flex w-[260px] h-[450px] flex-col bg-[#C08267] rounded-[20px] p-3 gap-y-2">
          <Link to="/btn">
            <img
              src={Mocha}
              alt=""
              className="flex w-[230px] h-[150px] rounded-[20px] "
            />
          </Link>
          <Link to="/btn">
            <h4>Mocha</h4>
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa,
            fermentum id id vitae, integer fermentum tellus. In vitae id nisl
            quis ornare diam commodo in vel dolor.
          </p>
          <div className="flex justify-between items-center pt-5">
            <p>$9.20</p>
            <Link to="/btn">
              <button className="flex w-[120px] h-[30px] rounded-lg shadow-[#000] shadow-[30px] bg-[#A0583C] hover:bg-[#5f5f5e] text-[white]  hover:scale-100   justify-center items-center ">
                Order now
              </button>
            </Link>
          </div>
        </div>
        <div className="flex w-[260px] h-[450px] flex-col bg-[#C08267] rounded-[20px] p-3 gap-y-2">
          <Link to="/btn">
            <img
              src={Latte}
              alt=""
              className="flex w-[230px] h-[150px] rounded-[20px] "
            />
          </Link>
          <Link to="/btn">
            <h4>Latte</h4>
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa,
            fermentum id id vitae, integer fermentum tellus. In vitae id nisl
            quis ornare diam commodo in vel dolor.
          </p>
          <div className="flex justify-between items-center pt-5">
            <p>$11.40</p>
            <Link to="/btn">
              <button className="flex w-[120px] h-[30px] rounded-lg shadow-[#000] shadow-[30px] bg-[#A0583C] hover:bg-[#5f5f5e] text-[white]  hover:scale-100   justify-center items-center ">
                Order now
              </button>
            </Link>
          </div>
        </div>
        <div className="flex w-[260px] h-[450px] flex-col bg-[#C08267] rounded-[20px] p-3 gap-y-2">
          <Link to="/btn">
            <img
              src={java}
              alt=""
              className="flex w-[230px] h-[150px] rounded-[20px] "
            />
          </Link>
          <Link to="/btn">
            <h4>Cold Java</h4>
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa,
            fermentum id id vitae, integer fermentum tellus. In vitae id nisl
            quis ornare diam commodo in vel dolor.
          </p>
          <div className="flex justify-between items-center pt-5">
            <p>$6.40</p>
            <Link to="/btn">
              <button className="flex w-[120px] h-[30px] rounded-lg shadow-[#000] shadow-[30px] bg-[#A0583C] hover:bg-[#5f5f5e] text-[white]  hover:scale-100   justify-center items-center ">
                Order now
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* coffee type end */}
      <div className="flex">
        <img src={BelowLine} alt="" className="flex" />
      </div>
      <div className="flex">
        <Link to="/btn">
          <img src={logo1} alt="" className="flex" />
        </Link>
        <Link to="/btn">
          <img src={logo2} alt="" className="flex" />
        </Link>
        <Link to="/btn">
          <img src={logo3} alt="" className="flex" />
        </Link>
        <Link to="/btn">
          <img src={logo4} alt="" className="flex" />
        </Link>
      </div>
    </div>
  );
};

export default Wrapper;
