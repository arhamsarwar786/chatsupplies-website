import GenericPage from "../Components/Generic";

export default function AboutPage() {
  return (
    <GenericPage
      heading="Plans"
      text1="Great for startups or small businesses. Everything in Free Plan plus unlimited chat history, email and ticket support, basic chatbot customization (logo, name, theme color), performance dashboard, advanced training data import, response analytics (basic), export chat data (.csv), no branding, no live chat, no API access."
      text2="Perfect for growing teams. Everything in Basic Plan plus: up to 3 chatbots, unlimited chat history, priority email + live meeting support, advanced chatbot customization (CSS styles, avatar), multi-language support, advanced analytics/reports, AI training with your own documents, data backup & recovery, role-based team access."
      text3="Ideal for individuals and trial users. 1 Chatbot (active for 4 months), chat history for first 10 users, email support, basic chatbot customization (chat name only), predefined chatbot template, public chatbot link, limited dashboard access, no integrations, no analytics/reporting, no live chat, no training data import, no API access."
    />
  );
}
