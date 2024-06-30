import Link from 'next/link'

export default function Footer() {
    return (
        <div
  className="flex flex-col md:flex-row items-center justify-center py-8 bg-tertiary px-20 w-full "
>
  {/* Section 1: Logo and Company Name */}
  <div className="flex flex-col md:flex-row md:w-1/4 items-center">
    <img src="/images/other/logo.png" alt="Company Logo" className="w-16 h-16" />
    <h1 className="text-3xl font-bold lg:ml-4">Leafy</h1>
  </div>

  {/* Section 2: LinkedIn and Mail Icons */}
  <div className="flex md:w-1/4 gap-4">
    <a href="mailto:leafy@leafyexample.com"
      ><img src="/images/other/mail.png" alt="Mail" /></a>
    <a href="https://www.linkedin.com/"
      ><img src="/images/other/linkedin.png" alt="LinkedIn" /></a>
  </div>

  {/* Section 3: Navlinks */}
  <div className="hidden md:flex gap-16">
    <a href="/">Home</a>
    <a href="/careers">Careers</a>
    <a href="/growwithus">Grow With Us</a>
  </div>

  {/* Section 4: Copyright */}
  <div className="flex flex-col md:flex-row md:w-1/6 justify-end">
    <p>&copy; 2023 Leafy</p>
  </div>
</div>

    );
}
    