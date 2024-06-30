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
