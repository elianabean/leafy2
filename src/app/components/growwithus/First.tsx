import Image from 'next/image'

export default function First() {
    return (
        <div className="w-full flex flex-col items-center relative py-48 px-8 text-center z-10">
            <h1 className="md:text-7xl text-5xl font-bold text-shadow">Grow with us</h1>
            <p className="text-lg whitespace-normal mt-4">
                Explore a variety of careers to join our team and contribute your skills.
            </p>
            <div className="absolute inset-0 -z-10 opacity-50">
            <Image src="/images/backgrounds/grow.jpg" className="blur-sm" fill={true} alt="Background"></Image>
            </div>
        </div>

    )
}