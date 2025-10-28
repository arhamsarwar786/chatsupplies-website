"use client"
import React from 'react';
import Navbar from '../Components/navbar';
import Footer from '../Components/Footer';

// Main content data structured for easy rendering
const articleData = {
    title: "Turn behavior data into action: Digital tracking & AI-powered tools that help teachers teach",
    context: "Home / Educational Technology / Turn behavior data into action: Digital tracking & AI-po...",
    author: "Andrew Scott", // Updated author from the new image
    date: "October 28, 2025", // Updated date from the new image
    sections: [
        // --- Content from c134.PNG (Section 1) ---
        {
            type: 'intro',
            paragraphs: [
                "It's no secret that disruptive behavior is on the rise in K-12 classrooms. Teachers across the US find themselves battling constant interruptions that impede their ability to teach effectively.",
                "A study conducted by the **EdWeek Research Center** found that 73 percent of teachers have seen an increase in student misbehavior since 2019. According to a survey conducted by **Phw Research**, 40 percent of K-12 teachers said they have to address misbehavior multiple times a week, with 26 percent reporting that it's a daily occurrence. In addition to misbehavior, 67 percent of teachers said they help students manage mental health challenges at least a few times per week.",
                "In addition to the time these disruptions take away from teaching and learning, many teachers feel ill-equipped to manage the increase in challenging student behavior on their own. This is particularly true for those who are new to the profession. A **study of early career teachers** revealed that struggles with classroom management contributed significantly to turnover."
            ],
            quotes: [{
                text: "An inability to effectively manage student behavior is among the most frequently cited reasons by early career teachers leaving their schools.",
                source: '"Revisiting Our Understanding of Early Career Teacher Skill Development: Evidence from Classroom Observations"'
            }],
            followUp: "Classroom misbehavior isn't just a discipline issue; it's a teaching and learning issue. So what can schools do to address the rise in classroom disruptions and misbehavior?",
        },
        {
            type: 'subsection',
            heading: "Tracking student behavior",
            paragraphs: [
                "It can be difficult for teachers who juggle dozens of students each day to keep track of all the behaviors that get in the way of learning.",
                "Maintaining a record of student behavior—both positive and negative—is essential to understand where students excel and the areas where they need extra support. Instead of viewing behavior as a series of isolated incidents, teachers can use tracking to identify patterns and make more informed decisions about how to address challenges.",
                "There are several methods schools can use to track behavior, each suited for different situations:"
            ],
        },
        // --- Content from c135.PNG (Section 2) ---
        {
            type: 'subsection',
            heading: "Digital behavior reports",
            subheading: true,
            paragraphs: [
                "Principal Joshua Depoe uses **digital discipline referrals** to track and manage student behavior at Barton Elementary. Instead of filling out paper forms, teachers record incidents via a digital form that's automatically forwarded to their behavioral team.",
                "Recording incidents digitally not only makes it easier for teachers to share data with school administrators; it also standardizes the way that behavior is reported.",
                "By viewing the total number of incidents, and organizing them into categories, the behavioral team can develop targeted social and emotional learning plans that address the root causes of student misbehavior. The team looks at the time and location to determine where and when extra support is needed.",
                "Noting which students were involved helps them determine if the misbehavior is an individual or grade-level problem so they can plan the appropriate next steps. Tracking trends in behavior frequency lists them from most to least severe means more effective."
            ],
            quotes: [{
                text: "Doing each Morning Meeting day with 20 minutes for class meetings and social and emotional learning time. Giving our staff this time has helped us reduce occurrences of those Monday mishaps...",
                source: '– "Using Data to Proactively Manage Student Behavior"'
            }],
        },
        {
            type: 'subsection',
            heading: "Tools to track student behavior",
            paragraphs: [
                "Teachers are already short on time. They need practical tools that make it easy to document where, when, and how often students are misbehaving without adding extra tasks to their workload.",
                "Using **AI Agents**, as part of the student behavior tracking process can simplify documentation, all while providing a more comprehensive understanding of student misbehavior.",
                "The conversational nature of AI Agents encourages the teacher to provide a more detailed account of what happened. This interactive dialogue can encourage better communication and reduce errors on the teacher's side of the conversation.",
                "The **Student Behavior Tracking AI Agent** provides teachers with a simple, structured way to monitor student behavior across the school day. Maybe a student is often late in the morning; but shows great focus in the afternoon, or they are helpful during group work but become disruptive during transitions.",
                "By focusing on both a student's strengths and challenges, educators can develop a more accurate picture of how that student is doing in class and pinpoint the areas where the student may need more support.",
                "The **Student Observation Assistant** helps teachers, aides, and support staff capture important details about a student's behavior, social interactions, and academic performance. This record provides a valuable reference point for parent/guardian calls, showing student-teacher conferences, and creating individualized support plans.",
                "The **Behavior Observation AI Agent** can collect detailed information about a specific incident, including the time, location, and intensity of the behavior. It can also be trained to automatically prompt the user with follow-up questions to fill in any missing or ambiguous information.",
                "AI Agents make behavior reporting more personalized. Schools can embed behavior reporting wizards in a web page or classroom or create a dedicated app to house the agents. Teachers can download the app to their desktop or mobile device so they can record incidents right away."
            ],
        },
        // --- Content from c137.PNG (Section 3) ---
        {
            type: 'subsection',
            heading: "Behavior intervention with AI Agents",
            paragraphs: [
                "Improving student behavior goes beyond recording and reporting incidents. Teachers also need a way to address the behavior in the moment.",
            ],
            quotes: [{
                text: "Instead of punitive consequences that seek to punish challenging behavior, teach students to think about their actions. When educators create thinkers, students begin to manage their thoughts and behaviors.",
                source: '– "My Teachers Were in \'Survival Mode\' Over Student Behavior: We Had to Reset"'
            }],
            paragraphs2: [
                "AI Agents can guide students through meaningful reflection and help teachers quickly identify the underlying causes of their misbehavior. Self-reflection encourages students to think critically about their behavior, what they were hoping to achieve, and the consequences of their behavior. This shifts the focus from punishment to growth and empowers students to take ownership of their actions.",
                "The **In-School Suspension Reflection AI Agent** encourages students to think about their behavior through conversation. Students can discuss the reasons for their actions, while considering alternative approaches they could take in the future.",
                "This conversation not only helps students reflect on and improve their behavior, it provides teachers with insight into how they can better support their students going forward. The agent can also be trained to direct students to additional resources that provide support beyond what teachers can offer alone.",
                "Teachers can use the **Behavior Plan AI Agent** to prepare next steps for students based on school policies. By interacting with the agent, teachers can create tailored behavior interventions, and students can develop a better understanding of their obligations and expectations.",
                "In addition to providing support in class, AI Agents can help students be proactive about improving their behavior. The **School Counseling Intake AI Agent** enables students and their guardians to request counseling services.",
                "This agent seamlessly gathers essential information from students and simplifies the intake process so school counselors can provide personalized support. Schools can train the agent to provide specific responses to questions, as well as provide support.",
                "By combining proven behavior tracking strategies with AI-powered tools, schools can reduce disruptions and help students build the habits and skills that will help them succeed in and out of the classroom.",
                "More importantly, these tools give teachers the confidence and consistency they need to manage behavior fairly and effectively.",
                "Whether it's identifying patterns, guiding a student through reflection, or connecting students to support services, digital tools are practical assistants that help strengthen behavior management and transform the classroom for both teachers and students."
            ]
        }
    ]
};

// Component to render a quote box
const QuoteBox: React.FC<{ text: string; source: string }> = ({ text, source }) => (
    <blockquote className="my-8 p-6 bg-indigo-50 border-l-4 border-indigo-600 rounded-lg shadow-inner">
        <p className="text-xl italic text-gray-700 leading-relaxed">
            &ldquo;{text}&rdquo;
        </p>
        <footer className="mt-4 text-sm font-semibold text-indigo-700">
            {source}
        </footer>
    </blockquote>
);

interface ChipProps {
    label: string;
    icon: string;
    hoverBgColor: string;
    hoverTextColor: string;
}

const AIChip: React.FC<ChipProps> = ({ label, icon, hoverBgColor, hoverTextColor }) => (
    <button
        className={`
      flex items-center space-x-2 px-4 py-2 rounded-full border border-gray-300 bg-gray-100
      text-gray-800 text-sm font-medium
      transition-all duration-200 ease-in-out
      hover:border-transparent
      ${hoverBgColor} ${hoverTextColor}
    `}
    >
        <span className="text-lg">{icon}</span>
        <span>{label}</span>
    </button>
);


// Main Article Component
const ArticleContent: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen font-sans p-4 sm:p-8">
                {/* Centering and Max Width Container */}
                <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 mt-15 sm:mt-10 rounded-xl shadow-2xl border border-gray-100">

                    {/* Header/Context Area */}
                    <header className="mb-8 border-b pb-4">
                        {/* Article Top Image */}
                        <div className="w-full flex justify-center mb-8">
                            <img
                                src="/c139.PNG"
                                alt="Article visual showing classroom technology and AI tools"
                                className="max-w-full h-auto rounded-3xl shadow-lg"
                            />
                        </div>

                        <p className="text-sm text-gray-500 mb-4">{articleData.context}</p>

                        <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-900 leading-tight mb-4">
                            {articleData.title}
                        </h1>

                        {/* Author and Date Section with Image */}
                        <div className="flex items-center text-sm text-gray-600 mb-6 mt-6">
                            <img
                                src="https://placehold.co/40/3b82f6/ffffff?text=AS&font=mont"
                                alt="Author profile picture"
                                className="w-10 h-10 rounded-full mr-3 border-2 border-gray-200"
                            />
                            <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
                                <span className="font-medium text-indigo-700">by {articleData.author}</span>
                                <span className="hidden sm:inline">|</span>
                                <span>Last Update Date: {articleData.date}</span>
                            </div>
                        </div>

                        {/* AI Chips Section */}
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold text-gray-700 mb-4">Summarize with:</h3>
                            <div className="flex flex-wrap gap-3">
                                {/* ChatGpt - Green */}
                                <AIChip
                                    label="ChatGpt"
                                    icon="💬"
                                    hoverBgColor="hover:bg-green-500"
                                    hoverTextColor="hover:text-white"
                                />
                                {/* Grok - Purple */}
                                <AIChip
                                    label="Grok"
                                    icon="🤖"
                                    hoverBgColor="hover:bg-[#8B2BFF]"
                                    hoverTextColor="hover:text-white"
                                />
                                {/* Google AI Mode - Blue */}
                                <AIChip
                                    label="Google AI Mode"
                                    icon="✨"
                                    hoverBgColor="hover:bg-blue-500"
                                    hoverTextColor="hover:text-white"
                                />
                                {/* Perplexity - Blue */}
                                <AIChip
                                    label="Perplexity"
                                    icon="🧠"
                                    hoverBgColor="hover:bg-[#0D67FE]"
                                    hoverTextColor="hover:text-white"
                                />
                                {/* Claude.ai - Orange/Brown */}
                                <AIChip
                                    label="Claude.ai"
                                    icon="🌟"
                                    hoverBgColor="hover:bg-[#D4A574]"
                                    hoverTextColor="hover:text-white"
                                />
                            </div>
                        </div>


                        <div className="mt-4 flex flex-wrap gap-2 text-xs">
                            {/* Keeping existing tags for article categorization if needed */}
                            {/*
             {['Education', 'AI', 'Technology', 'Behavior', 'K-12'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full font-medium">
                  #{tag}
                </span>
              ))}
             */}
                        </div>
                    </header>

                    {/* Article Body */}
                    <main className="text-gray-700 leading-relaxed space-y-6">
                        {articleData.sections.map((section, index) => (
                            <div key={index}>
                                {section.type === 'intro' && (
                                    <>
                                        {/* Intro Paragraphs */}
                                        {section.paragraphs.map((p, i) => (
                                            <p key={`intro-p-${i}`} className="mb-4 text-lg">
                                                {p}
                                            </p>
                                        ))}

                                        {/* Quote 1 */}
                                        {section.quotes && section.quotes.map((q, i) => (
                                            <QuoteBox key={`quote1-${i}`} text={q.text} source={q.source} />
                                        ))}

                                        {/* Follow-up / Transition */}
                                        <p className="mb-8 font-medium text-lg">
                                            {section.followUp}
                                        </p>
                                    </>
                                )}

                                {section.type === 'subsection' && (
                                    <>
                                        {section.subheading ? (
                                            <h3 className="text-2xl font-bold text-indigo-800 mt-8 mb-4">
                                                {section.heading}
                                            </h3>
                                        ) : (
                                            <h2 className="text-3xl font-bold text-indigo-900 mt-10 mb-5 border-t pt-6">
                                                {section.heading}
                                            </h2>
                                        )}

                                        {section.paragraphs.map((p, i) => (
                                            <p key={`sub-p-${index}-${i}`} className="mb-4">
                                                {p}
                                            </p>
                                        ))}

                                        {/* Quote 2 and 3 */}
                                        {section.quotes && section.quotes.map((q, i) => (
                                            <QuoteBox key={`quote-${index}-${i}`} text={q.text} source={q.source} />
                                        ))}

                                        {/* Additional paragraphs for section 3 */}
                                        {section.paragraphs2 && section.paragraphs2.map((p, i) => (
                                            <p key={`sub-p2-${index}-${i}`} className="mb-4">
                                                {p}
                                            </p>
                                        ))}
                                    </>
                                )}
                            </div>
                        ))}
                    </main>

                    {/* --- NEW CONTENT: CTA Section added below the main content --- */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <h2 className="text-3xl font-bold text-indigo-900 mb-6">
                            Ready to get started?
                        </h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Explore how AI Agents can transform your classroom management, student support, and school operations.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {/* Student Behavior Tracking AI Agent - Indigo */}
                            <AIChip
                                label="Student Behavior Tracking AI Agent"
                                icon="📈"
                                hoverBgColor="hover:bg-indigo-600"
                                hoverTextColor="hover:text-white"
                            />
                            {/* Behavior Observation AI Agent - Purple */}
                            <AIChip
                                label="Behavior Observation AI Agent"
                                icon="👁️‍🗨️"
                                hoverBgColor="hover:bg-purple-600"
                                hoverTextColor="hover:text-white"
                            />
                            {/* In-School Suspension Reflection AI Agent - Red */}
                            <AIChip
                                label="In-School Suspension Reflection AI Agent"
                                icon="🤔"
                                hoverBgColor="hover:bg-red-600"
                                hoverTextColor="hover:text-white"
                            />
                            {/* Behavior Plan AI Agent - Yellow */}
                            <AIChip
                                label="Behavior Plan AI Agent"
                                icon="📋"
                                hoverBgColor="hover:bg-yellow-500"
                                hoverTextColor="hover:text-gray-900"
                            />
                            {/* School Counseling Intake AI Agent - Teal */}
                            <AIChip
                                label="School Counseling Intake AI Agent"
                                icon="🤝"
                                hoverBgColor="hover:bg-teal-600"
                                hoverTextColor="hover:text-white"
                            />
                        </div>
                    </div>
                    {/* --- END NEW CONTENT --- */}

                </div>

            </div>
            <Footer />
        </>
    );
};

export default ArticleContent;