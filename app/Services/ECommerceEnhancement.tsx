export default function EcommerceEnhancement() {
    return (
        <div className="min-h-screen bg-gray-100 font-inter">
            <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden rounded-r-3xl rounded-l-[15rem] shadow-xl mx-auto max-w-6xl mt-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="lg:w-1/2 flex justify-center items-center">
                        <div className="max-w-md w-full">
                            <img
                                src="/Images/Forth.PNG"
                                alt="E-commerce enhancement"
                                className="w-full h-auto rounded-md object-cover"
                                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                    const target = e.target as HTMLImageElement;
                                    target.onerror = null;
                                    target.src = "https://placehold.co/600x400/D1D5DB/4B5563?text=Image+Not+Found";
                                }}
                            />
                        </div>
                    </div>
                    <div className="lg:w-1/2 lg:pl-16 text-gray-800">
                        <h2 className="text-4xl font-bold mb-6 text-red-600">
                            E-commerce Enhancement
                        </h2>
                        <p className="text-lg mb-8">
                            Boost your online sales with AI-powered shopping assistance.
                        </p>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Product Recommendations:</h3>
                                <p className="text-gray-700">
                                    Offer personalized product suggestions based on customer preferences and browsing history.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Shopping Cart Assistance:</h3>
                                <p className="text-gray-700">
                                    Reduce abandonment rates with timely interventions and support.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Order Tracking:</h3>
                                <p className="text-gray-700">
                                    Provide real-time updates on order status and shipping information.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}