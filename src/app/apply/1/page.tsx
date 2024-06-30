"use client";
import ApplyLayout from "../../components/ApplyLayout";
import { jobs } from "../../components/websiteInfo";
import Script from 'next/script';
import {Button} from "@nextui-org/button";
import Link from 'next/link'

export default function Apply1() {
  return (
    <ApplyLayout>
      <Script id="getParams" strategy="beforeInteractive">
        {`
            window.onload = function () {
            const urlSearchParams = new URLSearchParams(window.location.search);
            const params = Object.fromEntries(urlSearchParams.entries());
            var id;
            if (params.id) {
            id = params.id;
            }
            if (!id) {
            id = "none";
            }

            var jobListing = document.getElementById(id);
            if (jobListing) {
            jobListing.style.display = "block";
            }
        };
        `}
      </Script>
      <div className="bg-transparent">
      {
      jobs.map((job, index) => (
        <div id={job.id} className="hidden shadow-lg" key={index}>
          <div className="flex-col bg-tertiary items-center justify-center text-center py-16 rounded-t-lg">
            <h1 className="text-3xl font-semibold">{job.name}</h1>
          </div>
          <div className="flex-col bg-card items-center md:items-start px-4 md:px-20 py-12">
            <h2 className="text-2xl text-primary">Job Description</h2>
            <p>{job.description}</p>
            <h2 className="text-2xl text-primary mt-8">Job Responsibilities</h2>
            <ul className="list-disc ml-6">
              {job.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
            <h2 className="text-2xl text-primary mt-8">Required Qualifications</h2>
            <ul className="list-disc ml-6">
              {job.required.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
            <h2 className="text-2xl text-primary mt-8">Preferred Qualifications</h2>
            <ul className="list-disc ml-6">
              {job.preferred.map((preference, index) => (
                <li key={index}>{preference}</li>
              ))}
            </ul>
            <div className="flex justify-center md:justify-end">
              <Link href="/apply/2"><Button color="primary" className=" text-white rounded-md px-2 md:px-4 py-2 text-center mt-6 inline-block text-[18px]" radius="md">Apply</Button></Link>
            </div>
          </div>
        </div>
      ))
    }
      </div>
    </ApplyLayout>
  );
}
