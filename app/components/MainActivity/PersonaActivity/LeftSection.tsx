import style from "@/app/styles/MainActivity/PersonaActivity/left.module.css";
import PersonaCard from "./PersonaCard";

export default function LeftSection({
  open,
  setOpen,
}: {
  open: any;
  setOpen: any;
}) {
  return (
    <div className={`${style.main}`}>
      <div className={`${style.heading}`}>
        <PersonaCard
          type="heads"
          profileImage=""
          pointerImage=""
          open={open}
          setOpen={setOpen}
        />
      </div>
    </div>
  );
}
