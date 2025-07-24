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
            className="px-4 py-2 bg-white rounded-2xl text-[#5b48e3] hover:bg-[#000000] hover:text-white"
          >
            Start Shopping
          </Link>

          <Link
            href="/contact"
            className="px-4 py-2 bg-white rounded-2xl text-[#5b48e3] hover:bg-[#000000] hover:text-white"
          >
            Contact Sales
          </Link>


        </div>
      </div>
    </section>
  );
};

export default CallToAction;
