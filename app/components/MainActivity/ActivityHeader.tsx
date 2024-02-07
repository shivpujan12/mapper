import React from 'react'
import style from '../../styles/MainActivity/activityHeader.module.css'
import Image from "next/image";

export default function ActivityHeader() {
  return (
    <div className={`row ${style.main}`}>
        <div className={`col-2  text-center mb-2`}>
            <div className={`${style.brandLogo} text-muted p-6`}>
                Brand Logo
                <div><Image src={"/add-picture.svg"} width={20} height={20} alt={"add-pic"} /></div>
            </div>
        </div>
        <div className={`col-10  text-center`}>
            Mapper Title
        </div>
    </div>
  )
}
