export default function ApplyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="w-full flex flex-col items-center relative py-48 px-8 text-center relative">
        <h1 className="md:text-7xl text-5xl font-bold text-shadow z-20">
          Apply
        </h1>
        <div className="absolute inset-0 opacity-50 z-10">
          <img
            src="/images/backgrounds/grow.jpg"
            className="w-full h-full object-cover blur-sm"
            alt="Background"
          />
        </div>
      </div>
      <div className="mt-[-10vh] mx-8 md:mx-40 mb-24 z-20 relative">
        {children}
      </div>
    </div>
  );
}
