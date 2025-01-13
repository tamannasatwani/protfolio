import React from 'react'
import Title from '../layouts/Title'
import {  projectTwo } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          des="My Project"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">

        <ProjectsCard className='flex justify-center items-center text-center'
          title="Amazon E-commerce Website"
          des=" Tried making the clone of amazon with the help of React js in which we have made some functionality like add to cart we ahve added the link of code which we have uploaded on github and project we have deployed 
          on vercel you can kindly visit that!"
          src={projectTwo}
        />
         
      </div>
    </section>
  );
}

export default Projects