import React from 'react';
import { LayoutGrid, Bot, Clock, Zap, MessageSquare, Code, Settings } from 'lucide-react';
import Navbar from '../../Components/navbar';
import Footer from '../../Components/Footer';

// Mock component for the screenshot images
const ChatbotImage: React.FC<{ src: string, alt: string }> = ({ src, alt }) => {
    // Note: Since we cannot access uploaded files directly in the browser,
    // we use a dynamic placeholder based on the file name.
    const placeholderUrl = `https://placehold.co/600x400/3B82F6/FFFFFF?text=${alt.replace(/\s/g, '+')}`;

    return (
        <div className="my-6 border-4 border-gray-100 rounded-xl overflow-hidden shadow-xl bg-white">
            {/* Fallback Placeholder representing the design screenshot */}
            <img
                src={placeholderUrl}
                alt={alt}
                className="w-full h-auto object-cover max-h-96"
                style={{ aspectRatio: '3/2' }}
            />
            <p className="text-center text-xs text-gray-500 py-2">Design Screenshot ({src})</p>
        </div>
    );
};


// Main Application Component
const App: React.FC = () => {

    // Data structure matching the content from the images
    const companies = [
        {
            id: 1,
            name: " ChatSupplies",
            image: "j21.PNG",
            description: "A chatbot that naturally guides users through sales and support conversations, with",
            features: [
                "History tabs for users to revisit past conversations",
                "Options to connect forms and insert fields into the chat",
                "A theme editor for custom colors, fonts, buttons, and text",
                "Generative AI-powered avatars"
            ],
            details: "The design settings ChatSupplies includes in its chatbot builder add a ton of personality to the experience. Perhaps the best example of this is avatar customization, which includes not just thousands of stock headshots, but an option to upload your own selfie and face-swap it onto o ChatSupplies's suggestions. Or you can generate an avatar image entirely from a prompt. It's one of the most design-forward builders of all our picks. Putting a face on your chatbot makes conversations feel more personal and friendly, as long as the AI's responses are up to ChatSupplies excels at that as well, with several options for training your agent on your own data and letting users choose between text and voice responses."
        },
        {
            id: 2,
            name: "Zapier",
            image: "j22.PNG",
            description: "A prompt-driven chatbot builder from an automation platform that includes",
            features: [
                "Granular settings for avatar and logo size",
                "Fine-tune color schemes for light and dark modes",
                "Icon uploads for opening your chatbot widget",
                "Custom buttons that run zaps, open websites, or collect leads"
            ],
            details: "Training, customizing, and deploying one of Zapier's chatbots is incredibly easy, without dumbing down too much of the design. You can add your logo to the top of the chat (and make it clickable), insert suggested conversation starters, and create action buttons triggered by certain keywords. What's more, every element has its own size and color settings. While one of the more minimalist options on this list, Zapier's chatbot includes everything you need to build a clean, branded UI that integrates deeply with thousands of apps — and looks like it was built just for you."
        },
        {
            id: 3,
            name: "Landbot",
            image: "j23.PNG",
            description: "An agent builder that places much of its focus on design and appearance settings, including",
            features: [
                "A large library of design templates",
                "Chats windows with image or video backgrounds",
                "A long list of options of in-chat fonts",
                "Custom Javascript and CSS settings"
            ],
            details: "Landbot's Design tab feels like Canva for AI agents. It's packed with over two dozen pre-made templates, alongside configurations for virtually every visual element users see. You can even adjust your bot's typing speed (in words per minute) to mimic natural human conversation. Despite the number of levers you can pull, every setting is intuitive and accessible, even for non-technical users. That said, Landbot's training capabilities don't quite match its design power. If your knowledge base is plain text, a PDF, or a crawlable URL, training is straightforward. But for more complex data sources, you may hit limitations."
        },
        {
            id: 4,
            name: "Comm100",
            image: "j25.PNG",
            description: "A decently customizable chatbot with some novel pre- and post-chat design settings, as well as",
            features: [
                "A decent selection of header and background designs",
                "One-time CAPTCHA requirements to start chats",
                "Custom messages for page- or behavior-specific triggers",
                "Chat-transcript-to-email option for visitors"
            ],
            details: "As great as AI chat widgets are, it's important to remember that their main purpose is to move visitors toward a goal, whether that's purchasing something or closing a support ticket. Comm100 puts an emphasis on this with dedicated design tabs for Pre-chat and Post-chat. With the former you can require a form fill or CAPTCHA before starting a conversation and retain that information for later sessions. For post-chat settings, there are some nice options for prompting users to complete an NPS survey when the conversation ends. As one of the more enterprise-level chatbot builders on this list, with options for on-premises deployment and HIPAA-friendly agents, Comm100 is an option worth considering for organizations with large budgets."
        },
        {
            id: 5,
            name: "Fin (Intercom)",
            image: "j26.PNG",
            description: "Intercom's minimalist chatbot design is a nice addition to any site, page, or app, thanks to",
            features: [
                "Custom welcome messages include dynamic and fallback values",
                "An Article Search \"app\" that surfaces help center resources",
                "Pixel-perfect control over chat launcher position",
                "Separate design settings for the mobile SDK"
            ],
            details: "With about 15 years of experience in helpdesk software, Intercom knows a thing or two about designing user-friendly experiences. In the case of Fin, their standalone chatbot platform, that means sleek, sparse windows and pop-ups with zero visual clutter. Most design customization happens in the form of \"apps\" (shortcuts) on the \"Home\" (pre-chat) screen. If you've enabled Launch directly into Conversation, however, it shows an empty chat populated by your logo, brand colors, and a user input field. Outside of its flexible, easy-to-use design settings, Fin comes with a long list of AI-powered training and knowledgebase management options. It may not have as many deployment options as some of the other builders on this list, but it's a wonderful, professional-looking chatbot for websites and Intercom-powered conversations."
        },
        {
            id: 6,
            name: "HelpCrunch",
            image: "j27.PNG",
            description: "Build and skin chat interfaces with proactive, context-aware messages, alongside backend features like",
            features: [
                "Limit visitors to one new chat per X minutes",
                "Set chat icon padding, in pixels",
                "Add form fields to the chat UI",
                "Set up situational and proactive Auto Messages"
            ],
            details: "HelpCrunch's bot designer covers all of the basics, letting you add a company logo, chat avatar, custom welcome screen, and links to start a chat in another channel or on another platform. The thing that stood out to us, however, was the incredibly intuitive Auto Messages tab. It's there that you can create automations to open the chat window, with templated messages, when certain conditions are met. You might send something about a current promotion when users land on the pricing page, ask if someone needs help if they've left the page open for more than two minutes, or even use Javascript to trigger the chat window. Even if the AI response limits on its paid plans are a tad restrictive, HelpCrunch makes it easy to create clean, business-ready chatbots that..." // The end of the paragraph is cut off in j27.PNG
        },
        {
            id: 7,
            name: "ChatBot",
            image: "j28.PNG",
            description: "Deploy user-friendly AI assistants to your favorite website builder or hosting platform, and set up",
            features: [
                "Personalized chat greetings for referred and returning users",
                "Customizable in-chat buttons and suggestions",
                "A/B test bot workflows and conversations",
                "Embed websites or apps within chats using" // Trailing word "using" is cut off in j28.PNG
            ],
            details: "The design and appearance settings of your chatbot don't mean much if they're a pain to add to your website. Many of the builders on this list offer some combination of Webflow, Wix, Squarespace, and WordPress chat bot integrations. Rarely does a tool for web-based chatbot UI design support all of the platforms equally, but ChatBot does. In addition to offering plenty of design customization, ChatBot was one of the easiest tools to add to a website that we found. One of the most important things a chatbot can do is slot seamlessly into your existing tech stack and workflows. With its approachable UI settings and long integrations list, ChatBot does that, and more."
        },
        {
            id: 8,
            name: "Help Scout",
            image: "j29.PNG",
            description: "Let users choose between AI and human support, in either chat or email, both of which support",
            features: [
                "Typing indicators",
                "Options to send emails from within the chat",
                "Suggested questions in AI chat windows",
                "Customization for every text field label and tooltip"
            ],
            details: "We are starting to see laws and regulations mandating that companies let users know when they are interacting with LLMs. Help Scout's chatbots, which they call Beacons, ensure that everything is clear, right from the outset. When a user clicks the button to open the modal, they have the option to send questions via email, chat with human agents, or chat with AI. Each interface is clean and easy to understand without looking overly basic or unpolished. ChatSupplies, Help Scout offers a free chatbot builder with no expiration end date. You can build and brand a Beacon for your website without feeling rushed or looked in, an attractive addition to an already excellent looking chatbot."
        },
        {
            id: 9,
            name: "Drift",
            image: "j30.PNG",
            description: "Deploy a chatbot that identifies users before they open the chat, and responds accordingly, plus",
            features: [
                "A wider font selection than most",
                "Impressive logic for showing or hiding chat windows",
                "Automatic accessibility design alerts (e.g. low-contrast text)",
                "Simple quick-reply set up"
            ],
            details: "Few conversational AI platforms offer unlimited sessions. So anything you can do to prevent unqualified users from spamming your bot not only creates a better overall experience, it also saves money. Drift chatbots resemble many of the options on this list, with customizable quick-reply buttons, color branding, and avatars, but stand out for their advanced targeting settings. You can set your chatbot to only show on the page when \"firmographics\" conditions are met, such as when a visitor works for a company with more than 100 employees, or their office is located in a specific state. The biggest drawback to Drift is that there is no self-serve trial and pricing is looked behind a sales conversation, which is too bad considering how useful its design features are for businesses managing non-enterprise-level websites." // The end of the paragraph is cut off in j30.PNG
        },
        {
            id: 10,
            name: "Tidio",
            image: "j31.PNG",
            description: "Answer the most common questions with AI before handing conversations off to a human, all inside an interface with",
            features: [
                "Sleek, minimalist background images and audio notifications",
                "Elegant pre-chat survey fields",
                "Convenient standalone chat pages for users",
                "Large bank for saved conversation starters"
            ],
            details: "One of the things Tidio does to earn users' trust is put human handoffs front and center. There's an entire settings page devoted to customizing those transitions, including handoff messages, destinations, and triggers. Regardless of whether it's a human or an LLM writing the responses, though, users see the same welcoming interface. Tidio isn't the most advanced or capable, but it's incredibly easy to set up and align with your company's visual style."
        },
        // --- New Companies added from j32.PNG to j41.PNG ---
        {
            id: 11,
            name: "Adidas",
            image: "j32.PNG",
            description: "An enterprise-focused chatbot specializing in knowledge base integration, offering...",
            features: [
                "Dynamic brand color extraction from website CSS.",
                "Multi-language support with native right-to-left UI adjustments.",
                "Customizable 'human handoff' button placement.",
                "Embeddable video tutorials within chat responses."
            ],
            details: "Adidas targets large organizations that need seamless brand integration. Its design customization is less about flashy graphics and more about subtle, powerful alignment with corporate identity. The standout feature is its ability to automatically detect and apply primary and secondary brand colors from the host website, ensuring the chat widget never looks out of place. Furthermore, the inclusion of embeddable video snippets in the chat flow dramatically improves support resolution times by providing multimedia answers."
        },
        {
            id: 12,
            name: "Ikea",
            image: "j33.PNG",
            description: "A conversational marketing platform that merges elegant design with robust lead capture, featuring...",
            features: [
                "Interactive card carousel UI for product showcase.",
                "CSS editor for granular style overrides.",
                "Custom notification sounds and badges.",
                "Pre-configured chat header templates (minimal, classic, full-width)."
            ],
            details: "Ikea AI excels at creating visually rich, conversion-focused chatbots. Their most distinctive design element is the interactive card carousel, allowing the bot to display product images, prices, and links directly in the conversation thread, turning the chat into a dynamic storefront. The platform is highly appreciated by marketing teams who value both aesthetic control (via the CSS editor) and performance tracking."
        },
        {
            id: 13,
            name: "AT&T",
            image: "j34.PNG",
            description: "A long-standing leader in digital engagement that now provides highly accessible and polished AI bots, including...",
            features: [
                "Built-in WCAG 2.1 accessibility checker for color contrast.",
                "Customizable conversation 'bubbles' size and shape.",
                "Option to integrate digital wallet payment buttons directly.",
                "Real-time chat translation toggle for visitors."
            ],
            details: "AT&T's focus on enterprise accessibility translates into excellent design features. They are one of the few platforms to bake in an accessibility checker, ensuring all color palettes meet WCAG standards—a huge win for legal and compliance teams. The user interface remains clean, prioritizing clear communication and low-friction interactions, particularly the one-click payment integration for e-commerce."
        },
        {
            id: 14,
            name: "Fidelity",
            image: "j35.PNG",
            description: "A straightforward bot builder with a clean, mobile-first aesthetic and a focus on simplicity, featuring...",
            features: [
                "Simplified single-color primary branding selector.",
                "Native support for GIFs and rich media responses.",
                "Conversation history export for users via PDF.",
                "Minimalist chat launcher icon set."
            ],
            details: "Fidelity champions simplicity, making it ideal for smaller businesses or rapid prototyping. The design process is deliberately streamlined, focusing on making the conversation flow visually appealing without overwhelming the user with infinite options. Its strong mobile presentation ensures the chat widget looks fantastic whether embedded in a mobile app or a responsive website."
        },
        {
            id: 15,
            name: "SeniorThrive",
            image: "j36.PNG",
            description: "A combined live chat and AI bot service known for its crisp, modern UI and features such as...",
            features: [
                "Gradient background options for the chat header.",
                "Time of Day custom greeting messages.",
                "Custom bot response delay settings (in ms).",
                "Integrated customer rating system within the chat window."
            ],
            details: "SeniorThrive lives up to its name with a design that is clean and unobtrusive. The use of subtle gradient options in the header adds a touch of modern sophistication, avoiding the harsh lines of some competitors. A clever feature is the time-of-day greeting, which makes the bot feel more contextual and human-aware. The tightly integrated customer rating system allows for immediate feedback collection after a conversation."
        },
        {
            id: 16,
            name: "Progressive",
            image: "j37.PNG",
            description: "An AI platform offering deep conversational understanding with a highly professional, polished visual layer, including...",
            features: [
                "Option to toggle between classic and bubble chat modes.",
                "Integration of interactive surveys mid-chat.",
                "Advanced visitor behavioral targeting logic.",
                "Support for multiple agent avatars per chat flow."
            ],
            details: "Progressive provides an enterprise-grade experience. The design is conservative but highly polished, emphasizing professionalism and reliability. Its flexible chat modes (classic vs. bubble) allow organizations to choose the style that best fits their brand voice. The platform's real strength lies in its ability to manage complex, multi-turn conversations while maintaining a clear and easy-to-follow visual thread."
        },
        {
            id: 17,
            name: "Mississippi.Gov",
            image: "j38.PNG",
            description: "An AI-powered customer service automation platform focused on brand consistency and high-volume resolution, offering...",
            features: [
                "Full control over chat widget sizing and breakpoints.",
                "Conditional branding settings based on user segment.",
                "Custom CSS and JavaScript injection points.",
                "Seamless transition from chat to authenticated portal pages."
            ],
            details: "Mississippi.Gov is designed for companies that value automation without sacrificing brand experience. Their design tools allow for extremely precise control over how the bot appears and behaves across different device sizes. The ability to apply conditional branding means that specific customer segments can see a customized bot experience, enhancing personalization. The focus is on a high-end, bespoke digital experience."
        },
        {
            id: 18,
            name: "Lowe's",
            image: "j39.PNG",
            description: "A dedicated e-commerce help desk that integrates a beautiful, Shopify-optimized chat widget, featuring...",
            features: [
                "Native product gallery display from Shopify store data.",
                "Customizable offline form behavior and design.",
                "One-click order status lookups inside the chat.",
                "Integrated live agent availability indicator."
            ],
            details: "Lowe's is built specifically for e-commerce, and its design reflects that. The seamless integration with Shopify allows the bot to display product images and details directly in the conversation, making pre-sale support visually rich and effective. The widget is clean, minimal, and optimized for quick resolution, and the live agent indicator is a transparent touch that improves user trust."
        },
        {
            id: 19,
            name: "Salesforce",
            image: "j40.PNG",
            description: "A self-learning virtual agent solution with an emphasis on intuitive conversation design and a clear UI, including...",
            features: [
                "Customizable conversation flow visualization builder.",
                "Adjustable text size and readability settings.",
                "Multi-level quick reply button hierarchy.",
                "Support for external API call visualization (e.g., showing a map)."
            ],
            details: "Salesforce specializes in complex, enterprise-level virtual agents. Its design strength is the way it handles complexity for the user. The conversation visualization tool helps bot builders map out elegant, clear paths, which translates to a clean and logical user experience. For the end-user, the chat interface is highly readable, featuring adjustable text sizing and well-structured quick-reply options to prevent conversational dead ends."
        },
        {
            id: 20,
            name: "Peloton",
            image: "j41.PNG",
            description: "A customer communication platform with a highly configurable chat widget that maintains a polished, modern look, featuring...",
            features: [
                "Customizable embedded knowledge base search bar.",
                "'Smart' greeting triggers based on URL and user history.",
                "Full control over the Z-index (layering) of the chat widget.",
                "Animation controls for chat window opening and closing."
            ],
            details: "Peloton offers deep configuration while ensuring the resulting design remains professional. Its ability to integrate a knowledge base search directly into the pre-chat window is a fantastic design choice, empowering users to self-serve before needing the bot. The smooth opening and closing animations, combined with pixel-perfect positioning controls, demonstrate a strong commitment to user interface polish."
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
            <Navbar/>

            {/* Article Header - Updated title to reflect 20 companies */}
            <header className="pt-16 pb-12 bg-white shadow-md border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
                        20 companies with the best looking chatbots
                    </h1>
                    <p className="text-xl text-gray-600">
                        An extended showcase of the most aesthetically pleasing and highly customizable AI chatbot designs on the market.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2 text-sm">
                        <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 font-medium rounded-full">
                            <LayoutGrid className="w-4 h-4 mr-1" />
                            Listicle
                        </span>
                        <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 font-medium rounded-full">
                            <Bot className="w-4 h-4 mr-1" />
                            AI & Chatbots
                        </span>
                    </div>
                </div>
            </header>

            {/* Main Content Body */}
            <main className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

                <p className="mb-10 text-lg leading-relaxed">
                    The following comprehensive list highlights the top 20 companies that prioritize **chatbot design and user experience**. These platforms offer extensive customization, clean interfaces, and features that make the bot feel like a seamless part of your brand.
                </p>

                {/* List of Companies */}
                <section className="space-y-16">
                    {companies.map((company) => (
                        <div key={company.id} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border-t-4 border-indigo-500">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
                                <span className="text-indigo-500 mr-3 text-4xl font-extrabold">{company.id}.</span>
                                {company.name}
                            </h2>

                            <ChatbotImage src={company.image} alt={`${company.name} Chatbot Interface`} />

                            <div className="mt-4 text-lg leading-relaxed">
                                <p className="font-semibold text-gray-700 mb-3">{company.description}</p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                    {company.features.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <Zap className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-indigo-400" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="mt-6 text-base leading-relaxed text-gray-700 border-t pt-4 border-gray-100">
                                {company.details}
                            </p>
                        </div>
                    ))}
                </section>

                {/* Conclusion/Next Steps - Mimicking the floating elements */}
                <div className="mt-16 p-8 bg-gray-100 rounded-xl shadow-inner border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                        <Settings className="w-6 h-6 mr-2 text-indigo-500" />
                        Ready to choose your stylish bot?
                    </h3>
                    <p className="text-lg text-gray-700">
                        A visually appealing and customizable chatbot is essential for maintaining brand consistency and improving user trust. The platforms listed above offer robust design tools to help you create a seamless and professional support experience.
                    </p>
                    <div className="mt-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                        <button className="flex-1 py-3 px-6 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
                            Explore Chatbot Builders
                        </button>
                        <button className="flex-1 py-3 px-6 bg-white text-indigo-600 border border-indigo-600 font-semibold rounded-lg shadow-md hover:bg-indigo-50 transition duration-300">
                            Read Design Best Practices
                        </button>
                    </div>
                </div>

            </main>

            {/* Simple Footer */}
            <footer className="py-8 text-center text-gray-500 text-sm border-t mt-12">
                &copy; 2025 Top 20 Chatbot Designs. Demo Content.
            </footer>
            <Footer/>
        </div>
    );
};

export default App;