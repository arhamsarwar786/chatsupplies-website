import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="bg-[#5b48e3] text-white text-center py-[60px] px-4 md:px-0">
      <div className="container mx-auto">
        <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-bold mb-3 text-white">
          Ready to Transform Your Business?
        </h2>
        <p className="text-[clamp(1rem,2.2vw,1.3rem)] mb-12 font-sans px-4 md:px-8 text-white">
          Join thousands of businesses already using ChatSupplies to enhance their customer experience.
        </p>

        <div className="flex flex-wrap justify-center gap-[15px] mt-5 w-full px-4 box-border md:flex-row md:gap-[15px]">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center text-[clamp(0.9rem,2.8vw,1.2rem)] 
             px-[clamp(1.6rem,6vw,2.5rem)] py-[clamp(0.8rem,2.5vw,1.2rem)] 
             bg-white text-[#5b48e3] font-semibold rounded-[10px] 
             border-2 border-white transition-colors duration-300 
             w-full max-w-[320px] text-center whitespace-nowrap 
             hover:bg-[#f0f0f0] box-border no-underline"
          >
            Start Shopping
          </Link>

          <Link
            href="/contact"
            className="px-4 py-2 hover:bg-white hover:text-[#5b48e3] text-white"
          >
            Contact Sales
          </Link>


        </div>
      </div>
    </section>
  );
};

export default CallToAction;
