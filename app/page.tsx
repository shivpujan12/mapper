'use client';
import Image from "next/image";
import styles from "./page.module.css";
import MainActivity from "./components/MainActivity/MainActivity";
import NavBar from "./components/NavBar";
import { useEffect, useRef, useState } from "react";
import { AppContext } from "@/app/context/store";


export default function Home() {
  const [highlightId, setHighLightID] = useState(0);
  const [p1Ref, setp1Ref] = useState();
  const [headPointer,setHeadPointer] = useState();
  let ctx = null;
  const canvas = useRef();


  function lineHandler(p1Ref:any) {
    console.log("line handler called!");
    
    // dynamically assign the width and height to canvas
    const canvasEle = canvas.current;
    canvasEle.width = canvasEle.clientWidth;
    canvasEle.height = canvasEle.clientHeight;

    // get context of the canvas
    ctx = canvasEle.getContext("2d");
    

    if (p1Ref != null) {
      console.log("in main: " ,p1Ref);
      // const p = p1Ref.getElementById('1');
      const point = getOffset(p1Ref);
      const head = getOffset(headPointer);
      console.log("x: ", point.left, "y: ", point.top);
      drawLine(
        { x: head.left+12, y: head.top+8, x1: point.left-5, y1: point.top },
        { color: "red", width: 1 }
      );
    }
  }

  // initialize the canvas context
  useEffect(() => {
    // dynamically assign the width and height to canvas
    const canvasEle = canvas.current;
    canvasEle.width = canvasEle.clientWidth;
    canvasEle.height = canvasEle.clientHeight;

    // get context of the canvas
    ctx = canvasEle.getContext("2d");
  }, []);

  useEffect(() => {
    console.log("In main Activity line: ", p1Ref);
    if (p1Ref != null) {
      const point = getOffset(p1Ref);
      const head = getOffset(headPointer);
      console.log("x: ", point.left, "y: ", point.top);
      drawLine(
        { x: head.left, y: head.top, x1: point.left, y1: point.top },
        { color: "red", width: 5 }
      );
    }
  }, []); 

  // draw a line
  const drawLine = (info, style = {}) => {
    const { x, y, x1, y1 } = info;
    const { color = "black", width = 1 } = style;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
  };


  return (
    <AppContext.Provider
      value={{
        highlightId,
        setHighLightID,
        p1Ref,
        setp1Ref,
        lineHandler,
        headPointer,
        setHeadPointer,
      }}
    >
    <div>
      <canvas className="mapper-line" ref={canvas} />
      <NavBar />
      <MainActivity />
    </div>
    </AppContext.Provider>
  );
}

export const getOffset = (el: any) => {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
};
