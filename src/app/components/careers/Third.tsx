export default function Third() {
    return (
        <div
  className="flex flex-col items-center justify-center md:justify-between py-8 px-8 md:px-0 my-12 gap-8"
>
  {/* Section 1 */}
  <div
    className="flex flex-col-reverse md:flex-row items-center md:w-[65vw] gap-20"
  >
    {/* Image */}
    <div className="mt-4 md:mt-0 md:ml-4">
      <h2 className="text-4xl text-center md:text-left font-semibold">
        Leafy Culture
      </h2>
      <p className="text-lg mt-2 text-center md:text-start">
        Leafy is a team that works together to produce creative, high-quality
        designs. Our team members are diligent and efficient, offering the best
        service to our customers. We have a work-hard, play-hard mentality and
        celebrate each success on our team. We put our all into each project,
        because that is what our customers deserve.
      </p>
    </div>
    {/* https://pixabay.com/photos/man-suit-success-business-career-7956041/ */}
    <img
      src="/images/other/tv-cabinet.jpg"
      className="w-[75vw] h-[75vw] md:w-[25vw] md:h-[25vw] object-cover object-top rounded-full"
      alt="Section 1 Image"
    />
  </div>

  {/* Section 2 */}
  <div className="flex flex-col md:flex-row items-center md:w-[65vw] gap-20">
    {/* Image */}
    {/* https://pixabay.com/photos/home-house-interior-design-living-2609600/ */}
    <div
      className="w-[75vw] h-[75vw] md:w-[25vw] md:h-[25vw] aspect-square relative"
    >
      <img
        src="/images/other/window.jpg"
        className="w-3/5 h-3/5 object-cover object-top rounded-full top-0 left-0 absolute"
      />
      <img
        src="/images/other/pots.jpg"
        className="w-3/4 h-3/4 object-cover object-top rounded-full bottom-0 right-0 absolute"
      />
    </div>
    <div className="mt-4 md:mt-0 md:ml-4">
      <h2 className="text-4xl text-center md:text-left font-semibold">
        What we value
      </h2>
      <p className="text-lg mt-2 text-center md:text-start">
        Here at Leafy, we value collaboration and consultation. We believe the
        best ideas come from everyone’s ideas mixed together. We are open to new
        suggestions and requests from anyone on our team. We encourage curiosity
        and asking questions, and we never back down from challenges. Every day
        working at Leafy is a new adventure.
      </p>
    </div>
  </div>
</div>

    )
}