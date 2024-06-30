"use client";

import ApplyLayout from "../../components/ApplyLayout";
import { jobs } from "../../components/websiteInfo";
import { addDoc, collection } from "firebase/firestore";

import { db } from "@/firebaseConfig";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@nextui-org/button";

const inputs = [
  "First Name",
  "Last Name",
  "Pronouns",
  "Email",
  "Phone Number",
  "Address Line 1",
  "Address Line 2",
  "City",
  "State",
  "Zip Code",
];

const inputNames = [
  "First Name",
  "Last Name",
  "Pronouns",
  "Email",
  "Phone Number",
  "Address Line 1",
  "Address Line 2",
  "City",
  "State",
  "Zip Code",
];

const required = [
  "First Name",
  "Last Name",
  "Pronouns",
  "Email",
  "Phone Number",
  "Address Line 1",
  "City",
  "State",
  "Zip Code",
];

export default function GrowWithUs() {
  const router = useRouter();

  // Function that handles the form submission
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    e.preventDefault();
    let data: { [key: string]: string } = {};
    // Grab the data from the form and store it in an object
    inputNames.forEach((input) => {
      const element = document.getElementById(input) as HTMLInputElement;
      if (element) {
        data[input] = element.value;
      }
    });

    // Send data to firebase and wait for the response
    await addDoc(collection(db, "applications"), data);

    // Once the document is added, redirect the user to the next page
    router.push("/apply/3");
  };

  return (
    <ApplyLayout>
      <div className="shadow-lg">
        <div className="flex-col bg-tertiary items-center justify-center text-center py-16 rounded-t-lg">
          <h1 className="text-3xl font-semibold">Leafy Application</h1>
        </div>
        <div id="appForm">
          <div className="flex-col bg-card items-center md:items-start px-4 md:px-20 py-12">
            <h2 className="text-2xl text-primary mb-4">
              Position<em className="text-xs not-italic text-red-500"> *</em>
            </h2>

            <select
              id="Position"
              name="Position"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mb-4"
              required
            >
              <option value=""></option>
              {jobs.map((job, index) => (
                <option id={job.id} value={job.id} key={index}>
                  {job.name}
                </option>
              ))}
            </select>
            <h2 className="text-2xl text-primary mb-4">Personal Information</h2>
            <div className="grid md:grid-cols-2 md:gap-x-16">
              {inputs.map((input, index) => (
                <React.Fragment key={index}>
                  <div key={index} className="mb-4">
                    <p>
                      {input}
                      <em className="text-xs not-italic text-red-500">
                        {required.includes(input) ? "*" : ""}
                      </em>
                    </p>
                    <input
                      type="text"
                      name={inputNames[index]}
                      id={inputNames[index]}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mb-4"
                    />
                  </div>
                </React.Fragment>
              ))}
            </div>
            <h2 className="text-2xl text-primary mb-4">Links</h2>

            <div className="grid md:grid-cols-2 md:gap-x-16">
              <div>
                <p>LinkedIn</p>
                <input
                  type="text"
                  id="LinkedIn"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mb-4"
                />
              </div>
              <div>
                <p>GitHub</p>
                <input
                  type="text"
                  id="GitHub"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mb-4"
                />
              </div>
              <div>
                <p>Other</p>
                <input
                  type="text"
                  id="Other"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mb-4"
                />
              </div>
            </div>
            <h2 className="text-2xl text-primary mb-4">
              Application Questions
            </h2>
            <p>
              Why are you qualifed for this job?{" "}
              <em className="text-xs not-italic text-red-500">*</em>
            </p>
            <textarea
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mb-4 h-40"
              id="Qualifications"
            ></textarea>
            <h2 className="text-2xl text-primary mb-4">Work Authorization</h2>
            <input
              type="checkbox"
              id="work_auth"
              name="work_auth"
              value="us_citizen"
            />
            <label htmlFor="us_citizen">
              I am authorized to work in the U.S.{" "}
              <em className="text-xs not-italic text-red-500">*</em>
            </label>
            <div
              className="flex justify-center
          md:justify-end"
            >

              <Link href="/apply/2"><Button onClick={(e) => handleSubmit(e)} color="primary" className=" text-white rounded-md px-2 md:px-4 py-2 text-center mt-6 inline-block text-[18px]" radius="md">Submit</Button></Link>
            </div>
          </div>
        </div>
      </div>
    </ApplyLayout>
  );
}
