// Rename this file to AuthPopup.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Eye, EyeOff, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "@/app/lib/firebase";
import {BASE_URL} from "@/app/lib/Constant";

// Import the renamed component
import SignupForm from "./Signup";

// Export the component that will handle both login and signup
export default function AuthPopup() {
    // State to manage the overall visibility of the popup
    const [showPopup, setShowPopup] = useState(true);
    // State to manage which form is displayed inside the popup
    const [isLoginView, setIsLoginView] = useState(true); // true for Login, false for Signup

    // --- Login State (Keep existing) ---
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    useEffect(() => {
        // Reset form fields and error when the pop-up opens or view changes
        setUsername("");
        setPassword("");
        setError("");
    }, [isLoginView]);

    // Helper functions for switching views
    const switchToLogin = () => setIsLoginView(true);
    const switchToSignup = () => setIsLoginView(false);
    const closePopupAndLogin = () => {
        setShowPopup(false);
    }
    const handleSignupSuccess = () => {
        switchToLogin();
    }

    // --- Login Function with direct API call (No RTK Query) ---
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!username || !password) {
            setError("Please fill in all fields.");
            toast.error("Please fill in all fields");
            return;
        }

        setIsLoading(true);
        setError("");

        try {
            // Use the same BASE_URL from your auth API configuration
            const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001';
            const loginUrl = `${BASE_URL}/auth/login`;
            
            console.log("🔍 Attempting login to:", loginUrl);
            console.log("📤 Login data:", { username, password: '***' }); // Don't log actual password

            const response = await fetch(loginUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            console.log("📥 Response status:", response.status);
            
            // Check if response is OK before trying to parse JSON
            if (!response.ok) {
                // Try to get error message from response
                let errorMessage = "Login failed";
                try {
                    const errorResult = await response.json();
                    errorMessage = errorResult.message || errorMessage;
                } catch (parseError) {
                    // If JSON parsing fails, use status text
                    errorMessage = response.statusText || errorMessage;
                }
                throw new Error(errorMessage);
            }

            const result = await response.json();
            console.log("✅ Login successful:", result);
            
            const user = result.user;
            const apikey = result.apikey || result.api_key;
            const token = result.token || result.access_token;
            const email = result?.user?.email || result.email;

            if (token && user?.role) {
                // Store in localStorage only (no Redux)
                localStorage.setItem("token", token);
                localStorage.setItem("apikey", apikey);
                localStorage.setItem("email", email);
                localStorage.setItem("username", username);
                localStorage.setItem("userid", user.id);
                localStorage.setItem("userObject", JSON.stringify(user));
                localStorage.setItem("role", user.role);

                console.log("💾 Data stored in localStorage");

                toast.success("Login successful!");
                
                setIsLoading(false);
                closePopupAndLogin();

                // Prepare data for admin dashboard
                const dashboardData = {
                    token: token,
                    email: email,
                    userid: user.id,
                    username: username,
                    userObject: JSON.stringify(user),
                    apikey: apikey,
                    role: user.role,
                    login_time: new Date().toISOString(),
                };

                // Open admin dashboard with all required data
                const queryParams = new URLSearchParams();
                Object.entries(dashboardData).forEach(([key, value]) => {
                    if (value) queryParams.append(key, value.toString());
                });

                const dashboardUrl = `https://admin.chatsupplies.com/dashboard?${queryParams.toString()}`;
                console.log("🚀 Opening dashboard:", dashboardUrl);

                window.open(dashboardUrl, "_blank");
            } else {
                setError("Invalid response from server");
                toast.error("Invalid response from server");
            }
        } catch (err: any) {
            console.error("❌ Login failed:", err);
            setIsLoading(false);
            
            // Better error message handling
            let message = "Invalid username or password";
            
            if (err.name === 'TypeError' && err.message.includes('fetch')) {
                message = "Network error: Cannot connect to server. Please check your connection.";
            } else if (err.message) {
                message = err.message;
            }
            
            setError(message);
            toast.error(message);
        }
    };

    // --- Google Login Function (Keep existing) ---
    const handleGoogleLogin = async () => {
        setIsLoading(true);
        setError("");

        try {
            console.log("🔐 Firebase Google authentication");

            // 1. Firebase Google authentication
            const result = await signInWithPopup(auth, provider);
            console.log("✅ Google login successful:", result.user);

            // 2. Get user data
            const user = result.user;
            const token = await user.getIdToken();
            const email = user.email;
            const userId = user.uid;
            const displayName = user.displayName || email?.split('@')[0] || 'User';

            console.log("📋 User data:", { email, userId, displayName, token: token ? "Yes" : "No" });

            // 3. Create user object in the format Admin Dashboard expects
            const userObject = {
                id: userId,
                email: email,
                username: displayName,
                role: "user", // Default role
                created_at: user.metadata.creationTime,
                last_login: user.metadata.lastSignInTime,
                // Add profile picture if available
                photoURL: user.photoURL,
            };

            // 4. Store data in localStorage
            localStorage.setItem("token", token);
            localStorage.setItem("email", email || "");
            localStorage.setItem("username", displayName);
            localStorage.setItem("userid", userId);
            localStorage.setItem("userObject", JSON.stringify(userObject));
            localStorage.setItem("loginSource", "firebase-google");

            console.log("💾 Data stored in localStorage");

            // 5. Prepare data for admin dashboard
            const dashboardData = {
                token: token,
                email: email || "",
                userid: userId,
                username: displayName,
                userObject: JSON.stringify(userObject),
                apikey: "", // Leave empty if not available
                role: "user",
                login_time: new Date().toISOString(),
            };

            // 6. Open admin dashboard with all required data
            setIsLoading(false);
            closePopupAndLogin();

            const queryParams = new URLSearchParams();
            Object.entries(dashboardData).forEach(([key, value]) => {
                if (value) queryParams.append(key, value.toString());
            });

            const dashboardUrl = `https://admin.chatsupplies.com/dashboard?${queryParams.toString()}`;
            console.log("🚀 Opening dashboard:", dashboardUrl);

            window.open(dashboardUrl, "_blank");

        } catch (error: any) {
            console.error("❌ Google login failed:", error);
            setIsLoading(false);
            // Handle Google auth errors
            if (error.code === 'auth/popup-closed-by-user') {
                // User closed the popup - reset loading state and don't show error
                setIsLoading(false);
                setError("");
                console.log("ℹ️ Google login popup closed by user");
            } else if (error.code === 'auth/popup-blocked') {
                setError("Popup was blocked. Please allow popups for this site.");
            } else if (error.code === 'auth/operation-not-allowed') {
                setError("Google authentication is not enabled. Please contact support.");
            } else {
                setError(`Google login failed: ${error.message}`);
            }
        }
    };

    // Login Form Component
    const LoginForm = (
        <div className="flex flex-col items-center text-center space-y-4">
            <div className="mb-2">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">
                    Welcome Back
                </h2>
                <p className="text-xs text-gray-600 max-w-xs leading-relaxed">
                    Start a new chat to engage users, automate responses, and grow
                    smarter conversations with AI.
                </p>
            </div>

            <form
                onSubmit={handleLogin}
                className="space-y-4 w-full max-w-xs mx-auto bg-white/60 backdrop-blur-md p-4 rounded-xl shadow-md border border-white/30"
            >
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded text-xs">
                        {error}
                    </div>
                )}

                {/* Username input */}
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                        if (error && e.target.value.trim()) {
                            setError("");
                        }
                    }}
                    disabled={isLoading}
                    className={`w-full px-3 py-2 rounded-md border text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-[#f3f0ff] text-black placeholder-gray-500 ${error && !username ? "border-red-500" : "border-gray-300"
                        }`}
                    autoComplete="username"
                />

                {/* Password */}
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            if (error && e.target.value.trim()) {
                                setError("");
                            }
                        }}
                        disabled={isLoading}
                        className={`w-full px-3 py-2 rounded-md border text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-[#f3f0ff] text-black placeholder-gray-500 ${error && !password ? "border-red-500" : "border-gray-300"
                            }`}
                        autoComplete="current-password"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800 transition-colors"
                        disabled={isLoading}
                    >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-2 text-white font-medium rounded-full bg-gradient-to-r from-[#2648EF] to-[#252F8B] hover:opacity-90 transition disabled:opacity-50 text-sm"
                >
                    {isLoading ? "Logging in..." : "Login"}
                </button>

                {/* Divider */}
                <div className="relative flex items-center py-1">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <div className="flex-shrink mx-3 text-gray-500 text-xs">or</div>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                {/* Google Login Button */}
                <button
                    type="button"
                    onClick={handleGoogleLogin}
                    disabled={isLoading}
                    className="w-full py-2 px-3 border border-gray-300 rounded-full bg-white text-gray-700 font-medium hover:bg-gray-50 transition disabled:opacity-50 flex items-center justify-center space-x-2 text-sm"
                >
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    <span>Continue with Google</span>
                </button>

                {/* Signup link */}
                <p className="text-center text-xs text-gray-600 mt-3">
                    Don't have an account?{" "}
                    <span
                        onClick={switchToSignup}
                        className="text-blue-600 font-semibold cursor-pointer hover:underline"
                    >
                        Sign up
                    </span>
                </p>
            </form>
        </div>
    );

    if (!showPopup) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity animate-fade-in"
                onClick={() => setShowPopup(false)}
            ></div>

            {/* Popup */}
            <div className="relative z-10 w-full max-w-sm mx-auto bg-white rounded-xl shadow-lg p-4 animate-slide-up border border-gray-200">
                {/* Close button */}
                <button
                    onClick={() => setShowPopup(false)}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition"
                    aria-label="Close"
                >
                    <X size={18} />
                </button>

                {/* Content Switch */}
                {/* Logo Section */}
                <div className="flex flex-col w-full mb-4 items-center gap-2">
                    <div className="flex items-center gap-2">
                        <h1 className="text-lg font-bold tracking-tight text-gray-900">
                            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                Chat Supplies
                            </span>
                        </h1>
                    </div>
                </div>

                {isLoginView ? (
                    // Display Login Form
                    LoginForm
                ) : (
                    // Display Signup Form
                    <SignupForm
                        onLoginClick={switchToLogin}
                        onSignupSuccess={handleSignupSuccess}
                    />
                )}
            </div>
        </div>
    );
}