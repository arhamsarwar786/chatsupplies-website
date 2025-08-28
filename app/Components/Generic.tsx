import React from "react";
import Navbar from "./navbar";
import Footer from "./Footer";

type GenericPageProps = {
  heading: string;
  text?: string;
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  text5?: string;
  text6?: string;
  text7?: string;
  text8?: string;
};

const GenericPage: React.FC<GenericPageProps> = ({
  heading,
  text,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
}) => {
  return (
    <>
      {/* Page Wrapper */}
      <div className="bg-gradient-background text-white-800 min-h-screen font-sans">
        {/* Header/Navbar */}
        <header className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between mb-7 md:mb-8 lg:mb-0">
          <Navbar />
        </header>

        {/* Main Content Area */}
        <main className="container mx-auto p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 flex flex-col lg:flex-row lg:space-x-8 xl:space-x-12">
          {/* Left Column - Page Content */}
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-mont font-bold mb-3">
              {heading}
            </h1>
            {text && <p className="text-lg text-gray-200">{text}</p>}
            {text1 && <p className="mt-4 text-lg text-gray-200">{text1}</p>}
            {text2 && <p className="mt-4 text-lg text-gray-200">{text2}</p>}
            {text3 && <p className="mt-4 text-lg text-gray-200">{text3}</p>}
            {text4 && <p className="mt-4 text-lg text-gray-200">{text4}</p>}
            {text5 && <p className="mt-4 text-lg text-gray-200">{text5}</p>}
            {text6 && <p className="mt-4 text-lg text-gray-200">{text6}</p>}
            {text7 && <p className="mt-4 text-lg text-gray-200">{text7}</p>}
            {text8 && <p className="mt-4 text-lg text-gray-200">{text8}</p>}
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default GenericPage;
