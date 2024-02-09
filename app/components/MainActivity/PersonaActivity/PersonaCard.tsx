"use client";
import React, { useContext, useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Fade from "react-bootstrap/Fade";
import Image from "next/image";
import style from "@/app/styles/MainActivity/PersonaActivity/personaCard.module.css";
import { AppContext } from "@/app/context/store";

export default function PersonaCard({
  type,
  profileImage,
  pointerImage,
  personaColor,
  highlightColor,
  open,
  setOpen,
  id,
}: {
  type: string;
  profileImage: string;
  pointerImage: string;
  personaColor: string;
  highlightColor: string;
  open: any;
  setOpen: any;
  id: number
}) {
  return type == "heads" ? (
    <HeadCard open={open} setOpen={setOpen} />
  ) : (
    <ProfileCard
      profileImage={profileImage}
      pointerImage={pointerImage}
      personaColor = {personaColor}
      highlightColor = {highlightColor}
      open={open}
      setOpen={setOpen}
      id = {id}
    />
  );
}

function HeadCard({ open, setOpen }: { open: any; setOpen: any }) {
  return (
    <div className={`${style.headCard}`}>
      <div className={`${style.headGraphic} fw-bold`}>Demographics</div>
      <div className={`${style.headType} text-muted`}>Persona Type</div>
      <div className={`${style.headName} text-muted`}>Fictional Name</div>
      <div>
        <div
          className={`${style.headAttr} text-muted`}
          style={{ display: open ? "flex" : "none" }}
        >
          <div>Age</div>
          <div>Location</div>
          <div>Gender</div>
          <div>Income</div>
        </div>
      </div>
      <div className={`${style.arrbtn}`} onClick={() => setOpen(!open)}>
        <Image
          src={open ? "/up-arrow.png" : "/down-arrow.png"}
          width={15}
          height={15}
          alt="down-arrow"
        />
      </div>
      <div className={`${style.addBtn} text-primary fw-b`}>+ Add</div>
    </div>
  );
}

function ProfileCard({
  profileImage,
  pointerImage,
  personaColor,
  highlightColor,
  open,
  setOpen,
  id,
}: {
  profileImage: string;
  pointerImage: string;
  personaColor: string;
  highlightColor: string;
  open: any;
  setOpen: any;
  id: number;
}) {
  const [highlight, showHighlight] = useState(false);
  const {highlightId,setHighLightID} = useContext(AppContext);

  return (
    <div
      className={`${style.personaCard}`}
      onClick={() => {

        if(highlight && highlightId != id){
          //first switch click
          console.log("coming here");
          showHighlight(true);
          setHighLightID(id);
        }

        if(!highlight){
          showHighlight(true);
          setHighLightID(id);
        } else {
          showHighlight(false);
          setHighLightID(0);
        }
        console.log("currentID: " + id);
      }}
    >
        <div className={`${style.holder} rounded-pill p-3`}>...</div>

      { highlightId === id ?
      highlight ? (
        <HighLightedImage profileImage={profileImage} personaColor={personaColor} highlightColor={highlightColor} />
      ) : (
        <NormalImage profileImage={profileImage} />
      ) : <NormalImage profileImage={profileImage} /> }
      <div className={`${style.personaType} text-muted`}>NewType</div>
      <div className={`${style.personaName} text-muted`}>SomeName</div>
      <div
        className={`${style.personaAttr} text-muted`}
        style={{ display: open ? "flex" : "none" }}
      >
        <div>Age 1</div>
        <div>Location 1</div>
        <div>Gender 1</div>
        <div>Income 1</div>
      </div>
      <div className={`${style.arrbtn}`} onClick={() => setOpen(!open)}>
        <Image
          src={open ? "/up-arrow.png" : "/down-arrow.png"}
          width={15}
          height={15}
          alt="down-arrow"
        />
      </div>
      <div>
        <Image src={pointerImage} width={highlight ? 40 : 30} height={highlight ? 40 : 30} alt="down-arrow" />
      </div>
    </div>
  );
}

function HighLightedImage({ profileImage,personaColor, highlightColor }: { profileImage: string, personaColor:string,highlightColor:string }) {
  return (
    <div className={`${style.personaImage} rounded-circle`} style={{borderColor: personaColor}}>
      <div className={`${style.innerCircle} rounded-circle`}>
        <div className={`${style.backgroundCircle} rounded-circle`} style={{backgroundColor: highlightColor}}></div>
        <Image src={profileImage} width={100} height={100} alt={"profile"} />
      </div>
    </div>
  );
}

function NormalImage({ profileImage }: { profileImage: string }) {
  return <Image src={profileImage} width={100} height={100} alt={"profile"} />;
}
