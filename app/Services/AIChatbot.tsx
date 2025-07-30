const AIChatbot = () => {
    const primaryColor = '#14b8a6';
    const secondaryColor = '#d1f5ee';
    const sectionBackgroundColor = '#2d3748';

    return (
        <div className="min-h-screen bg-amber-50 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 font-sans antialiased">
            <style>{`
        :root {
          --primary: ${primaryColor};
          --secondary: ${secondaryColor};
        }
      `}</style>
            <div
                className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between shadow-2xl overflow-hidden"
                style={{
                    backgroundColor: sectionBackgroundColor,
                    borderRadius: '2rem 10rem 10rem 2rem',
                }}
            >
                <div className="w-full md:w-2/5 p-8 md:p-12 text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: primaryColor }}>
                        Custom AI Chatbot Development
                    </h2>
                    <p className="text-lg mb-8">
                        Transform your customer interactions with a bespoke AI chatbot tailored to your brand voice and business needs.
                    </p>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Personalized AI Training:</h3>
                            <p className="text-gray-300">
                                We build your chatbot's knowledge base using your specific industry data and company information.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Multilingual Support:</h3>
                            <p className="text-gray-300">
                                Engage with customers globally through chatbots fluent in multiple languages.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Seamless Integration:</h3>
                            <p className="text-gray-300">
                                Our chatbots integrate smoothly with your existing websites, apps, and CRM systems.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative w-full md:w-3/5 flex-shrink-0 flex items-center justify-center p-4">
                    <img
                        src="Images/First.PNG"
                        alt="AI Chatbot Development Visual"
                        className="object-contain rounded-xl max-w-[600px] max-h-[550px] w-full h-auto"
                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src = 'https://placehold.co/600x400/333333/ffffff?text=Image+Not+Found';
                        }}
                    />
                </div>

            </div>
        </div>
    );
};

export default AIChatbot;