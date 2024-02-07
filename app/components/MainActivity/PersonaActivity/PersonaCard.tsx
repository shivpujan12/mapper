"use client";
import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Fade from "react-bootstrap/Fade";
import Image from "next/image";
import style from "@/app/styles/MainActivity/PersonaActivity/personaCard.module.css";

export default function PersonaCard({
  type,
  profileImage,
  pointerImage,
  open,
  setOpen,
}: {
  type: string;
  profileImage: string;
  pointerImage: string;
  open: any;
  setOpen: any;
}) {
  return type == "heads" ? (
    <HeadCard open={open} setOpen={setOpen} />
  ) : (
    <ProfileCard profileImage={profileImage} pointerImage={pointerImage} open={open} setOpen={setOpen} />
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
  open,
  setOpen,
}: {
  profileImage: string;
  pointerImage: string;
  open: any;
  setOpen: any;
}) {
  return (
    <div className={`${style.personaCard}`}>
      <Image src={profileImage} width={100} height={100} alt={"profile"} />
      <div className={`${style.personaType} text-muted`}>Designer</div>
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
      <Image
          src={pointerImage}
          width={30}
          height={30}
          alt="down-arrow"
        />
      </div>
    </div>
  );
}
