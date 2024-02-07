import React from 'react'
import style from "../../styles/MainActivity/main.module.css";
import ActivityHeader from './ActivityHeader';
import PersonaActivity from './PersonaActivity/PersonaActivity';


export default function MainActivity() {
  return (
    <div className={`${style.main}`}>
      <div className={`${style.activitySection}`}>
        <ActivityHeader />
        <PersonaActivity />
      </div>
    </div>
  )
}
