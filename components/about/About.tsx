"use client"
import "./about.css"

const About = ()=>{

    return (
        <>
        <div className="container mx-auto mt-5" id="about">
            <div className="h-screen p-2">
                 <div className="flex">
                     <span className="numbered_idx">01. </span> 
                     <p className="h2">About Me</p>
                     <span className="line_"></span>
                 </div>
                    <div className="p-5">
                            // write short about yourself and style it tailwindcss
                            <p className="text-lg">I am a full stack developer with 3 years of experience in web development. I have worked with various technologies like React, Nodejs, Express, MongoDB, and many more. I have a good understanding of the MERN stack and I am always eager to learn new technologies. I have worked on various projects and I have a good understanding of the software development life cycle. I am a quick learner and I am always ready to take on new challenges.</p>
                    </div>
            </div>
        </div>
        </>
    );
}

export default About;