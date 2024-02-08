import style from "@/app/styles/MainActivity/PersonaActivity/right.module.css";
import PersonaCard from "./PersonaCard";
import { data } from "@/public/data/data";
import Image from "next/image";
import { useState } from "react";
export default function RightSection({
  open,
  setOpen,
}: {
  open: any;
  setOpen: any;
}) {
  const [activeAddToolTip, setActiveAddToolTip] = useState(false);

  function handleAddition() {
    console.log("hello");
  }

  return (
    <div className={`${style.main}`}>
      <div className={`${style.cardContainer}`}>
        {data.map((d, i) => {
          return (
            <PersonaCard
              key={i}
              type={d.type}
              profileImage={d.profileImage}
              pointerImage={d.pointerImage}
              personaColor={d.personaColor}
              highlightColor={d.highlightColor}
              open={open}
              setOpen={setOpen}
            />
          );
        })}
      </div>
      <div
        className={`${style.personaAddBtn} rounded-circle`}
        onClick={() => setActiveAddToolTip(!activeAddToolTip)}
      >
        +{activeAddToolTip ? <Tooltip /> : null}
      </div>
    </div>
  );
}

function Tooltip() {
  function handleAddition() {
    const newPersona = {
      type: "card",
      profileImage: "/profile-img.svg",
      pointerImage: "/pointer.svg",
      personaColor: "#3d79d6",
      highlightColor: "#3d79d666",
    };
    data.push(newPersona);
  }
  return (
    <div className={`${style.toolTip} border`} onClick={() => handleAddition()}>
      <div className={`${style.toolTipItem}`}>
        <Image
          width={20}
          height={20}
          src="https://d1ehtu126lxvny.cloudfront.net/static/media/frontend/images/assets/add-default-persona.svg"
          alt="add-default-persona"
        />
        <span>Add Persona</span>
      </div>
      <div className={`${style.toolTipItem} mt-4`}>
        <Image
          width={20}
          height={20}
          src="https://d1ehtu126lxvny.cloudfront.net/static/media/frontend/images/assets/add-company-persona.svg"
          alt="add-default-persona"
        />
        <span>Add Company</span>
      </div>
    </div>
  );
}
