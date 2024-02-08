import style from "@/app/styles/MainActivity/PersonaActivity/right.module.css";
import PersonaCard from "./PersonaCard";
export default function RightSection({open, setOpen }: {open: any, setOpen:any}) {
  
  return (
    <div className={`${style.main}`}>
      <div className={`${style.cardContainer}`}>
        <PersonaCard type="card" profileImage="/profile-img.svg" pointerImage="/pointer.svg" open={open} setOpen={setOpen}/>
        <PersonaCard type="card" profileImage="/profile-img2.svg" pointerImage="/pointer2.svg" open={open} setOpen={setOpen}/>
        <PersonaCard type="card" profileImage="/profile-img3.svg" pointerImage="/pointer3.svg" open={open} setOpen={setOpen}/>
        <PersonaCard type="card" profileImage="/profile-img.svg" pointerImage="/pointer.svg" open={open} setOpen={setOpen}/>
        <PersonaCard type="card" profileImage="/profile-img2.svg" pointerImage="/pointer2.svg" open={open} setOpen={setOpen}/>
        <PersonaCard type="card" profileImage="/profile-img3.svg" pointerImage="/pointer3.svg" open={open} setOpen={setOpen}/>
        <PersonaCard type="card" profileImage="/profile-img2.svg" pointerImage="/pointer.svg" open={open} setOpen={setOpen}/>
      </div>
      <div className={`${style.personaAddBtn} rounded-circle`}>
        +
      </div>
    </div>
  );
}
