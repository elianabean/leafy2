import Image from 'next/image'

export default function Fifth() {
    return (
        <div
  className="w-full flex flex-col text-center items-center justify-center py-32 md:py-40 px-[10vw]"
>
  <h1
    className="text-4xl md:text-6xl font-semibold"
    data-aos="fade-right"
    data-aos-duration="2000"
  >
    <em className="not-italic text-primary">Trusted</em> and <em
      className="not-italic text-primary">Loved</em> by Customers
  </h1>
  <div
    className="w-full flex flex-col md:flex-row items-center justify-between mt-16 gap-16"
  >
    <div
      className="flex flex-col items-center md:w-1/3 gap-2 px-20"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
        <Image src="/images/other/light-bulb.png" alt="Image 1" width={64} height={64}></Image>
      <h1 className="text-4xl text-primary">Innovation</h1>
      <p className="text-lg">
        We produce new ideas and never-seen-before plant designs.
      </p>
    </div>
    <div
      className="flex flex-col items-center md:w-1/3 gap-2 px-20"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
        <Image src="/images/other/passion.png" alt="Image 1" width={64} height={64}></Image>
      <h1 className="text-4xl text-primary">Passion</h1>
      <p className="text-lg">
        We love what we do for customers, and we put our all into every design.
      </p>
    </div>
    <div
      className="flex flex-col items-center md:w-1/3 gap-2 px-20"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
        <Image src="/images/other/energy.png" alt="Image 1" width={64} height={64}></Image>
      <h1 className="text-4xl text-primary">Efficiency</h1>
      <p className="text-lg">
        We prioritize our customers’ time while ensuring top quality.
      </p>
    </div>
  </div>
</div>

    )
}