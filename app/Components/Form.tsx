"use client";

import React, { useState } from "react";
import { Mail, ChevronDown, User, Link, Briefcase } from "lucide-react";
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
    const websiteUrl = (formData.get("websiteUrl") as string)?.trim();
    const companyName = (formData.get("companyName") as string)?.trim();

    const payload = {
      first_name: firstName,
      last_name: lastName,
      email: (formData.get("email") as string)?.trim(),
      phone_number: form.phone_number?.trim(),
      website_url: websiteUrl,
      company_name: companyName,
    };

    if (
      !payload.first_name ||
      !payload.last_name ||
      !payload.email ||
      !payload.phone_number
    ) {
      toast.error("Fill all required fields");
      return;
    }

    setLoading(true);
    setResponseMsg(null);

    try {
      const res = await fetch(
        "https://api.chatsupplies.com/beta/signup",
        {
          method: "POST",
          headers: {
            "accept": "application/json",
            "Content-Type": "application/json",
          },
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
          } else if (Array.isArray(data.detail) && data.detail.length > 0) {
            errorMsg = data.detail.map((err: any) => err.msg).join(", ");
            console.log("Network response error:", data);
          } else if (data.detail?.msg) {
            errorMsg = data.detail.msg;
          } else if (data.error) {
            errorMsg = data.error;
          }

          setResponseMsg(errorMsg);
          toast.error(errorMsg);
        }
        return;
      }

      // Handle successful response
      if (data.success) {
        setResponseMsg(data.message || "Your request is received. We'll contact you soon");
        toast.success("Form submitted successfully!");
        e.currentTarget.reset();
        setForm({ phone_number: "" });
      } else {
        setResponseMsg(data.message || "Something went wrong");
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      setResponseMsg("Something went wrong");
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const fetchAppointments = async () => {
    try {
      const response = await fetch(
        "https://api.chatsupplies.com/api/book-appointment",
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        }
      );
      const appointments = await response.json();
      console.log(appointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 sm:space-y-5 max-w-sm sm:max-w-md mx-auto w-full"
      >
        <div className="flex flex-row space-x-4">
          <div className="w-1/2">
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
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 text-sm"
              />
            </div>
          </div>

          <div className="w-1/2">
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
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 text-sm"
              />
            </div>
          </div>
        </div>

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
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 text-sm"
          />
        </div>

        <div className="relative">
          <PhoneInput
            name="phone_number"
            international
            defaultCountry="PK"
            value={form.phone_number}
            onChange={handlePhoneChange}
            className="phone-input-fix w-full border border-gray-200 rounded-xl px-3 py-2 text-gray-700 placeholder-gray-400 text-sm focus-within:ring-2 focus-within:ring-black-500 focus-within:border-transparent transition"
            placeholder="Enter phone number"
          />

          <ChevronDown
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          />
        </div>

        <div className="relative">
          <Link
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="url"
            id="websiteUrl"
            name="websiteUrl"
            placeholder="Your website URL (Optional)"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 text-sm"
          />
        </div>

        <div className="relative">
          <Briefcase
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            id="companyName"
            name="companyName"
            placeholder="Company Name (Optional)"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 text-sm"
          />
        </div>

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