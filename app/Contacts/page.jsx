"use client";

import Footer from '../Components/Footer';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faClock,
    faPhone,
    faUsers,
    faLocationDot,
    faEnvelope,
    faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import {
    faTwitter,
    faLinkedinIn,
    faFacebookF,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4 border-b border-gray-100 last:border-b-0">
            <button
                className="w-full flex justify-between items-center text-left font-medium text-gray-900 hover:text-indigo-600 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {question}
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
                />
            </button>
            {isOpen && (
                <p className="mt-3 text-gray-600">{answer}</p>
            )}
        </div>
    );
};

const ContactsPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');
        setMessageType('');

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message);
                setMessageType('success');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    subject: 'General Inquiry',
                    message: '',
                });
            } else {
                setMessage(data.message || 'An unexpected error occurred.');
                setMessageType('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setMessage('Failed to send message. Please try again later.');
            setMessageType('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white text-center pt-32 pb-12 px-4 w-full relative">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-4xl font-extrabold mb-4 leading-tight">Get in Touch</h1>
                    <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
                        Have questions about our AI chat solutions? We're here to help you transform your customer communication.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="flex items-center text-white font-semibold">
                            <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-2" />
                            24/7 Support
                        </div>
                        <div className="flex items-center text-white font-semibold">
                            <FontAwesomeIcon icon={faClock} className="w-5 h-5 mr-2" />
                            Quick Response
                        </div>
                        <div className="flex items-center text-white font-semibold">
                            <FontAwesomeIcon icon={faUsers} className="w-5 h-5 mr-2" />
                            Expert Team
                        </div>
                    </div>
                </div>
            </section>

            <main className="flex-grow max-w-7xl mx-auto w-full py-12 px-4 sm:px-6">
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Form Card */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                        <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                        {message && (
                            <div className={`p-4 mb-6 rounded-lg ${messageType === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {message}
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="John"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Doe"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="+1 (555) 000-0000"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                >
                                    <option>General Inquiry</option>
                                    <option>Support Request</option>
                                    <option>Partnership</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Tell us how we can help you..."
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {/* Contact Info Card */}
                        <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                            <h2 className="text-xl font-bold mb-6">Contact Information</h2>
                            
                            <div className="flex items-start mb-6">
                                <div className="bg-indigo-100 p-3 rounded-lg mr-4 flex-shrink-0">
                                    <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5 text-indigo-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500 mb-1">Address</p>
                                    <p className="text-gray-700">
                                        123 AI Street, Tech Valley<br />
                                        San Francisco, CA 94102
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start mb-6">
                                <div className="bg-indigo-100 p-3 rounded-lg mr-4 flex-shrink-0">
                                    <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-indigo-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500 mb-1">Phone</p>
                                    <p className="text-gray-700">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="bg-indigo-100 p-3 rounded-lg mr-4 flex-shrink-0">
                                    <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-indigo-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500 mb-1">Email</p>
                                    <p className="text-gray-700">hello@aichatsupplies.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Business Hours Card */}
                        <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                            <h2 className="text-xl font-bold mb-6">Business Hours</h2>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-700 font-medium">Monday - Friday</span>
                                    <span className="text-gray-700">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-700 font-medium">Saturday</span>
                                    <span className="text-gray-700">10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-700 font-medium">Sunday</span>
                                    <span className="text-gray-700">Closed</span>
                                </div>
                            </div>
                        </div>

                        {/* Follow Us Card */}
                        <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                            <h2 className="text-xl font-bold mb-6">Follow Us</h2>
                            <div className="flex space-x-4">
                                <a href="#" className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-colors">
                                    <FontAwesomeIcon icon={faTwitter} className="w-5 h-5 text-gray-700" />
                                </a>
                                <a href="#" className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-colors">
                                    <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5 text-gray-700" />
                                </a>
                                <a href="#" className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-colors">
                                    <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5 text-gray-700" />
                                </a>
                                <a href="#" className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-colors">
                                    <FontAwesomeIcon icon={faInstagram} className="w-5 h-5 text-gray-700" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* FAQ Section */}
            <section className="bg-gray-50 py-16 px-4 sm:px-6 w-full">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                        Quick answers to common questions about our AI chat solutions
                    </p>
                    <div className="max-w-3xl mx-auto space-y-4">
                        <FAQItem
                            question="How quickly can I get started with AI Chat Supplies?"
                            answer="Getting started is quick and easy! Our onboarding process is designed to be seamless, and you can typically have your AI chat solutions up and running within a few hours to a couple of days, depending on your specific integration needs."
                        />
                        <FAQItem
                            question="What kind of support do you offer?"
                            answer="We offer 24/7 comprehensive support including live chat, email, and phone assistance. We also provide extensive documentation, tutorials, and a dedicated help center to ensure you have all the resources you need."
                        />
                        <FAQItem
                            question="Can I customize the AI responses?"
                            answer="Yes, absolutely! Our AI solutions are highly customizable. You can train the AI with your specific business data, define custom responses, and integrate with your existing knowledge bases to ensure accurate and on-brand communication."
                        />
                        <FAQItem
                            question="Do you offer enterprise solutions?"
                            answer="Yes, we provide tailored enterprise solutions designed for large organizations with complex needs. These include advanced security features, dedicated account management, custom integrations, and scalable infrastructure. Please contact our sales team for a personalized consultation."
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactsPage;