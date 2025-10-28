"use client";

import React, { useState, useCallback } from "react";
import { Mail, ChevronDown, User, Link, Briefcase, X } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { toast } from "sonner";

const CALENDAR_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2rHh8wWbK63YzdsCt1sqMjhGGDhoUGq_t2jworrQuGyHABuYkoId8F7PKaeRDMnpAdQXXMX7rx?gv=true";

const NewForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ phone_number: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAnimationClass, setModalAnimationClass] = useState("scale-95 opacity-0");

  const handlePhoneChange = (value: string | undefined) => {
    setForm({ ...form, phone_number: value || "" });
  };

  const openModal = useCallback(() => {
    setIsModalOpen(true);
    setTimeout(() => setModalAnimationClass("scale-100 opacity-100"), 20);
  }, []);

  const closeModal = useCallback(() => {
    setModalAnimationClass("scale-95 opacity-0");
    setTimeout(() => setIsModalOpen(false), 300);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const firstName = (formData.get("firstName") as string)?.trim();
    const lastName = (formData.get("lastName") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const websiteUrl = (formData.get("websiteUrl") as string)?.trim();
    const companyName = (formData.get("companyName") as string)?.trim();
    const phone_number = form.phone_number?.trim();

    if (!firstName || !lastName || !email || !phone_number || !websiteUrl || !companyName) {
      toast.error("Please fill all required fields");
      setLoading(false);
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 800));

    toast.success("Form submitted successfully! Opening calendar...");
    openModal();

    e.currentTarget.reset();
    setForm({ phone_number: "" });
    setLoading(false);
  };

  return (
    <>
      {/* --- Header --- */}
      <div className="text-center mb-5">
        <h2 className="text-2xl font-bold text-start text-gray-900">Hire us</h2>
        <p className="text-gray-500 text-start text-sm mt-1">You can reach us anytime</p>
      </div>

      {/* --- Contact Form --- */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 sm:space-y-5 max-w-md mx-auto w-full"
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
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                required
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
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                required
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
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            required
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
            placeholder="Your website URL"
            required
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
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
            placeholder="Company Name"
            required
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full text-white font-semibold cursor-pointer py-2 rounded-xl transition-all duration-300 shadow-md bg-[linear-gradient(to_right,#2648EF_0%,#252F8B_100%)] hover:brightness-110 text-sm"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {/* --- Calendar Modal --- */}
      {isModalOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${isModalOpen ? "opacity-100" : "opacity-0"
            }`}
        >
          <div
            className={`relative w-full h-full max-w-[95vw] max-h-[95vh] bg-white rounded-lg shadow-2xl transform transition-all duration-500 ${modalAnimationClass}`}
          >
            <div className="absolute right-2 z-10">
              <button
                onClick={closeModal}
                className="p-2 bg-white cursor-pointer rounded-full shadow-lg text-gray-600 hover:text-gray-900 transition-colors"
              >
                <X size={22} />
              </button>
            </div>

            <iframe
              src={CALENDAR_URL}
              title="Google Calendar Appointment Scheduler"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};
export default NewForm;
