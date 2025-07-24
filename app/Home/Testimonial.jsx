"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Testimonials = () => {
  const staticTestimonialData = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      quote: '"ChatSupplies transformed our customer service. The AI chatbot handles 80% of inquiries automatically."',
    },
    {
      name: 'Mike Chen',
      role: 'CTO, DataFlow',
      quote: '"The integration was seamless and the analytics provide incredible insights into customer behavior."',
    },
    {
      name: 'Emma Wilson',
      role: 'Marketing Director, GrowthCo',
      quote: (
        <>
          "Outstanding support and powerful
          <br />
          features. Our conversion rates increased by 40% after implementation."
        </>
      ),
    },
  ];

  const [testimonials, setTestimonials] = useState(staticTestimonialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRandomUsers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=3&inc=picture');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const randomAvatars = data.results.map((user) => user.picture.large);

        const updatedTestimonials = staticTestimonialData.map((testimonial, index) => ({
          ...testimonial,
          avatar: randomAvatars[index] || '/Images/default-avatar.png',
        }));

        setTestimonials(updatedTestimonials);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch random users:", err);
        setError(err);
        setLoading(false);
        setTestimonials(
          staticTestimonialData.map((t) => ({ ...t, avatar: '/Images/default-avatar.png' }))
        );
      }
    };

    fetchRandomUsers();
  }, []);

  const renderStars = () => (
    <div className="text-[#fdd835] text-[18px] tracking-[2px]">★★★★★</div>
  );

  return (
<section className="py-[90px] text-center bg-[#f8f9fa] font-['Inter'] sm:py-[70px]">
      <div className="mx-auto max-w-[1230px] px-4">
        <h1 className="text-[32px] text-[#1f2937] font-bold mb-10 sm:text-[40px] sm:mb-8">
          What Our Customers Say
        </h1>

        {loading ? (
          <p>Loading testimonials...</p>
        ) : (
          <>
            {error && (
              <p className="mb-6 text-red-600">
                Failed to load images, displaying defaults. Please check your internet connection.
              </p>
            )}

            <div
              className="grid justify-center gap-[32px] max-w-[1250px] mx-auto px-4
                [grid-template-columns:repeat(3,1fr)]
                max-[1024px]:[grid-template-columns:repeat(3,minmax(240px,1fr))]
                max-[768px]:grid-cols-1 max-[768px]:px-5 max-[768px]:gap-5"
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-md text-left flex flex-col justify-between min-h-[280px]  transition-transform duration-200 ease-in-out hover:-translate-y-[5px] hover:shadow-xl sm:min-h-[220px]"
                >
                  <div className="flex items-center mb-3">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      unoptimized
                      className="rounded-full object-cover border-[2px] border-[#e0e0e0] w-[56px] h-[56px] mr-3 sm:w-[50px] sm:h-[50px]"
                    />
                    <div>
                      <h4 className="text-[18px] text-[#1f2937] font-semibold mb-[2px] sm:text-[17px]">
                        {testimonial.name}
                      </h4>
                      <p className="text-[16px] sm:text-[15px] text-[#6b7280] font-semibold">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-[18px] sm:text-[19px] text-[#374151] font-medium leading-[1.6] mb-3 flex-grow">
                    {testimonial.quote}
                  </p>

                  {renderStars()}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
