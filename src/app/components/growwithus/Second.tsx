import { jobs } from "../websiteInfo";
import {Button} from "@nextui-org/button";
import Link from "next/link";

export default function Second() {
    return (
<div className="my-32 px-8 md:px-52 items-center text-center md:text-start">
  <h1 className="text-4xl md:text-5xl font-semibold md:text-center">
    Career Openings
  </h1>
  <div className="w-full gap-8 mt-8 flex flex-col">
    {
      jobs.map((job, index) => (
        <div key={index} className="py-10 px-10 grid grid-cols-1 lg:grid-cols-8 gap-4 rounded-md bg-card shadow-md items-center text-start">
          <h2 className="font-medium text-2xl lg:col-span-3">{job.name}</h2>
          <div className="col-span-4 lg:col-span-4 grid grid-cols-1 lg:grid-cols-3 gap-2">
            <div className="flex items-center">
              <img
                src="/images/other/tag.png"
                alt="category"
                className="w-6 h-6 mr-2"
              />
              <p>{job.category}</p>
            </div>
            <div className="flex items-center">
              <img
                src="/images/other/location.png"
                alt="location"
                className="w-6 h-6 mr-2"
              />
              <p>{job.location}</p>
            </div>
            <div className="flex items-center">
              <img
                src="/images/other/clock.png"
                alt="time"
                className="w-6 h-6 mr-2"
              />
              <p>{job.position}</p>
            </div>
          </div>
          
          <Link href={"/apply/1?id=" + job.id}><Button color="primary" className="col-span-4 lg:col-span-1 bg-primary text-white rounded-md px-2 lg:px-4 py-2 inline-block lg:ml-auto text-center text-[18px]" radius="md">Apply</Button></Link>
        </div>
      ))
    }
  </div>
</div>

    )
}