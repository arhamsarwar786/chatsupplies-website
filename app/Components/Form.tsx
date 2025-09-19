"use client";

import React, { useState } from "react";
import { Mail, ChevronDown, User, MessageSquare } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { toast } from "sonner";

const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState<string | null>(null);
  const [form, setForm] = useState({ phone_number: "" });

  const handlePhoneChange = (value: string | undefined) => {
    setForm({ ...form, phone_number: value || "" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const firstName = (formData.get("firstName") as string)?.trim();
    const lastName = (formData.get("lastName") as string)?.trim();

    const payload = {
      name: `${firstName || ""} ${lastName || ""}`.trim(), // ✅ backend expects "name"
      email: (formData.get("email") as string)?.trim(),
      phone: form.phone_number?.trim(),
      message: (formData.get("message") as string)?.trim(),
    };

    if (!payload.name || !payload.email || !payload.phone || !payload.message) {
      toast.error("Fill all required fields");
      return;
    }

    setLoading(true);
    setResponseMsg(null);

    try {
      const res = await fetch(
        "https://api.chatsupplies.com/api/book-appointment?client_id=123&session_id=Havier",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 409) {
          setResponseMsg("Your request is received. We'll contact you soon");
          toast.success("Form submitted successfully!");
          e.currentTarget.reset();
          setForm({ phone_number: "" });
        } else {
          let errorMsg = "Something went wrong";
          if (typeof data.detail === "string") {
            errorMsg = data.detail;
          } else if (data.detail?.msg) {
            errorMsg = data.detail.msg;
          }
          setResponseMsg(errorMsg);
        }
        return;
      }

      setResponseMsg("Your request is received. We'll contact you soon");
      toast.success("Form submitted successfully!");
      e.currentTarget.reset();
      setForm({ phone_number: "" });
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
        {/* First + Last name */}
        <div className="flex flex-row space-x-4">
          <div className="w-1/2">
            <label htmlFor="firstName" className="sr-only">
              First name
            </label>
            <div className="relative">
              <User
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First name"
                pattern="[A-Za-z]+"
                title="Only alphabets are allowed"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl outline-none transition-all text-gray-700 placeholder-gray-400 text-sm"
              />
            </div>
          </div>

          <div className="w-1/2">
            <label htmlFor="lastName" className="sr-only">
              Last name
            </label>
            <div className="relative">
              <User
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last name"
                pattern="[A-Za-z]+"
                title="Only alphabets are allowed"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl outline-none transition-all text-gray-700 placeholder-gray-400 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="sr-only">
            Your email
          </label>
          <div className="relative">
            <Mail
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl outline-none transition-all text-gray-700 placeholder-gray-400 text-sm"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="sr-only">
            Phone
          </label>
          <div className="relative">
            <PhoneInput
              name="phone_number"
              international
              defaultCountry="PK"
              value={form.phone_number}
              onChange={handlePhoneChange}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700 placeholder-gray-400 text-sm"
              placeholder="Enter phone number"
            />
            <ChevronDown
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="sr-only">
            How can we help?
          </label>
          <div className="relative">
            <MessageSquare
              size={20}
              className="absolute left-3 top-4 text-gray-400"
            />
            <textarea
              id="message"
              name="message"
              placeholder="How can we help?"
              rows={3}
              maxLength={120}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl outline-none transition-all resize-none text-gray-700 placeholder-gray-400 text-sm"
            />
            <div className="absolute bottom-2 right-4 text-xs text-gray-400">
              0/120
            </div>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full text-white font-semibold cursor-pointer py-2 rounded-xl transition-all duration-300 shadow-lg bg-[linear-gradient(to_right,#2648EF_0%,#252F8B_100%)] hover:brightness-110 text-sm"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {responseMsg && (
        <p className="text-center text-sm mt-4 text-gray-700">{responseMsg}</p>
      )}
    </>
  );
};

export default ContactForm;
