// 'use client';
import Image from "next/image";
import styles from "./page.module.css";
import MainActivity from "./components/MainActivity/MainActivity";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <MainActivity />
    </div>
  );
}
