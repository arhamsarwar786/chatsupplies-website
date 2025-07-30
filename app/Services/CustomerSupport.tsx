const CustomerSupport = () => {
    const primaryColor = '#14b8a6';
    const secondaryColor = '#d1f5ee';
    const sectionBackgroundColor = '#2d3748';

    return (
        <div className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 font-sans antialiased">
            <div
                className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between shadow-2xl overflow-hidden"
                style={{
                    backgroundColor: sectionBackgroundColor,
                    borderRadius: '10rem 2rem 2rem 10rem',
                }}
            >
                <div className="relative w-full md:w-3/5 h-80 md:h-auto flex-shrink-0 flex items-center justify-center px-2">
                    <img
                        src="/Images/Second.PNG"
                        alt="24/7 Customer Support Automation"
                        className="rounded-xl object-contain max-w-[900px] max-h-[500px] w-full h-auto"
                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src = 'https://placehold.co/600x400/333333/ffffff?text=Image+Not+Found';
                        }}
                    />
                </div>

                <div className="w-full md:w-2/5 p-8 md:p-12 text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: primaryColor }}>
                        24/7 Customer Support Automation
                    </h2>
                    <p className="text-lg mb-8">
                        Provide round-the-clock support without increasing your overhead.
                    </p>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Instant Response:</h3>
                            <p className="text-gray-300">
                                Address customer queries in seconds, any time of day.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Intelligent Escalation:</h3>
                            <p className="text-gray-300">
                                Seamlessly transfer complex issues to human agents when needed.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">FAQ Handling:</h3>
                            <p className="text-gray-300">
                                Efficiently manage common questions, freeing up your team for high-value tasks.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default CustomerSupport;