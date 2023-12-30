import React from "react";
import AboutImg from "../assets/about.png";

const About = () => {
  return (
    <section className="bg-gray-800 text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, My name is Sufiyan Khan. I am a an undergraduate Bachelor of Computer Application student from India. I can build beautifull websites with React and Tailwind CSS.
          </p>
          <p className="pb-5">
            I am using  React.js, Tailwind CSS, HTML, etc for Frontend.
          </p>

          <p>In backend I uses Node.js, Express.js, MongoDB, MySQL, Firestore.</p>

          <p>For deployment currently using Appwrite, Firebase, GitHub.</p>

          <p>
            In my spare time I use to enjoy with video games, reading Biographies and web Series as well.
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt=""
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
    
  );
};

export default About;
