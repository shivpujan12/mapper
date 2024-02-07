import React from 'react'
import style from "../../styles/MainActivity/main.module.css";
import ActivityHeader from './ActivityHeader';


export default function MainActivity() {
  return (
    <div className={`${style.main} border`}>
      <div className={`${style.activitySection} border`}>
        <ActivityHeader />
      </div>
    </div>
  )
}
