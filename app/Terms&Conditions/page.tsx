// app/terms/page.tsx (Next.js App Router)
"use client";
import { useEffect, useState } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";

export default function TermsPage() {
    const [policy, setPolicy] = useState<string>("");

    useEffect(() => {
        async function fetchPolicy() {
            try {
                const res = await fetch("https://api.chatsupplies.com/policies");
                const data = await res.json();
                setPolicy(data.policy_html);
            } catch (err) {
                console.error("Error fetching policy:", err);
            }
        }
        fetchPolicy();
    }, []);

    return (
        <>
            <Navbar />

            <div className="max-w-5xl mx-auto p-6 mt-10">
                {policy ? (
                    <div
                        dangerouslySetInnerHTML={{ __html: policy }}
                    />
                ) : (
                    <p>Loading Terms and Conditions...</p>
                )}

            </div>
            <Footer />
        </>
    );
}

