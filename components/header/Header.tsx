"use client";

import React,{use, useEffect, useState} from "react";
import  "./Header.css";
import Hamburger from 'hamburger-react'

const Header = () => {
  const [isOpen, setOpen] = useState(false)
 
  return (
    <header 
    className={`header fixed w-full top-0 left-0`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse logo">
              <span className="self-center text-2xl font-semibold whitespace-nowrap">ALI</span>
          </a>
          <button 
          className="inline-flex items-center p-2   md:hidden" >
              <Hamburger toggled={isOpen} toggle={setOpen} color="#64ffda" />
          </button>
          <div className="hidden w-full md:block md:w-auto mr-5 " id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border b rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <a href="#about" className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <span className="indexBinary">01. </span>
                    About
                </a>
              </li>
              <li>
                <a href="#projects" className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    <span className="indexBinary">02. </span>
                    Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    <span className="indexBinary">03. </span>
                    Contact
                </a>
              </li>
            <button className="resume">
                <a href="#resume">resume</a>
            </button>
            </ul>
          </div>
          {/* this for mobile view */}
            <div className={` w-full md:hidden ${isOpen ? "block" : "hidden"} `} id="navbar-mobile">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border b rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <a href="#about" className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <span className="indexBinary">01. </span>
                    About
                </a>
              </li>
              <li>
                <a href="#projects" className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    <span className="indexBinary">02. </span>
                    Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    <span className="indexBinary">03. </span>
                    Contact
                </a>
              </li>
            <button className="resume mt-5">
                <a href="#resume">resume</a>
            </button>
            </ul>
            </div>

           {/* this for mobile view */}
        </div>
  </header>
  );
};

export default Header;