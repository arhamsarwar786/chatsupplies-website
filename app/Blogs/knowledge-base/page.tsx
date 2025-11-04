import React from 'react';
import { Bot, User, Calendar, BookOpen, Search, Lightbulb, Check, XCircle } from 'lucide-react';
import Navbar from '../../Components/navbar';
import Footer from '../../Components/Footer';

// Main content container component
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
        <Navbar/>
      {/* Article Header & Illustration - Mimicking j9.PNG */}
      <header className="pt-16 pb-12 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <p className="text-sm text-gray-500 mb-2">
            <span className="hover:text-blue-600 cursor-pointer">Home</span> / 
            <span className="hover:text-blue-600 cursor-pointer"> What is a chatbot?</span> / 
            How to build a chatbot with a knowledge base
          </p>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mt-4 mb-6">
            How to build a chatbot with a knowledge base
          </h1>

          {/* Metadata */}
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1 text-gray-400" />
              by Jeffrey Weishaupt
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1 text-gray-400" />
              Last Update Date: October 20, 2025
            </div>
          </div>

          {/* Summary Badges */}
          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            <span className="font-semibold text-gray-700">Summarize with:</span>
            {['ChatGPT', 'Grok', 'Google AI Mode', 'Perplexity', 'Claude.ai'].map(ai => (
              <span key={ai} className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 font-medium rounded-full">
                <Lightbulb className="w-3 h-3 mr-1" />
                {ai}
              </span>
            ))}
          </div>
        </div>
        
        {/* Mock Illustration Area */}
        <div className="max-w-4xl mx-auto mt-8 h-48 rounded-xl overflow-hidden bg-white/70 border-2 border-gray-100 shadow-inner">
            <div className="h-full flex items-center justify-center bg-gray-200">
                {/* Placeholder for the laptop/cup illustration from j9.PNG */}
                <span className="text-gray-500 text-lg">Article Illustration Placeholder</span>
                <BookOpen className="w-12 h-12 text-gray-400 ml-4" />
            </div>
        </div>
      </header>

      {/* Article Body */}
      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Steps to building a chatbot with knowledge base - j9.PNG */}
        <section className="bg-white p-8 rounded-xl shadow-lg mb-12 border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Bot className="w-6 h-6 mr-2 text-blue-500" />
            Steps to building a chatbot with knowledge base
          </h2>
          <ol className="list-decimal pl-5 space-y-2 text-lg text-gray-700">
            <li>Prepare and structure your knowledge base content.</li>
            <li>Choose a chatbot platform.</li>
            <li>Use ChatSupplies Chatbot Builder for no-code setup.</li>
            <li>Test queries and refine responses.</li>
            <li>Launch on your website or preferred channels.</li>
            <li>Monitor usage and track feedback.</li>
            <li>Iterate based on performance data.</li>
          </ol>
        </section>

        {/* Content Flow - j9.PNG & j10.PNG */}
        <p className="mb-6 text-lg leading-relaxed">
          A <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">chatbot</a> built from a knowledge base gives your customers instant access to accurate answers without involving a live agent. These AI tools can do more than provide canned responses. They use GPT-backed models to pull information from structured content to deliver relevant and readable replies.
        </p>
        <p className="mb-10 text-lg leading-relaxed">
          In this guide, you’ll learn what makes a chatbot knowledge base work and how to build one for your team. If you run a support center, handle internal requests, or plan to scale your organization’s FAQ experience, this guide will help you.
        </p>

        {/* What is a chatbot knowledge base? - j10.PNG */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What is a chatbot knowledge base?</h2>
          <p className="mb-4 text-lg leading-relaxed">
            A chatbot knowledge base is structured information your team maintains, like help center articles, product documentation, internal wikis, or customer service logs. Your AI chatbot finds and delivers responses drawn directly from this trusted content.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            These bots use large language models, such as GPT-4, to interpret the intent behind a user's question. For example, someone asking, “Can I change my subscription plan?” won’t get a general article list. They’ll get a concise, readable reply with key steps pulled from the source material.
          </p>
          <p className="text-lg leading-relaxed">
            Static, <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">rule-based chatbots</a> can handle menus, form-fillers, or limited FAQs. They follow decision trees with no flexibility. But knowledge-base bots powered by AI can adapt to how people phrase questions and shift direction mid-conversation, which makes them far more capable for dynamic support tasks.
          </p>
        </section>

        {/* Why use a knowledge base with your chatbot? - j10.PNG & j11.PNG */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why use a knowledge base with your chatbot?</h2>
          <p className="mb-6 text-lg leading-relaxed">
            When you connect your chatbot to a knowledge base, you create a more useful and consistent support experience. Here's what makes this setup valuable across different teams:
          </p>
          <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
            <li>
              <span className="font-semibold">Instant, 24-7 support:</span> A knowledge-backed chatbot can answer questions at any time. It does not need human intervention, so it works outside normal business hours and supports customers during high-traffic periods when staff may be unavailable.
            </li>
            <li>
              <span className="font-semibold">Quick resolution times:</span> A knowledge-based chatbot doesn't send users through menus or make them wait in a queue. It immediately finds relevant content from your help center or internal documents and assists customers. As a result, delays are less common and issues are resolved more quickly.
            </li>
            <li>
              <span className="font-semibold">Reduced agent workload:</span> Many questions, like password resets, pricing details, or onboarding steps, don't need a human. When handled by a chatbot, these requests never reach your support queue, allowing human staff to focus on more complex queries.
            </li>
            <li>
              <span className="font-semibold">Consistent answers:</span> When the bot pulls from a centralized source, everyone gets the same answer. There is no conflicting advice or knowledge gaps between teams.
            </li>
            <li>
              <span className="font-semibold">Multiple use cases:</span> An AI chatbot knowledge base can help your customers with returns, product setup, or account changes. But it can also assist your staff with IT requests, HR policies, equipment checkouts, and more.
            </li>
            <li>
              <span className="font-semibold">Multilingual:</span> With multilingual models, a chatbot can answer in the user's language, even if your knowledge base is written in a different one. No manual translations are required.
            </li>
          </ul>
        </section>
        
        {/* How chatbot knowledge bases work - j11.PNG */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How chatbot knowledge bases work</h2>
          <p className="mb-6 text-lg leading-relaxed">
            A knowledge-powered chatbot has a clear functioning pipeline. Here's how it works.
          </p>
          <p className="mb-10 text-lg leading-relaxed">
            When you train your chatbot with a comprehensive knowledge base, it does more than answer simple questions. It can meet the user’s intent, whether that user is a staff member or a customer.
          </p>
        </section>

        {/* Connecting the data - j11.PNG & j12.PNG */}
        <section className="mb-12 p-6 bg-white rounded-xl shadow-md border-l-4 border-red-500">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Connecting the data</h3>
          <p className="mb-4 text-lg leading-relaxed">
            To get started creating a knowledge base for your chatbot, you need to give the bot access to your knowledge. You’ll have to
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
            <li>Upload documents, like PDFs or Word files</li>
            <li>Link to public or private URLs, like your help center or blog</li>
            <li>Connect directly to content platforms like Notion</li>
          </ul>
          <p className="mt-4 text-lg leading-relaxed">
            These inputs will form the foundation the chatbot draws from to answer staff and customer questions. Make sure these documents are clear, direct, and well organized; the bot will give better responses.
          </p>
        </section>

        {/* Understanding queries through embeddings - j12.PNG */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Understanding queries through embeddings</h3>
          <p className="mb-4 text-lg leading-relaxed">
            After receiving the data, the chatbot system converts it into something the AI model can understand, a format called embeddings. These are mathematical representations of text that capture meaning, not just keywords. When a user asks a question, their input is also turned into an embedding.
          </p>
          <p className="text-lg leading-relaxed">
            This model doesn’t scan for keyword matches in the user’s query. Instead it performs a semantic search, which compares the meaning of the question with the stored content. Then, it retrieves the most relevant information.
          </p>
        </section>

        {/* Retrieval-augmented generation - j12.PNG */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Retrieval-augmented generation</h3>
          <p className="mb-4 text-lg leading-relaxed">
            In many chatbot setups, the AI doesn’t guess or invent responses. It uses a method called retrieval-augmented generation (RAG).
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            When someone submits a question, the system first retrieves the top matching documents or linked sites. The AI then generates a reply using only that content. Since the bot isn’t pulling from its training data or the internet, but rather grounding its answers in your actual knowledge base, RAG-based bots are more accurate and less likely to go off-topic.
          </p>
        </section>

        {/* The user interaction flow - j13.PNG */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The user interaction flow</h2>
          <p className="mb-6 text-lg leading-relaxed">
            From the user’s point of view, here’s what typically happens:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
            <li>They ask a question in plain language just like they would with a human agent.</li>
            <li>The chatbot looks up relevant content using embeddings and semantic search.</li>
            <li>It generates a response based on what it finds, often pulling in steps, links, or policy details.</li>
            <li>If it can’t find a match, the bot can escalate to a live agent, suggest a rephrasing, or present fallback content like a link to your help center.</li>
          </ul>
          <p className="mt-8 text-lg leading-relaxed">
            Chatbot-based <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">customer service automation</a> combines accuracy and speed. Since the chatbot acts as the first line of support, human agents aren’t overwhelmed with basic requests.
          </p>
        </section>

        {/* Use cases for chatbot knowledge bases - j13.PNG & j14.PNG */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Use cases for chatbot knowledge bases</h2>
          <p className="mb-6 text-lg leading-relaxed">
            Some practical ways to use a chatbot knowledge base follow:
          </p>
          <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
            <li>
              <span className="font-semibold">Customer support:</span> The chatbot can answer common questions about products, services, shipping timelines, return policies, and order tracking. It’s great for reducing ticket volume and handling peak hours.
            </li>
            <li>
              <span className="font-semibold">Internal teams (HR, IT, operations):</span> A chatbot can help employees with routine inquiries like vacation policies, benefits, password resets, equipment requests, and onboarding steps.
            </li>
            <li>
              <span className="font-semibold">Sales and pricing guidance:</span> Visitors can learn about plan tiers and features and volume-based pricing through a chatbot. Then, the bot can route high-intent leads to a salesperson.
            </li>
            <li>
              <span className="font-semibold">Education and e-learning:</span> A GPT chatbot knowledge base can help students find syllabus details, assignment deadlines, grading policies, or links to learning resources. It’s useful in self-paced or remote programs.
            </li>
            <li>
              <span className="font-semibold">Legal and compliance:</span> The chatbot can offer non-binding explanations of internal procedures such as nondisclosure agreement requirements, policy acceptance steps, or document workflows.
            </li>
            <li>
              <span className="font-semibold">Healthcare and insurance:</span> Chatbots can respond to common inquiries about coverage, co-pays, appointment booking, or document submission.
            </li>
            <li>
              <span className="font-semibold">Product onboarding:</span> New users can be walked through setup, integrations, troubleshooting, or best practices through a knowledge-powered chatbot.
            </li>
          </ul>
          <p className="mt-8 text-lg leading-relaxed">
            In all of these use cases, chatbot documentation integration is important. Only when it has access to your knowledge can the chatbot be truly helpful and accurate.
          </p>
        </section>

        {/* How to build your own knowledge base chatbot - j14.PNG */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How to build your own knowledge base chatbot</h2>
          <p className="mb-8 text-lg leading-relaxed">
            You don't need any advanced technical skills to create a chatbot knowledge base. ChatSupplies makes this process a breeze with these simple steps.
          </p>

          {/* Step 1 - j14.PNG */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Prepare and structure your knowledge base content.</h3>
            <p className="text-lg leading-relaxed">
              First, collect all the information that users may need. This could include help articles, onboarding guides, policy documents, FAQ pages, and internal workflows. Organize this content into clean, readable sections. Use headings, bullet points, and plain language, as this helps AI models retrieve information effectively.
            </p>
          </div>

          {/* Step 2 - j14.PNG & j15.PNG */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">2. Choose a chatbot platform.</h3>
            <p className="text-lg leading-relaxed">
              Select a platform that allows you to upload files, connect to help center URLs, or integrate existing documentation. Since you want the chatbot to be knowledge-powered, the accessibility of quality content is a must.
            </p>
          </div>

          {/* Step 3 - j15.PNG */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">3. Use ChatSupplies Chatbot Builder for no-code setup.</h3>
            <p className="text-lg leading-relaxed">
              The <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">ChatSupplies Chatbot Builder</a> makes it easy to create an AI chatbot knowledge base without coding knowledge. You can upload documents, connect to live forms, or pull from website content.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              ChatSupplies Agent Builder lets you customize the tone, responses, and visual style of the <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">AI Agents</a> to match your brand voice. The platform also supports multilingual interactions. Plus, the chatbot can guide users through form completion and answer their common questions.
            </p>
          </div>

          {/* Step 4 - j15.PNG */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">4. Test queries and refine responses.</h3>
            <p className="text-lg leading-relaxed">
              Try different types of questions and review the chatbot’s responses. Adjust your source content or fallback messages as needed. If you feel the responses are too long or short, you can tweak their length at this point, too.
            </p>
          </div>

          {/* Step 5 - j15.PNG */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">5. Launch on your website or preferred channels.</h3>
            <p className="text-lg leading-relaxed">
              ChatSupplies allows easy embedding with a simple code snippet. If you plan to use <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">AI in customer service</a>, place the chatbot on your site’s landing pages or support hubs. For sales and lead generation, you can also use the chatbot in the Contact section of your site to offer immediate assistance.
            </p>
          </div>

          {/* Step 6 - j15.PNG & j16.PNG */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">6. Monitor usage and track feedback.</h3>
            <p className="text-lg leading-relaxed">
              Once your chatbot is live, keep an eye on user interactions. Identify which topics are asked most often and where users drop off. If some types of questions remain unresolved, take note of them. You can then add the content required to answer those queries.
            </p>
          </div>

          {/* Step 7 - j16.PNG */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">7. Iterate based on performance data.</h3>
            <p className="text-lg leading-relaxed">
              Based on the information you collect through monitoring, you can update your documents, add missing topics, and adjust how the chatbot responds to tricky queries. Regular improvements will help your chatbot stay helpful to users as new information comes in.
            </p>
          </div>
        </section>

        {/* Best practices for chatbot knowledge bases - j16.PNG & j17.PNG */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Best practices for chatbot knowledge bases</h2>
          <p className="mb-6 text-lg leading-relaxed">
            The following tips will help you make the most of your chatbot knowledge base:
          </p>
          <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
            <li>
              <span className="font-semibold">Structure content for readability:</span> Write help articles in short, focused sections. Use subheadings, bulleted lists, and plain sentence structure to make content easy for both users and AI models to understand. Avoid long paragraphs and dense text, since chatbots work best when the source content is clean and scannable.
            </li>
            <li>
              <span className="font-semibold">Maintain consistency and clarity:</span> Stick to a consistent tone, formatting style, and terminology across all articles. Avoid internal abbreviations, department-specific slang, or overly technical language unless it’s clearly explained. Users should be able to understand the language right away.
            </li>
            <li>
              <span className="font-semibold">Keep content current:</span> Schedule regular reviews to remove outdated information. You can also use tags or categories to cluster related topics together. When possible, format articles in a Q&A style with clear headings.
            </li>
            <li>
              <span className="font-semibold">Prepare for gaps:</span> Set up fallback responses that guide users to submit a form, rephrase their question, or contact support if a chatbot can’t answer a query. Also, monitor the query logs to identify unusual or ambiguous questions that the chatbot struggles with and expand coverage accordingly.
            </li>
            <li>
              <span className="font-semibold">Scale thoughtfully:</span> Upload core topics first. Then test the chatbot’s performance with real queries. Gradually expand the knowledge base, and adjust your structure and content based on what the bot understands well.
            </li>
          </ul>
        </section>

        {/* Common pitfalls to avoid - j17.PNG (Callout Box) */}
        <section className="p-8 bg-blue-50 border-t-8 border-blue-500 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-blue-800 mb-4 flex items-center">
            <XCircle className="w-8 h-8 mr-3 text-blue-500" />
            Common pitfalls to avoid
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-blue-900">
            Before you connect your chatbot to a knowledge base, prepare your content. Avoid uploading large batches of documents without reviewing them first, as disorganized or untagged files confuse the model. Don't rely entirely on AI-generated answers, and pay attention to how real users ask questions. Always let users know they’re chatting with a bot to set proper expectations. Finally, build in a quality check process to test the chatbot’s responses. This will allow you to spot errors and outdated information before they affect the user experience.
          </p>
        </section>

      </main>
      
      {/* Simple Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t mt-12">
        &copy; 2025 Knowledge Base Article Demo. All rights reserved.
      </footer>
      <Footer/>
    </div>
  );
};

export default App;
