// Author: Stephen Zhang
// Created: 2023-12-16
// Purpose: The home page of the website
// Description: The site is split up into five different sections, represented by the five different components being imported.
import First from "./components/index/First";
import Second from "./components/index/Second";
import Third from "./components/index/Third";
import Fourth from "./components/index/Fourth";
import Fifth from "./components/index/Fifth";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between bg-white overflow-x-hidden">
      <First></First>
      <Second></Second>
      <Third></Third>
      <Fourth></Fourth>
      <Fifth></Fifth>
    </div>
  );
}
