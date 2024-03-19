"use client";

import React from "react";
import "./Home.css";
const HomePage = () => {
    return (
        <div className="container mx-auto " id="main">
            <div className="flex items-center justify-center h-screen p-10">
                <div className="">
                    <p className="font-bold">Hi there, I'm called</p>
                    <br />
                    <h2 className="text-5xl font-bold">Ali Benhenia</h2>
                    <br />
                    <h3 className="font-bold">I'm a software engineer, crafting outstanding digital experiences, with a focus on creating accessible, user-centric products at <a className="" href="">42 network</a></h3>
                    <a href="" className="text-2xl font-bold">Github</a>
                </div>
            </div>
        </div>
    );
}
export default HomePage;