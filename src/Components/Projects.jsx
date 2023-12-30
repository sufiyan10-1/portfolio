import React from "react";
import usability_hub_clone from "../assets/usability_hub_clone.png";
import Bus_booking_system from "../assets/Bus_booking_system.png";
import current_time from "../assets/current_time.png";
import guess_number from "../assets/guess_number.png";
import {Link} from 'react-router-dom'

const Projects = () => {
  const projects = [
    {
      img: usability_hub_clone,
      title: "usability_hub_clone",
      desc: " Base on core HTML, CSS, JS. it use to enhance my UI skill ",
      code: "https://github.com/sufiyan10-1/News_app",
    },
    {
      img: Bus_booking_system,
      title: "Bus_booking_system",
      desc: " Base on core HTML, CSS, JS. it helps to book the bus ticket ",
      // live: "https://github.com/shubhankarsharma876/Password-Manager/",
      code: "https://github.com/sufiyan10-1/bus-booking",
    },
    {
      img: current_time,
      title: "current_time",
      desc: " Base on core HTML, CSS, JS. Show the current Time",
      // live: "https://blogging-website-azure.vercel.app/",
      code: "https://github.com/sufiyan10-1/current_time.",
    },
    {
      img: guess_number,
      title: "guess_number",
      desc: " Base on core HTML, CSS, JS. It is one type of game use to generate random number and guess that number.",
      // live: "https://delicious-recipes-here.vercel.app/",
      code: "https://github.com/sufiyan10-1/Guess_number",
    },

  ];

  return (
    <section className="bg-gray-700 text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects. I have built these with React,
            MERN and vanilla CSS. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-blue-800">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  {/* <Link
                    to={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Live
                  </Link> */}
                  <Link
                    to={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
