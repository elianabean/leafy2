import Link from 'next/link'
import Image from 'next/image'
import {Button} from '@nextui-org/button'

export default function First() {
    return (
        <div className="w-full flex flex-col items-center relative py-48 px-8 text-center z-10">
            <h1 className="md:text-7xl text-5xl font-bold text-shadow">Careers</h1>
            <p className="text-lg whitespace-normal mt-4">We love plants. We love people.</p>
            <Link href="/growwithus"><Button color="primary" className="mt-4 px-4 py-6 bg-primary text-white shadow-md shadow-gray-300 text-[18px]" radius="md">Apply Now</Button></Link>
            
            <div className="absolute inset-0 -z-10 opacity-50">
                <Image src="/images/backgrounds/careers.jpg" fill={true} alt="Background" className="w-full h-full object-cover blur-sm"></Image>
            </div>
        </div>
    )
}