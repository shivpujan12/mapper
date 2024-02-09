'use client';
import React, { useContext, useEffect, useState } from 'react'
import style from "../../styles/MainActivity/main.module.css";
import ActivityHeader from './ActivityHeader';
import PersonaActivity from './PersonaActivity/PersonaActivity';
import SectionActivity from './SectionActivity/SectionActivity';
import { AppContext } from '@/app/context/store';


export default function MainActivity() {
  const [highlight,showHighLight] = useState(false);
  const [highlightId,setHighLightID] = useState(0);
  return (
    <AppContext.Provider value={{highlight,showHighLight,highlightId,setHighLightID}}>
    <div className={`${style.main}`}>
      <div className={`${style.activitySection}`}>
        <ActivityHeader />
        <PersonaActivity />
        <SectionActivity />
      </div>
    </div>
    </AppContext.Provider>
  )
}
