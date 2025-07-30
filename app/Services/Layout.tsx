export default function Layout() {
  return (
    <div
      className="relative bg-white shadow-xl overflow-hidden max-w-6xl w-full flex flex-col lg:flex-row"
      style={{
        borderTopLeftRadius: '150px',
        borderBottomLeftRadius: '150px',
        borderTopRightRadius: '24px',
        borderBottomRightRadius: '24px',
      }}
    >
      <div className="relative w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 z-10">
        <div
          className="relative w-full h-auto overflow-hidden shadow-lg"
         
        >
          <img
            src="/Images/Sixth.PNG"
            alt="Ongoing Optimization and Support"
            className="w-full h-full object-cover"
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found";
            }}
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center z-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-red-600 mb-6">
          Ongoing Optimization and Support
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Ensure your chatbot evolves with your business needs.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Regular Updates:</h3>
            <p className="text-gray-600 leading-relaxed">
              Offer personalized product suggestions based on customer preferences and browsing history.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Performance Tuning:</h3>
            <p className="text-gray-600 leading-relaxed">
              Continuously improve response accuracy and conversation flow.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Technical Support:</h3>
            <p className="text-gray-600 leading-relaxed">
              Receive prompt assistance for any technical issues or questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}