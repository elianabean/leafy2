import { benefits } from "../websiteInfo";
import Script from 'next/script';

export default function Fifth() {
    return (
        <div className="flex flex-col items-center mb-32 mt-14">
  <h2 className="text-5xl font-semibold">Benefits</h2>
  <p className="mt-4 md:w-1/3 text-center px-4">
    We love our employees, and we only want the best for them. Employee benefits
    include:
  </p>
  <div className="mx-8 md:mx-48 mt-8 bg-tertiary rounded-md">
    {
      benefits.map((benefit, index) => (
        <div key={index} className="flex flex-col items-start pb-4 pt-8 px-4 md:px-16 border-b border-gray-300 last:border-b-0">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center text-center">
              <img src={benefit.icon} alt="Icon" className="w-10 h-10" />
              <p className="text-xl ml-2">{benefit.title}</p>
            </div>
            <button className="expand-btn text-4xl transition-transform duration-500 transform rotate-0">
              +
            </button>
          </div>
          <p
            className="benefit-details text-start px-4 md:px-8 transition-all max-h-0 overflow-hidden my-2" style={{ maxHeight: '0', transition: 'max-height 0.5s ease-in-out' }}>
            {benefit.description}
          </p>

          <Script id="my-script" strategy="afterInteractive">
        {`
            document.querySelectorAll(".expand-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const details = btn.parentElement.nextElementSibling;
      if (details.style.maxHeight === "0px") {
        details.style.maxHeight = \`\${details.scrollHeight}px\`;
        btn.style.transform = "rotate(45deg)";
      } else {
        details.style.maxHeight = "0px";
        btn.style.transform = "rotate(0deg)";
      }
    });
  });
        `}
      </Script>
        </div>
      ))
    }
  </div>
</div>
    )
}