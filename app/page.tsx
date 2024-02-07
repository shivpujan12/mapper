import Image from "next/image";
import styles from "./page.module.css";
import MainActivity from "./components/MainActivity/MainActivity";

export default function Home() {
  return (
    <div>
      <MainActivity />
    </div>
  );
}
