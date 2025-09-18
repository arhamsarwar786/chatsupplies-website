// app/packages/page.tsx (Next.js App Router)
"use client";
import { useEffect, useState } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";

export default function PackagesPage() {
    const [policy, setPolicy] = useState<string>("");

    useEffect(() => {
        async function fetchPackages() {
            try {
                const res = await fetch("https://api.chatsupplies.com/packages/");
                const data = await res.json();
                setPolicy(data.policy_html);
            } catch (err) {
                console.error("Error fetching packages:", err);
            }
        }
        fetchPackages();
    }, []);

    return (
        <>
            <Navbar />
            <div className="max-w-5xl mx-auto p-6 mt-10">
                {policy ? (
                    <div dangerouslySetInnerHTML={{ __html: policy }} />
                ) : (
                    <p>Loading Packages...</p>
                )}
            </div>
            <Footer />
        </>
    );
}
