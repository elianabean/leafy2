import Image from "next/image";
import Navbar from "./components/Navbar";
import First from "./components/index/First";
import Second from "./components/index/Second";
import Third from "./components/index/Third";
import Fourth from "./components/index/Fourth";
import Fifth from "./components/index/Fifth";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-white">
      <First></First>
      <Second></Second>
      <Third></Third>
      <Fourth></Fourth>
      <Fifth></Fifth>
    </main>
  );
}
