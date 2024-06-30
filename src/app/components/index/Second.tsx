import Image from 'next/image'

export default function Second() {
    return (
        <div className="w-full h-[40vh] bg-white flex flex-col justify-center items-center py-8">
            <Image src="/images/other/plant.png" width={80} height={80} alt="plant icon"></Image>
  <h2 className="text-2xl md:text-4xl text-primary font-semibold md:w-1/3 text-center mt-4 px-8">
    The Modern Solution to Interior Design and House Plant Integration
  </h2>
</div>
    )
}