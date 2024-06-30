import { jobs } from "../websiteInfo";

export default function Second() {
    return (
<div className="my-32 px-8 md:px-52 items-center text-center md:text-start">
  <h1 className="text-4xl md:text-5xl font-semibold md:text-center">
    Career Openings
  </h1>
  <div className="w-full gap-8 mt-8 flex flex-col">
    {
      jobs.map((job, index) => (
        <div key={index} className="py-10 px-10 grid grid-cols-1 md:grid-cols-8 gap-4 rounded-md bg-card shadow-md items-center text-start">
          <h2 className="font-medium text-2xl md:col-span-3">{job.name}</h2>
          <div className="col-span-4 md:col-span-4 grid grid-cols-1 md:grid-cols-3 gap-2">
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
          <a
            href={"/apply/1?id=" + job.id}
            className="col-span-4 md:col-span-1 bg-primary text-white rounded-md px-2 md:px-4 py-2 inline-block md:ml-auto text-center"
          >
            Apply Now
          </a>
        </div>
      ))
    }
  </div>
</div>

    )
}