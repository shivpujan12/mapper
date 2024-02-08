import React from "react";
import style from "@/app/styles/navbar.module.css";
import Image from 'next/image';

export default function NavBar() {
  return (
    <div className={`${style.main}`}>
      <div className={`${style.leftPart}`}>
        <Image src={"/logo.svg"} width={30} height={30} alt={"logo"}  />
        <div className={`${style.attrLib} rounded-pill`}>
        <Image width={25} height={25} src="https://d1ehtu126lxvny.cloudfront.net/static/media/frontend/images/assets/persona-attributes.svg" alt="persona-attributes" />
        <div>Attributes Library</div>
        </div>
      </div>
      <div className={`${style.rightPart}`}>
        <div className="text-muted">Last edit was made <b>8 minutes ago</b> by <b>someuser</b></div>
        <div className={`${style.shareBtn} rounded-pill`}>Share</div>
        <div className={`${style.presentBtn} rounded-pill`}>
        <Image width={20} height={20} src="https://d1ehtu126lxvny.cloudfront.net/static/media/frontend/images/header/blue-right-arrow.svg" alt="play" />
        <div>Present</div>
        </div>
        <Image width={20} height={20} src="/ai-icon.svg" alt="export" />
        <Image width={20} height={20} src="https://d1ehtu126lxvny.cloudfront.net/static/media/frontend/images/assets/download.svg" alt="export" />
        <Image width={25} height={25} alt={"profile"} src="https://d1ehtu126lxvny.cloudfront.net/static/media/frontend/images/assets/comments-1.svg"/>
        <Image width={35} height={35} alt={"profile"} src="https://d1ehtu126lxvny.cloudfront.net/user/media/default/user.svg"/>
        
        
      </div>
    </div>
  );
}
