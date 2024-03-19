"use client";

import React from "react";
import "./Home.css";
const HomePage = () => {
    return (
        <div className="container mx-auto " id="main">
            <ul className="background">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className="flex items-center justify-center h-screen p-10">
                <div className="">
                    <p className="font-bold">Hi there, I'm called</p>
                    <br />
                    <h2 className="text-5xl font-bold">Ali Benhenia</h2> 
                    <br />
                    <h3 className="font-bold">I'm a software engineer, crafting outstanding digital experiences, with a focus on creating accessible, user-centric products at <a className="" href="">42 network</a></h3>
                    <a href="#" className="">
                        <button className="font-bold py-2 px-4 rounded mt-5 " id="hire_me">
                            Hire me
                        </button>
                    </a>
                </div>
            </div>
            <div className="center">
                <a href="#">
                    <svg width="40" height="90" viewBox="0 0 50 130">
                        <rect id="scroll" x="0" y="5" rx="25" ry="25" width="50" height="120" stroke="#64ffda" fill="#0A1930" stroke-width="4"></rect>
                        <circle id="circle--shape" cx="25" cy="32" r="8" fill="#64ffda"></circle>
                    </svg>
                </a>
            </div>
        </div>
    );
}
export default HomePage;