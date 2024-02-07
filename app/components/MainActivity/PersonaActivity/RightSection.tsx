import style from "@/app/styles/MainActivity/PersonaActivity/right.module.css";
import PersonaCard from "./PersonaCard";
export default function RightSection({open, setOpen }: {open: any, setOpen:any}) {
  
  return (
    <div className={`${style.main}`}>
      <div className={`${style.cardContainer}`}>
        <PersonaCard type="card" profileImage="/profile-img.svg" open={open} setOpen={setOpen}/>
        <PersonaCard type="card" profileImage="/profile-img2.svg" open={open} setOpen={setOpen}/>
        <PersonaCard type="card" profileImage="/profile-img3.svg" open={open} setOpen={setOpen}/>
        <PersonaCard type="card" profileImage="/profile-img.svg" open={open} setOpen={setOpen}/>
        <PersonaCard type="card" profileImage="/profile-img2.svg" open={open} setOpen={setOpen}/>
        <PersonaCard type="card" profileImage="/profile-img3.svg" open={open} setOpen={setOpen}/>
        <PersonaCard type="card" profileImage="/profile-img2.svg" open={open} setOpen={setOpen}/>
      </div>
    </div>
  );
}
