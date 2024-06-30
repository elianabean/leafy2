export default function Fourth() {
    return (
        <div>
            <div
  className="bg-gradient-to-b from-white to-tertiary flex-col items-center text-center py-16"
>
  <h1 className="text-5xl font-semibold">Beliefs</h1>
  <div className="flex flex-col md:flex-row gap-16 px-8 md:px-48 mt-8">
    <div className="bg-secondary px-8 py-16 rounded-md flex-1">
      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Icon */}
        <img
          src="/images/other/light-bulb.png"
          alt="Light Bulb"
          className="w-14 h-14"
        />
        <h2 className="text-center md:text-start md:ml-2 text-2xl font-medium">
          Innovation
        </h2>
      </div>
      <p className="mt-4">
        Innovation is the key to success. We love coming up with new ideas and
        unique plant designs as leaders in the industry.
      </p>
    </div>
    <div className="bg-secondary px-8 py-16 rounded-md flex-1">
      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Icon */}
        <img
          src="/images/other/collab.png"
          alt="Collaboration"
          className="w-14 h-14"
        />
        <h2 className="text-center md:text-start md:ml-2 text-2xl font-medium">
          Collaboration
        </h2>
      </div>
      <p className="mt-4">
        Design is not an individual job. It requires multiple layers of ideas
        and input to create the perfect product. No part of our work flow is
        done alone.
      </p>
    </div>
    <div className="bg-secondary px-8 py-16 rounded-md flex-1">
      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Icon */}
        <img
          src="/images/other/increase.png"
          alt="Fulfillment"
          className="w-14 h-14"
        />
        <h2 className="text-center md:text-start md:ml-2 text-2xl font-medium">
          Fulfillment
        </h2>
      </div>
      <p className="mt-4">
        We make a promise to our customers—to put our all into outputting a
        high-quality product that satisfies their desires—and we fulfill that
        promise.
      </p>
    </div>
  </div>
</div>
<img src="/images/other/divider-light.svg" alt="Divider" />

        </div>
    )
}