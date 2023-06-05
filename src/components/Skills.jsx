import React from 'react';

// import skill data
import { skills } from '../data';

const Skills = () => {
  return (
     <section id="skills" className="py-14 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Technical Skills</p>
        <div
          className='md:w-8/12 mt-3 mx-auto grid grid-cols-7 px-2 md:grid-flow-col items-center justify-center'>
          {skills.map((skill, index) => {
            return (
              <div key={index} className='group p-2 flex items-center justify-center'>
                <div className='md:p-2 rounded-full' style={{background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`}}>
                  <div className={`w-16 h-16 md:w-20 md:h-20 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-gray-800`}>
                    <img className='lg:h-20' src={skill.image} alt='' />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
