import React from "react";

export default function Analytics() {
  return (
    // The outermost section sets the background, shape, and overall padding.
    // `overflow-hidden` is necessary for the border-radius to clip the background correctly.
    // `pl-8` provides left-side padding to align the content away from the edge.
    // The large `pr-24` and responsive variants create a generous right-side space
    // to keep content away from the curved edge, allowing it to be fully visible.
    <section className="bg-gray-800 py-16 relative overflow-hidden rounded-l-3xl rounded-r-[15rem] shadow-xl mb-8 pl-8 sm:pl-12 lg:pl-16 pr-24 sm:pr-32 lg:pr-48">
      {/* This flex container uses `justify-between` to correctly space the text and image. */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
        {/* The text content is on the left side of the flexbox. */}
        <div className="lg:w-1/2 lg:pr-16 text-white text-left">
          <h2 className="text-4xl font-bold mb-6">
            AI-Powered Analytics <br className="hidden sm:inline" /> and Insights
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Gain deep insights into customer behavior and preferences.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Conversation Analysis:</h3>
              <p className="text-gray-300">
                Understand customer needs and pain points through chatbot interaction data.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Trend Identification:</h3>
              <p className="text-gray-300">
                Spot emerging trends and opportunities in your market.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Performance Reporting:</h3>
              <p className="text-gray-300">
                Generate regular reports on chatbot performance and ROI.
              </p>
            </div>
          </div>
        </div>
        {/* The image is on the right side of the flexbox. */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <div className="p-4 rounded-lg shadow-lg max-w-md w-full">
            <img
              src="/Images/Fifth.PNG"
              alt="AI-Powered Analytics"
              className="w-full h-auto rounded-md object-cover"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src =
                  "https://placehold.co/600x400/B91C1C/FFFFFF?text=Image+Not+Found";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
