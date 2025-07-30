export default function Analytics () {
  return (
    <section className="bg-gray-800 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden rounded-l-3xl rounded-r-[15rem] shadow-xl mx-auto max-w-6xl mb-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
        <div className="lg:w-1/2 lg:pr-16 text-white">
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
        <div className="lg:w-1/2 flex justify-center items-center">
          <div className=" p-4 rounded-lg shadow-lg max-w-md w-full">
            <img
              src="/Images/Fifth.PNG"
              alt="AI-Powered Analytics"
              className="w-full h-auto rounded-md object-cover"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "https://placehold.co/600x400/B91C1C/FFFFFF?text=Image+Not+Found";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
