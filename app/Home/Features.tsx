// pages/index.tsx or app/page.tsx
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-4xl font-bold mb-12 text-blue-900">
          Key features
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Agent Builder Card */}
          <div className="bg-gradient-to-r from-blue-100 to-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-4">
              <h2 className="text-xl font-semibold text-blue-900 mb-2">
                Agent builder for advanced customization & training
              </h2>
              <p className="text-gray-700 text-sm">
                Customize your chatbot's responses, tone, and appearance with the Agent Builder. Train the chatbot with your own data, FAQs, and unique business insights to provide highly tailored interactions that align perfectly with your brand.
              </p>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              {/* Replace with your image path */}
              <Image 
                src="/agent-builder.png"
                alt="Agent Builder Interface"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
          
          {/* Instant Responses Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-4">
              <h2 className="text-xl font-semibold text-blue-900 mb-2">
                Instant responses
              </h2>
              <p className="text-gray-700 text-sm">
                Provide quick, accurate answers to frequently asked questions, keeping visitors informed and engaged without delay. Whether it's business hours, product information, or policies, the advanced AI Chatbot can instantly get the information they need immediately, improving satisfaction and reducing the load on your support team.
              </p>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              {/* Replace with your image path */}
              <Image 
                src="/instant-responses.png"
                alt="Chatbot Instant Responses"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Form Assistance Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-4">
              <h2 className="text-xl font-semibold text-blue-900 mb-2">
                Form assistance
              </h2>
              <p className="text-gray-700 text-sm">
                Guide users through form completion with a friendly, conversational flow, minimizing errors and ensuring all fields are filled out correctly. This product helps increase successful form submissions and improves the user experience.
              </p>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              {/* Replace with your image path */}
              <Image 
                src="/form-assistance.png"
                alt="Form Assistance Interface"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
          
          {/* Customizable Branding Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-4">
              <h2 className="text-xl font-semibold text-blue-900 mb-2">
                Customizable branding
              </h2>
              <p className="text-gray-700 text-sm">
                Create a cohesive experience by aligning the chatbot's look and feel with your website's branding. Adjust colors, fonts, and even the speech bubble's personality, making the chatbot feel like an integrated part of your site.
              </p>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              {/* Replace with your image path */}
              <Image 
                src="/customizable-branding.png"
                alt="Customizable Branding Interface"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Embed Anywhere Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-4">
              <h2 className="text-xl font-semibold text-blue-900 mb-2">
                Embed anywhere
              </h2>
              <p className="text-gray-700 text-sm">
                Integrate your AI Chatbot on any page of your website with a simple embed code. Place it where your visitors need it most—on landing pages, contact forms, or FAQs—to ensure accessibility and engagement directly from your website's interface. With easy integration, you can offer assistance site-wide without complex setup.
              </p>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              {/* Replace with your image path */}
              <Image 
                src="/embed-anywhere.png"
                alt="Embed Code Interface"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}