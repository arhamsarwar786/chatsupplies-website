import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="bg-[#5b48e3] text-white text-center py-[50px] px-4 md:px-0">
      <div className="container mx-auto">
        <h2 className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold mb-3 text-white">
          Ready to Transform Your Business?
        </h2>

        <p className="text-[clamp(0.95rem,2vw,1.2rem)] mb-10 font-sans px-4 md:px-8 text-white">
          Join thousands of businesses already using ChatSupplies to enhance their customer experience.
        </p>

        <div className="flex flex-wrap justify-center gap-[12px] mt-5 w-full px-4 box-border md:flex-row">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center text-[clamp(0.85rem,2.5vw,1.1rem)] 
              px-[clamp(1.2rem,5vw,2rem)] py-[clamp(0.7rem,2vw,1rem)] 
              bg-white text-[#5b48e3] font-semibold rounded-[10px] 
              border-2 border-white transition-colors duration-300 
              w-full max-w-[200px] text-center whitespace-nowrap 
              hover:bg-[#f0f0f0] box-border no-underline"
          >
            Start Shopping
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center text-[clamp(0.85rem,2.5vw,1.1rem)] 
              px-[clamp(1.2rem,5vw,2rem)] py-[clamp(0.7rem,2vw,1rem)] 
              bg-transparent text-white font-semibold rounded-[10px] 
              border-2 border-white transition-colors duration-300 
              w-full max-w-[200px] text-center whitespace-nowrap 
              hover:bg-white hover:text-[#5b48e3] box-border no-underline"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
