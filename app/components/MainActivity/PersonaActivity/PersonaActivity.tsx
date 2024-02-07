"use client";
import React, { useState } from "react";
import style from "@/app/styles/MainActivity/PersonaActivity/persona.module.css";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

export default function PersonaActivity() {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${style.main}`}>
      <LeftSection open={open} setOpen={setOpen} />
      <RightSection open={open} setOpen={setOpen} />
    </div>
  );
}
