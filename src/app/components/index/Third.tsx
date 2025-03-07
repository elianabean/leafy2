export default function Third() {
    return (
        <div
  className="flex flex-col items-center justify-center md:justify-between py-8 px-8 md:px-0 my-4 md:my-12 md:gap-8 gap-28 text-center md:text-start"
>
  {/* Section 1 */}
  <div
    className="flex flex-col-reverse md:flex-row items-center md:w-[65vw] md:gap-20 gap-8 h-full py-0 md:py-16"
  >
    {/* Image */}
    <div className="mt-4 md:mt-0 md:ml-4">
      <h2
        className="text-4xl text-center md:text-left font-semibold"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        We are Leafy.
      </h2>
      <p
        className="text-lg mt-2 "
        data-aos="fade-right"
        data-aos-delay="250"
        data-aos-duration="1000"
      >
        We provide <em className="not-italic text-primary font-bold">innovative</em>, <em className="not-italic text-primary font-bold">modern</em> solutions to sprucing up your space with house plants. Whether it be to lighten
        up an office, or liven up a living area, we have a package for you. From
        the initial design, to the plant design, to the final installation in your
        home, we will be with you every step of the way.
      </p>
    </div>
    {/* https://pixabay.com/photos/man-suit-success-business-career-7956041/ */}
    <img
      src="/images/other/man.jpg"
      className="w-[60vw] h-[60vw] md:w-[25vw] md:h-[25vw] object-cover object-top rounded-full"
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-delay="500"
      alt="man"
    />
  </div>

  {/* Section 2 */}
  <div
    className="flex flex-col md:flex-row items-center md:w-[65vw] md:gap-20 gap-8 h-full py-0 md:py-16"
  >
    {/* Image */}
    {/* https://pixabay.com/photos/home-house-interior-design-living-2609600/ */}
    <img
      src="/images/other/home.jpg"
      className="w-[75vw] h-[75vw] md:w-[25vw] md:h-[25vw] object-cover object-top rounded-full"
      alt="Section 2 Image"
      data-aos="fade-right"
      data-aos-delay="500"
      data-aos-duration="1000"
    />
    <div className="mt-4 md:mt-0 md:ml-4">
      <h2
        className="text-4xl text-center md:text-left font-semibold"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        Consultations
      </h2>
      <p
        className="text-lg mt-2"
        data-aos="fade-left"
        data-aos-delay="250"
        data-aos-duration="1000"
      >
        Schedule a consultation today with our team of top designers. From
        color, aura, to even pot style, we have a design for you. Show us your
        space and tell us your ideas, and we will guide you on how to create the <em className="not-italic text-primary font-bold">home of your dreams</em>.
      </p>
    </div>
  </div>

  {/* Section 3 */}
  <div
    className="flex flex-col-reverse md:flex-row items-center md:w-[65vw] md:gap-20 gap-8 h-full py-0 md:py-16"
  >
    {/* Image */}
    <div className="mt-4 md:mt-0 md:ml-4">
      <h2
        className="text-4xl text-center md:text-left font-semibold"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        Designs
      </h2>
      <p
        className="text-lg mt-2"
        data-aos="fade-right"
        data-aos-delay="250"
        data-aos-duration="1000"
      >
        Not feeling any of our existing designs? Order a <em className="not-italic text-primary font-bold">custom plant</em> designed by our team of specialists that perfectly match your desired environment.
        You have control over each step in the design process.
      </p>
    </div>
    {/* https://pixabay.com/photos/cacti-flora-flowers-pot-1846147/ */}
    <img
      src="/images/other/plant2.jpg"
      className="w-[75vw] h-[75vw] md:h-[25vw] md:w-[25vw] object-cover object-top rounded-full"
      alt="Section 1 Image"
      data-aos="fade-left"
      data-aos-delay="500"
      data-aos-duration="1000"
    />
  </div>
</div>

    )
}