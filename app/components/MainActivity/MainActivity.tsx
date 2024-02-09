'use client';
import React, { useContext, useEffect, useState } from 'react'
import style from "../../styles/MainActivity/main.module.css";
import ActivityHeader from './ActivityHeader';
import PersonaActivity from './PersonaActivity/PersonaActivity';
import SectionActivity from './SectionActivity/SectionActivity';
import { AppContext } from '@/app/context/store';


export default function MainActivity() {
  const [highlightId,setHighLightID] = useState(0);
  const [cordinate,setCordinate] = useState([[0,0],[0,0]])
  return (
    <AppContext.Provider value={{highlightId,setHighLightID}}>
    <div className={`${style.main}`}>
      <div className={`${style.activitySection}`}>
        <ActivityHeader />
        <PersonaActivity />
        <SectionActivity />
        {/* <svg className='mapper-line'>
        <line x1="0" y1="50" x2="250" y2="50" style={{stroke:"red", strokeWidth: 12}} />
        </svg> */}
      </div>
    </div>
    </AppContext.Provider>
  )
}
