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
                    <p className="text-lg">I am a full stack developer with 3 years of experience in web development</p>
                    </div>
            </div>
        </div>
        </>
    );
}

export default About;