import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white px-4 pt-30 pb-12 overflow-hidden md:px-8 md:pt-28 lg:px-16 lg:pt-36">
      <div className="max-w-[1300px] mx-auto flex flex-col gap-12 items-center lg:flex-row lg:justify-between lg:gap-20">
        
        {/* Text Section */}
        <div className="w-full max-w-[600px] text-left">
          <h1 className="text-[1.6rem] sm:text-[2.4rem] lg:text-[3rem] font-bold leading-tight text-gray-900 mb-5">
            Power Your Business <br />
            with <span className="text-indigo-700">Smart Chat</span> <br />
            <span className="text-indigo-700">Solutions</span>
          </h1>
          <p className="text-[1.25rem] text-gray-600 max-w-[35rem] leading-relaxed mb-9">
            Discover premium chatbot tools, AI-powered integrations, and customer support solutions that transform your business communication.
          </p>

          {/* Button Group */}
          <div className="flex flex-col gap-4 md:flex-row md:justify-start md:items-center">
            <button className="px-9 py-4 text-white bg-indigo-600 rounded-lg text-[1.05rem] font-semibold shadow-md transition-all hover:bg-indigo-700 hover:-translate-y-0.5 w-full md:w-fit md:text-[1.05rem] md:px-9 md:py-4">
              Shop Now
            </button>
            <button className="px-9 py-4 text-indigo-600 border border-indigo-600 rounded-lg text-[1.05rem] font-semibold shadow-md transition-all hover:bg-indigo-600 hover:text-white hover:-translate-y-0.5 w-full md:w-fit md:text-[1.05rem] md:px-9 md:py-4">
              Learn More
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full flex justify-center lg:justify-end">
          <Image
            src="/Images/Dashboard.png"
            alt="Dashboard Mockup"
            width={700}
            height={450}
            className="rounded-xl shadow-[0_15px_25px_rgba(0,0,0,0.15)] w-full max-w-[30rem] sm:max-w-[40rem] lg:max-w-[52rem] xl:max-w-[60rem] object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
