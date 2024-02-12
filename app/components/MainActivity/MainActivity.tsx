"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import style from "../../styles/MainActivity/main.module.css";
import ActivityHeader from "./ActivityHeader";
import PersonaActivity from "./PersonaActivity/PersonaActivity";
import SectionActivity from "./SectionActivity/SectionActivity";


export default function MainActivity() {

  return (
      <div className={`${style.main}`}>
        <div className={`${style.activitySection}`}>
          <ActivityHeader />
          <PersonaActivity />
          <SectionActivity />
          {/* <svg className='mapper-line'>
        <line x1={pointerCordinate ? pointerCordinate.left : 0} y1={pointerCordinate ? pointerCordinate.top : 50} x2={firstPoint? firstPoint.left : 250} y2={firstPoint ? firstPoint.top : 50} style={{stroke:"red", strokeWidth: 12}} />
        </svg> */}
        </div>
      </div>
  );
}
