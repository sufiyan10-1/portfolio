import React from 'react'
import { skills } from "./data";
function Skill() {
  return (
    <section className="bg-gray-900 text-white px-5 py-32" id="skill">
        <div className="container px-5 py-10 mx-auto">
  <div className="text-center mb-20">
   
    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
      Skills &amp; Technologies
    </h1>
    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
      These are some technologies and skill sets I am handy with for making your demands complete. And to improve the Open source and other events with the solutions to the problem.
    </p>
  </div>
  <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
    {skills.map((skill) => (
      <div key={skill} className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <span className="title-font text-center font-medium text-white">
            {skill}
          </span>
        </div>
      </div>
    ))}
  </div>
</div>
    </section>
    
  )
}

export default Skill