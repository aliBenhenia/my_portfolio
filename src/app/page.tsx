"use client";

import Circles from "@/components/Circles";
import Nav from "@/components/Nav";
import {useEffect, useState} from "react";
import Content from "@/components/Content";

export default function Home() {
  const [cursor, setCursor] = useState({x: 0, y: 0});
  useEffect(() => {
    addEventListener("mousemove", (e) => {
      setCursor({x: e.clientX, y: e.clientY});
    });
  },[cursor])
  return (
    <>
      <div className="container mx-auto">
        <div className="cursor" style={{top:cursor.y, left:cursor.x}}></div>
        <Circles />
        <Nav />
        <Content />
      </div>
    </>
  );
}
