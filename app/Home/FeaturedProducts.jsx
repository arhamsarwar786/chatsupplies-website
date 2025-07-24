import React from 'react';
import Image from 'next/image';
// No longer need to import the CSS module
// import styles from '../styles/FeaturedProducts.module.css';

const products = [
  {
    id: 1,
    name: 'AI ChatBot Pro',
    description: 'Advanced AI-powered chatbot with natural language processing and machine learning capabilities.',
    price: '$299',
    image: '/Images/AI Robot.png',
  },
  {
    id: 2,
    name: 'LiveChat Suite',
    description: 'Complete live chat solution with real-time messaging, file sharing, and team collaboration.',
    price: '$199',
    image: '/Images/Chat.png',
  },
  {
    id: 3,
    name: 'Chat Analytics Pro',
    description: 'Comprehensive analytics platform for monitoring chat performance and customer insights.',
    price: '$149',
    image: '/Images/Analytics.png',
  },
];

const FeaturedProducts = () => {
  return (
    // .section -> padding: 4rem 1rem; background-color: #f8fafc;
    <section className="py-16 px-4 bg-slate-50">
      {/* .container -> max-width: 1200px; margin: 0 auto; padding: 0 1rem; */}
      <div className="max-w-screen-xl mx-auto px-4">
        {/* .title -> font-size: 2.3rem; font-weight: 700; text-align: center; margin-bottom: 1rem; color: #1f2937; */}
        <h2 className="text-4xl sm:text-[2.3rem] font-bold text-center mb-4 text-gray-800">
          Featured Products
        </h2>
        {/* .subtitle -> font-size: 1.3rem; text-align: center; font-weight: 400; margin-bottom: 3rem; color: #6b7280; */}
        <p className="text-xl sm:text-[1.3rem] text-center font-normal mb-12 text-gray-600">
          Best-selling chat solutions for modern businesses
        </p>

        {/* .grid -> display: grid; grid-template-columns: 1fr; gap: 2rem; justify-items: center; 
            @media (min-width: 640px) -> grid-template-columns: repeat(2, 1fr);
            @media (min-width: 1024px) -> grid-template-columns: repeat(3, 1fr); */}
        <div className="grid grid-cols-1 gap-8 justify-items-center sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            // .card -> background-color: #ffffff; border-radius: 1rem; box-shadow: ...; border: 1px solid #e5e7eb; display: flex; flex-direction: column; height: 100%; transition: all 0.3s ease-in-out;
            // .card:hover -> box-shadow: ...; transform: translateY(-2px);
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col h-full
                         transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-0.5"
            >
              {/* .imageWrapper -> position: relative; width: 100%; height: 13rem; overflow: hidden; border-top-left-radius: 1rem; border-top-right-radius: 1rem; */}
              <div className="relative w-full h-52 overflow-hidden rounded-t-2xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  // .productImage -> border-top-left-radius: 1rem; border-top-right-radius: 1rem;
                  className="rounded-t-2xl"
                />
              </div>

              {/* .cardContent -> padding: 1.5rem; display: flex; flex-direction: column; flex-grow: 1; */}
              <div className="p-6 flex flex-col flex-grow">
                {/* .productTitle -> font-size: 1.25rem; font-weight: 700; color: #111827; margin-bottom: 0.5rem; */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                {/* .productDesc -> font-size: 1rem; color: #4b5563; margin-bottom: 1rem; flex-grow: 1; */}
                <p className="text-base text-gray-700 mb-4 flex-grow">
                  {product.description}
                </p>
                {/* .cardFooter -> display: flex; align-items: center; justify-content: space-between; margin-top: auto; */}
                <div className="flex items-center justify-between mt-auto">
                  {/* .productPrice -> font-size: 1.5rem; font-weight: 700; color: #3b82f6; */}
                  <p className="text-2xl font-bold text-blue-600">
                    {product.price}
                  </p>
                  {/* .addToCart -> background-color: #3b82f6; color: white; padding: 0.5rem 1.5rem; border-radius: 0.5rem; border: none; cursor: pointer; font-weight: 600; font-size: 1rem; transition: background-color 0.3s ease, transform 0.3s ease;
                      .addToCart:hover -> background-color: #2563eb; transform: translateY(-1px); */}
                  <button
                    className="bg-blue-600 text-white py-2 px-6 rounded-lg border-none cursor-pointer
                               font-semibold text-base transition-all duration-300 ease-in-out
                               hover:bg-blue-700 hover:-translate-y-px"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;