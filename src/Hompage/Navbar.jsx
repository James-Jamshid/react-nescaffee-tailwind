import React from "react";
import apple from "../assets/apple.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="bg-[url('./assets/BG.jpg')] bg-cover bg-center h-[720px]">
        {/* Navbar start */}

        <div className=" hidden md:flex items-center justify-between p-8 ">
          <div className="flex flex-1 items-center pl-10 text-3xl ">
            <Link to="/">
              <h1 className="flex">Filtro</h1>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-evenly ">
            <Link to="/btn">
              <h5>Home</h5>
            </Link>
            <Link to="/btn">
              <h5>Explore Us</h5>
            </Link>
            <Link to="/btn">
              <h5>Brands</h5>
            </Link>
            <Link to="/btn">
              <h5>Contact us</h5>
            </Link>
          </div>
          <div className="flex flex-1 items-center gap-x-3 justify-center ">
            <Link to="/btn">
              <button className="flex w-[120px] h-[30px] rounded-lg shadow-2xl bg-[#A0583C] hover:bg-[#5f5f5e] text-[white]  hover:scale-100   justify-center items-center ">
                Sign In/Login
              </button>
            </Link>
            <Link to="/btn">
              <div className="flex">
                <button className="flex w-[120px] h-[30px] rounded-lg shadow-2xl bg-[#A0583C] hover:bg-[#5f5f5e] hover:scale-100 text-[white]  justify-center items-center ">
                  {" "}
                  <img className="" src={apple} alt="" /> Get the app
                </button>
              </div>
            </Link>
          </div>
        </div>
        {/* Navbar end */}
        {/* ---------Main star----------- */}
        <div className="flex flex-col items-center justify-center pt-44 gap-y-5">
          <h2 className="flex">Power up with coffee</h2>
          <h3 className="flex">
            Start your exciting day with a cup of Brew Coffee
          </h3>
          <Link to="/btn">
            <div className="flex">
              <button className="flex w-[250px] h-[55px] rounded-lg shadow-2xl bg-[#9b7161] hover:bg-[#5f5f5e] transition duration-300 ease-in-out hover:scale-100 text-[white]  justify-center items-center ">
                Explore Us
              </button>
            </div>
          </Link>
        </div>

        {/* ---------Main end----------- */}
      </div>
    </div>
  );
};

export default Navbar;
