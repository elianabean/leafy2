import Link from 'next/link'

export default function First() {
    return (
        <div className="w-full flex flex-col items-center relative py-48 px-8 text-center z-10">
  <h1 className="md:text-7xl text-5xl font-bold text-shadow">Careers</h1>
  <p className="text-lg whitespace-normal mt-4">We love plants. We love people.</p>
  <Link
    href="/growwithus"
    className="px-4 py-2 bg-primary text-white rounded shadow-md shadow-gray-500 mt-4"
    >Apply Now</Link>
  
  <div className="absolute inset-0 -z-10 opacity-50">
    <img
      src="/images/backgrounds/careers.jpg"
      className="w-full h-full object-cover blur-sm"
    />
  </div>
</div>
    )
}