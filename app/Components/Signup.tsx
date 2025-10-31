// Rename this file to SignupForm.tsx for clarity if you wish, or keep it as Signup.tsx
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "sonner";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/app/Components/select"
import PhoneInput from "react-phone-number-input";

// Define props to receive the switch function from the parent
interface SignupFormProps {
    onLoginClick: () => void; // Function to switch to Login popup view
    onSignupSuccess: () => void; // Function to close popup or switch to login after success
}

// Update the export to take the props
export default function SignupForm({ onLoginClick, onSignupSuccess }: SignupFormProps) {
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        website_url: "",
        industry: "",
        send_welcome_email: true,
        auto_activate_account: true,
    });

    const [error, setError] = useState("");
    const [missing, setMissing] = useState<string[]>([]);
    const [invalidNames, setInvalidNames] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    // ✅ Handle input changes with live validation
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Live validation for first_name & last_name
        if (name === "first_name" || name === "last_name") {
            if (/^[A-Za-z\s]*$/.test(value)) {
                setInvalidNames((prev) => prev.filter((field) => field !== name));
            } else {
                if (!invalidNames.includes(name)) setInvalidNames((prev) => [...prev, name]);
            }
        }

        setForm({ ...form, [name]: value });

        // Remove from missing if user filled it
        if (value.trim() !== "" && missing.includes(name)) {
            setMissing((prev) => prev.filter((field) => field !== name));
        }

        if (error) setError("");
    };

    const handlePhoneChange = (value: string | undefined) => {
        const phoneValue = value || "";
        setForm({ ...form, phone_number: phoneValue });

        if (phoneValue.trim() !== "" && missing.includes("phone_number")) {
            setMissing((prev) =>
                prev.filter((field) => field !== "phone_number")
            );
        }

        if (error) setError("");
    };

    const handleSelectChange = (value: string, name: string) => {
        setForm((prev) => ({ ...prev, [name]: value }));

        if (value.trim() !== "" && missing.includes(name)) {
            setMissing((prev) => prev.filter((field) => field !== name));
        }

        if (error) setError("");
    };

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        // Trim all values
        const trimmedForm = {
            first_name: form.first_name.trim(),
            last_name: form.last_name.trim(),
            email: form.email.trim(),
            phone_number: form.phone_number.trim(),
            website_url: form.website_url.trim(),
            industry: form.industry.trim(),
            send_welcome_email: form.send_welcome_email,
            auto_activate_account: form.auto_activate_account,
        };

        // Check for empty fields - only check string fields that are required
        const requiredFields = {
            first_name: trimmedForm.first_name,
            last_name: trimmedForm.last_name,
            email: trimmedForm.email,
            phone_number: trimmedForm.phone_number,
            industry: trimmedForm.industry,
        };

        const emptyFields = Object.entries(requiredFields)
            .filter(([_, val]) => val === "")
            .map(([key]) => key);

        // Check for invalid first/last names - only check string fields
        const invalidNameFields = ["first_name", "last_name"].filter((key) => {
            const value = trimmedForm[key as keyof typeof trimmedForm];
            return typeof value === "string" && !/^[A-Za-z\s]+$/.test(value);
        });

        if (emptyFields.length > 0 || invalidNameFields.length > 0) {
            setMissing(emptyFields);
            setInvalidNames(invalidNameFields);

            if (invalidNameFields.length > 0) {
                toast.error("Fill the fields with correct Information.");
                setError("Fill the fields with correct Information.");
            } else {
                toast.error("Please fill in all required fields");
                setError("Please fill in all required fields");
            }
            return; // Prevent form submission
        }

        setIsLoading(true);
        try {
            const response = await fetch("https://api.chatsupplies.com/beta/signup", {
                method: "POST",
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(trimmedForm),
            });

            const data = await response.json();

            if (!response.ok) {
                if (response.status === 409) {
                    toast.error("Account already exists");
                    setError("Account already exists");
                    return; // Don't redirect to login
                } else {
                    let errorMsg = "Something went wrong";

                    if (typeof data.detail === "string") {
                        errorMsg = data.detail;
                    } else if (Array.isArray(data.detail) && data.detail.length > 0) {
                        errorMsg = data.detail.map((err: any) => err.msg).join(", ");
                    } else if (data.detail?.msg) {
                        errorMsg = data.detail.msg;
                    } else if (data.error) {
                        errorMsg = data.error;
                    }

                    throw new Error(errorMsg);
                }
            }

            // Handle successful response - always show custom success message
            if (data.success || response.ok) {
                toast.success("Account is created successfully, please log in");
                // Instead of router.push("/auth/login"), call the prop function
                onSignupSuccess();
            } else {
                throw new Error(data.message || "Something went wrong");
            }
        } catch (err: any) {
            const message = err?.message || "Failed to create client";
            setError(message);
            toast.error(message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center text-center space-y-3 max-w-xs mx-auto">
            <div className="mb-1">
                <h2 className="text-xl font-bold text-gray-800 mb-1">
                    Create Account
                </h2>
                <p className="text-xs text-gray-600 max-w-xs leading-relaxed">
                    Start a new chat to engage users, automate responses, and grow
                    smarter conversations with AI.
                </p>
            </div>
            <form
                onSubmit={handleSignup}
                className="space-y-3 w-full mx-auto bg-card backdrop-blur-md p-3 rounded-lg shadow-md border border-white/30"
            >
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-2 py-1.5 rounded text-xs">
                        {error}
                    </div>
                )}

                {/* First & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <input
                        name="first_name"
                        value={form.first_name}
                        onChange={handleChange}
                        placeholder="First Name"
                        className={`border rounded-md px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 text-gray-800 placeholder-gray-500 ${missing.includes("first_name") || invalidNames.includes("first_name")
                            ? "border-red-500"
                            : "border-gray-300"
                            }`}
                    />
                    <input
                        name="last_name"
                        value={form.last_name}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className={`border rounded-md px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 text-gray-800 placeholder-gray-500 ${missing.includes("last_name") || invalidNames.includes("last_name")
                            ? "border-red-500"
                            : "border-gray-300"
                            }`}
                    />
                </div>

                {/* Email */}
                <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className={`border rounded-md px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 w-full text-gray-800 placeholder-gray-500 ${missing.includes("email") ? "border-red-500" : "border-gray-300"}`}
                />

                {/* Phone */}
               <PhoneInput
    value={form.phone_number}
    onChange={handlePhoneChange}
    className={`w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 text-gray-800 placeholder-gray-500 phone-input-fix ${missing.includes("phone_number") ? "border-red-500" : "border-gray-300"
        }`}
/>

                {/* Website URL */}
                <input
                    name="website_url"
                    type="url"
                    value={form.website_url}
                    onChange={handleChange}
                    placeholder="Website URL (optional)"
                    className="border border-gray-300 rounded-md px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 w-full text-gray-800 placeholder-gray-500"
                />

                {/* Industry */}
                <div>
                    <Select
                        value={form.industry}
                        onValueChange={(val) => handleSelectChange(val, "industry")}
                    >
                        <SelectTrigger
                            className={`w-full border rounded-md px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-gray-800 ${missing.includes("industry")
                                ? "border-red-500"
                                : "border-gray-300"
                                }`}
                        >
                            <SelectValue 
                                placeholder="Select Industry" 
                                className="text-gray-800 bg-transparent placeholder-gray-500"
                            />
                        </SelectTrigger>
                        <SelectContent className="text-gray-800 bg-white">
                            <SelectItem value="tech" className="text-gray-800 hover:bg-gray-100 focus:bg-gray-100">Technology</SelectItem>
                            <SelectItem value="finance" className="text-gray-800 hover:bg-gray-100 focus:bg-gray-100">Finance</SelectItem>
                            <SelectItem value="health" className="text-gray-800 hover:bg-gray-100 focus:bg-gray-100">Healthcare</SelectItem>
                            <SelectItem value="education" className="text-gray-800 hover:bg-gray-100 focus:bg-gray-100">Education</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Signup Button */}
                <button
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-r from-[#2648EF] to-[#252F8B] hover:opacity-90 text-white py-1.5 px-4 text-sm font-medium"
                    disabled={isLoading}
                >
                    {isLoading ? "Signing up..." : "Signup"}
                </button>

                {/* Redirect to Login link */}
                <p className="text-center text-xs text-gray-600 mt-3">
                    Already have an account?{" "}
                    <span
                        onClick={onLoginClick}
                        className="text-[#2648EF] font-semibold cursor-pointer hover:underline"
                    >
                        Login
                    </span>
                </p>
            </form>
        </div>
    );
}