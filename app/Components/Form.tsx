"use client";

import React, { useState } from "react";
import { Mail, Phone, ChevronDown, User, MessageSquare } from "lucide-react";

const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/Contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      setResponseMsg(JSON.stringify(data)); // show Swagger response
    } catch (error) {
      console.error(error);
      setResponseMsg("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 sm:space-y-5 max-w-sm sm:max-w-md mx-auto w-full"
      >
        <div className="flex flex-row space-x-4">
          {/* First Name */}
          <div className="w-1/2">
            <label htmlFor="firstName" className="sr-only">First name</label>
            <div className="relative">
              <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First name"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl 
                  outline-none transition-all text-gray-700 
                  placeholder-gray-400 text-sm"
              />
            </div>
          </div>

          {/* Last Name */}
          <div className="w-1/2">
            <label htmlFor="lastName" className="sr-only">Last name</label>
            <div className="relative">
              <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last name"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl
                  outline-none transition-all text-gray-700 
                  placeholder-gray-400 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="sr-only">Your email</label>
          <div className="relative">
            <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl
                outline-none transition-all text-gray-700 
                placeholder-gray-400 text-sm"
            />
          </div>
        </div>

        {/* Phone */}
        <div className="flex w-full border border-gray-200 rounded-xl overflow-hidden outline-none">
          <div className="relative border-r border-gray-200 w-1/4 sm:w-1/5">
            <select className="pl-3 pr-8 py-2 bg-white outline-none text-gray-700 text-sm appearance-none w-full">
              <option>+62</option>
              <option>+1</option>
              <option>+44</option>
            </select>
            <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>

          <div className="relative flex-1">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone number"
              className="w-full pl-3 pr-4 py-2 outline-none text-gray-700 placeholder-gray-400 text-sm"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="sr-only">How can we help?</label>
          <div className="relative">
            <MessageSquare size={20} className="absolute left-3 top-4 text-gray-400" />
            <textarea
              id="message"
              name="message"
              placeholder="How can we help?"
              rows={3}
              maxLength={120}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl  
                outline-none transition-all resize-none 
                text-gray-700 placeholder-gray-400 text-sm"
            ></textarea>
            <div className="absolute bottom-2 right-4 text-xs text-gray-400">
              0/120
            </div>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full text-white font-semibold cursor-pointer py-2 rounded-xl 
            transition-all duration-300 shadow-lg 
            bg-[linear-gradient(to_right,#2648EF_0%,#252F8B_100%)] 
            hover:brightness-110 text-sm"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {responseMsg && (
        <p className="text-center text-sm mt-4 text-gray-700">
          Response: {responseMsg}
        </p>
      )}
    </>
  );
};

export default ContactForm;
