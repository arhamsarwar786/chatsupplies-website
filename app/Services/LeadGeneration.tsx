import Image from 'next/image';


export default function LeadGeneration() {
  return (
    <section className="bg-gradient-to-r from-zinc-900 to-neutral-800 text-white rounded-tr-[10rem] rounded-br-[10rem] overflow-hidden my-12 mx-4 md:mx-20 shadow-xl">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-16 md:px-16 md:py-24 gap-10">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            Lead Generation and <br /> <span className="text-white">Qualification</span>
          </h2>
          <p className="mb-6 text-gray-300">
            Convert website visitors into qualified leads automatically.
          </p>
          <ul className="space-y-4 text-gray-200">
            <li>
              <span className="font-semibold text-white">Interactive Questionnaires:</span> Engage potential customers and gather crucial information.
            </li>
            <li>
              <span className="font-semibold text-white">Lead Scoring:</span> Automatically qualify leads based on your specific criteria.
            </li>
            <li>
              <span className="font-semibold text-white">Appointment Scheduling:</span> Allow qualified leads to book meetings directly with your sales team.
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/Images/Third.PNG"
              alt="Lead generation meeting"
              width={500}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}