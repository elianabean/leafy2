import Image from 'next/image'

export default function Fourth() {
    return (
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:grid-rows-1">
  <div className="bg-secondary md:py-16">
    <div className="flex items-center justify-center py-24">
      <div className="flex flex-col items-center md:items-start md:w-[60%]">
        <Image src="/images/other/logo.png" alt="Logo" width={64} height={64} ></Image>
        <h1 className="text-5xl md:text-6xl font-bold mt-6">Join our</h1>
        <h1 className="text-5xl md:text-6xl font-bold">
          <em className="not-italic text-primary">team</em>.
        </h1>
        <a
          href="/growwithus"
          className="px-4 py-2 bg-primary text-white rounded shadow-md shadow-gray-500 mt-6"
          >Apply Now</a>
      </div>
    </div>
  </div>
  <div className="bg-tertiary flex items-start justify-center md:py-16">
    <div
      className="w-full h-full flex flex-col items-center justify-center py-20 px-16 md:px-32 text-start"
    >
      <h1
        className="text-5xl font-bold w-full"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        We want <em className="not-italic text-primary">you</em>.
      </h1>
      <p
        className="w-full mt-4 text-lg"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="500"
      >
        We are looking for passionate, driven individuals to join our team of
        designers and staff. Help us reach our mission of providing creative,
        accessible designs to homeowners. Become part of the present and future
        of home plant design.
      </p>
    </div>
  </div>
</div>

    )
}