// Author: Eliana Wang
// Data: 2023-12-17
// Description: Hero page of the website
// This section contains the name of the company, a very brief description, two buttons, and a 3D model of a plant.

import Model from "../model/Scene";
import { Button } from "@nextui-org/button";
import Link from 'next/link'

export default function First() {
    return (
        <div className="w-[100vw]">

            {/* Background Blobs */}
            <div className="absolute ">
                <div className="h-[90svh] relative w-[100vw] flex flex-col justify-center overflow-x-hidden font-semibold overflow-y-hidden md:overflow-y-auto ">
                    <div
                        className="absolute -top-16 -right-16 md:top-1/4 md:right-1/4 w-72 h-72 bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(63,169,41,0.8)_0%,rgba(255,255,255,0.00)_100%)] md:bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(63,169,41,0.6)_0%,rgba(255,255,255,0.00)_100%)] mix-blend-multiply rounded-full filter blur-xl opacity-30 animate-blob"
                    >
                    </div>
                    <div
                        className="absolute -bottom-16 -left-16 md:top-1/3 md:left-4 w-72 h-72 bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(63,169,41,0.8)_0%,rgba(255,255,255,0.00)_100%)] md:bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(63,169,41,0.6)_0%,rgba(255,255,255,0.00)_100%)] mix-blend-multiply rounded-full filter blur-xl opacity-30 animate-blob animation-delay-2000"
                    >
                    </div>
                </div>
            </div>

            <div
                className="h-[90svh] relative flex flex-col md:flex-row justify-end items-center px-4 md:px-0"
            >
                {/* Main Section Contents */}
                <div
                    className="md:pl-[10vw] flex flex-col items-center justify-center md:items-start md:w-[50vw] text-center md:text-start h-[30vh] md:h-fit"
                >
                    <h1
                        className="w-full md:text-7xl text-5xl text-shadow font-bold tracking-tight font-workSans"
                    >
                        Plant your
                    </h1>
                    <h1
                        className="md:text-7xl text-5xl text-primary text-shadow font-bold tracking-tight"
                    >
                        future
                    </h1>
                    <p
                        className="text-lg whitespace-normal mt-4 md:pr-32 "
                    >
                        Industry leaders in house plant development and maintenance.
                    </p>
                    <div className="mt-4 flex space-x-4 font-normal text-[18px]">
                        <Link
                            href="/careers"
                        ><Button color="primary" className="text-black bg-white shadow-md shadow-gray-300 text-[18px] px-4 py-6" radius="md">Explore Careers</Button>
                        </Link>
                        <Link
                            href="/growwithus"
                        ><Button color="primary" className="px-4 py-6 bg-primary text-white shadow-md shadow-gray-300 text-[18px]" radius="md">Apply Now</Button></Link>
                    </div>
                </div>

                {/* 3D Plant Model */}
                <div className="relative md:right-0 md:top-0 h-[30vh] flex flex-col justify-center md:justify-center z-20  ">
                    <Model></Model>
                </div>
            </div>

        </div>
    )
}
