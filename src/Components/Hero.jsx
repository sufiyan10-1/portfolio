import React from "react";
import HeroImg from "../assets/hero-img.png";
import { Link } from "react-router-dom";
import {
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

const Hero = () => {

  return (
    <section className="bg-gray-900 px-5 text-white py-32">
      <div className="container mx-auhref grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl font-serif">
            Hi, <br />I am <span className="text-blue-500">Sufiyan</span> Khan <br />
          </h1>

          <p className="py-4 font-mono">
           I am an undergraduate from India. Currently Working on MERN stack.
          </p>

           <div className="flex py-5 ">
            <Link
              to= "#"
              className="pr-4 inline-block text-blue-600  hover:text-white"
            >
              {" "}
              <AiOutlineTwitter size={40} />{" "}
            </Link>
            <Link
              to="https://www.linkedin.com/in/sufiyan-khan-47486524a/"
              className="pr-4 inline-block text-blue-600 hover:text-white"
            >
              {" "}
              <AiOutlineLinkedin size={40} />{" "}
            </Link>
            <Link
              to="https://github.com/sufiyan10-1"
              className="pr-4 inline-block text-blue-600 hover:text-white"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </Link>
          </div>

          <Link
            to="/projects"
            className=" btn bg-blue-500  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </Link>
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auhref"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
