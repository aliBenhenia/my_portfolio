"use client";

import Circles from "@/components/Circles";
import Image from "next/image";
import {useEffect, useState} from "react";

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
      </div>
    </>
  );
}
