"use client";
import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Fade from "react-bootstrap/Fade";
import Image from "next/image";
import style from "@/app/styles/MainActivity/PersonaActivity/personaCard.module.css";

export default function PersonaCard({
  type,
  profileImage,
  open,
  setOpen,
}: {
  type: string;
  profileImage: string;
  open: any;
  setOpen: any;
}) {
  return type == "heads" ? (
    <HeadCard open={open} setOpen={setOpen} />
  ) : (
    <ProfileCard profileImage={profileImage} open={open} setOpen={setOpen} />
  );
}

function HeadCard({ open, setOpen }: { open: any; setOpen: any }) {
  return (
    <div className={`${style.headCard}`}>
      <div className={`${style.headGraphic} fw-bold`}>Demographics</div>
      <div className={`${style.headType} text-muted`}>Persona Type</div>
      <div className={`${style.headName} text-muted`}>Fictional Name</div>
      <button className="btn text-end" onClick={(e) => {setOpen(!open)}}>
        ⌄
      </button>
      <Fade in={open}>
        <div className={`${style.headAttr} text-muted`}>
          <div>Age</div>
          <div>Location</div>
          <div>Gender</div>
          <div>Income</div>
        </div>
      </Fade>
    </div>
  );
}

function ProfileCard({
  profileImage,
  open,
  setOpen,
}: {
  profileImage: string;
  open: any;
  setOpen: any;
}) {
  return (
    <div className={`${style.personaCard}`}>
      <Image src={profileImage} width={100} height={100} alt={"profile"} />
      <div className={`${style.personaType} text-muted`}>Designer</div>
      <div className={`${style.personaName} text-muted`}>SomeName</div>
      <button className={`btn`} onClick={() => setOpen(!open)}>
        ⌄
      </button>
      <Fade in={open}>
        <div className={`${style.personaAttr} text-muted`}>
          <div>Age 1</div>
          <div>Location 1</div>
          <div>Gender 1</div>
          <div>Income 1</div>
        </div>
      </Fade>
    </div>
  );
}
