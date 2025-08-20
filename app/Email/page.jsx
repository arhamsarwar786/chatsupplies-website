import React from "react";

const GoldPrimoEmail = () => {
    return (
        // The main container for the email template. This is the outer shell that sets
        // the background color and centers the content.
        <div style={{ backgroundColor: "#F9F9F9", minHeight: "100vh", padding: "0 0 0 0" }}>
            {/* This is the main table that holds all the content of the email.
                Tables are the most reliable way to create layouts for email clients like Gmail. */}
            <table
                className="container"
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                role="presentation"
                style={{
                    maxWidth: "720px",
                    margin: "0 auto",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    borderRadius: "8px",
                    borderCollapse: "collapse",
                }}
            >
                <tbody>
                    {/* --- TOP GRADIENT HEADER ROW --- */}
                    <tr>
                        <td
                            style={{
                                background: "linear-gradient(to right, #2648EF 0%, #252F8B 100%)",
                                color: "white",
                                padding: "32px 32px 32px 52px", borderTopLeftRadius: "8px",
                                borderTopRightRadius: "8px",
                                marginLeft: "20px",
                            }}
                        >
                            {/* Nested table for the header content and robot image to ensure proper alignment */}
                            <table width="100%" cellPadding="0" cellSpacing="0" role="presentation">
                                <tbody>
                                    <tr>
                                        {/* Main heading text */}
                                        <td style={{ verticalAlign: "top", width: "60%" }}>
                                            <h1
                                                style={{
                                                    fontFamily: "'Mont', sans-serif",
                                                    fontSize: "40px",
                                                    fontWeight: 700,
                                                    margin: 0,
                                                    lineHeight: 1.2,
                                                }}
                                            >
                                                Your shopping experience <br /> is now called <br /> the Gold Primo
                                            </h1>
                                        </td>
                                        {/* Robot image container */}
                                        <td style={{ verticalAlign: "top", textAlign: "right", width: "40%" }}>
                                            <div style={{ display: "inline-block", maxWidth: "180px", position: "relative" }}>
                                                {/* Background SVG */}
                                                <img
                                                    src="/Lines/RobotBackground.svg"
                                                    alt="Robot Background"
                                                    style={{
                                                        position: "absolute",
                                                        top: "-10%",    // shift slightly upwards
                                                        left: "4%",   // shift slightly left
                                                        width: "120%",  // make background bigger than container
                                                        height: "120%",
                                                        objectFit: "contain",
                                                        zIndex: 0,
                                                    }}
                                                />

                                                {/* Robot SVG */}
                                                <img
                                                    src="/Icons/Bot.svg"
                                                    alt="Robot"
                                                    style={{
                                                        position: "relative",
                                                        zIndex: 1,
                                                        width: "100%",
                                                        height: "auto",
                                                        display: "block",
                                                    }}
                                                />
                                            </div>
                                        </td>



                                    </tr>
                                </tbody>
                            </table>
                            {/* CTA Button is now in its own row to ensure it's always below the content */}
                            <div style={{ textAlign: "right", marginTop: "24px" }}>
                                <a href="#" style={{ textDecoration: "none" }}>
                                    <button
                                        style={{
                                            backgroundColor: "black",
                                            color: "white",
                                            padding: "16px 64px",
                                            borderRadius: "2px",
                                            border: "none",
                                            cursor: "pointer",
                                            fontFamily: "'Mont', sans-serif",
                                            fontSize: "18px",
                                            fontWeight: 600,
                                            // The button is inline-block to prevent it from stretching in some clients
                                            display: "inline-block",
                                        }}
                                    >
                                        Learn More
                                    </button>
                                </a>
                            </div>
                        </td>
                    </tr>

                    {/* --- MAIN CONTENT ROW (WHITE SECTION) --- */}
                    <tr>
                        <td
                            style={{
                                backgroundColor: "white",
                                color: "black",
                                padding: "32px",
                                borderBottomLeftRadius: "0", // No radius here, it's on the footer
                                borderBottomRightRadius: "0",
                            }}
                        >
                            {/* Intro Section */}
                            <div
                                style={{
                                    marginBottom: "24px",
                                    borderBottom: "1px solid #D1D5DB",
                                    paddingBottom: "16px",
                                }}
                            >
                                <p style={{ fontFamily: "Mont, sans-serif", fontSize: "18px", margin: 0 }}>
                                    Hi Jonathan,
                                </p>
                                <p style={{ fontFamily: "Mont, sans-serif", fontSize: "16px", marginTop: "16px", marginBottom: 0 }}>
                                    The free loyalty program you've been subscribed to has evolved to
                                    Gold Primo with even more benefits.
                                </p>
                            </div>

                            {/* Benefits Section */}
                            <h2
                                style={{
                                    fontFamily: "Mont, sans-serif",
                                    fontSize: "24px",
                                    fontWeight: 900,
                                    marginBottom: "16px",
                                }}
                            >
                                New Gold Primo Benefits:
                            </h2>

                            {/* Mapping through benefits. Each benefit is a nested table row for reliability. */}
                            {[
                                {
                                    icon: "fas fa-truck",
                                    title: "FREE Shipping",
                                    description: "As a Gold Primo member, you get unlimited FREE next delivery on gold eligible items.",
                                },
                                {
                                    icon: "fas fa-gift",
                                    title: "Exclusive Deals",
                                    description: "Get exclusive deals and save more on souq.com, only for Gold Primo customers.",
                                },
                                {
                                    icon: "fas fa-headset",
                                    title: "VIP Customer Service",
                                    description: "Our Souq Gold Primo dedicated and specially trained team are here to help you.",
                                },
                                {
                                    icon: "fas fa-undo",
                                    title: "30-Day Return Policy",
                                    description: "Changed your mind? Return your product and get full refund within 30 days.",
                                },
                                {
                                    icon: "fas fa-gift",
                                    title: "More Surprises Coming Soon",
                                    description: "This program is meant to give benefits that never end.",
                                },
                            ].map((b, i) => (
                                <table
                                    key={i}
                                    width="100%"
                                    cellPadding="0"
                                    cellSpacing="0"
                                    role="presentation"
                                    style={{
                                        marginBottom: "20px",
                                        borderBottom: i === 4 ? "1px solid #D1D5DB" : "none",
                                        paddingBottom: i === 4 ? "20px" : "0",
                                    }}
                                >
                                    <tbody>
                                        <tr>
                                            {/* Icon Cell */}
                                            <td style={{ verticalAlign: "top", width: "40px", paddingRight: "12px" }}>
                                                <div
                                                    style={{
                                                        width: "32px",
                                                        height: "32px",
                                                        borderRadius: "50%",
                                                        backgroundColor: "#FFF",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        color: "#F59E0B",
                                                    }}
                                                >
                                                    <i className={b.icon}></i>
                                                </div>
                                            </td>
                                            {/* Text Content Cell */}
                                            <td style={{ verticalAlign: "top" }}>
                                                <h3
                                                    style={{
                                                        fontFamily: "Mont, sans-serif",
                                                        fontWeight: 700,
                                                        fontSize: "20px",
                                                        margin: "8px 0",
                                                    }}
                                                >
                                                    {b.title}
                                                </h3>
                                                <p style={{ fontFamily: "Mont, sans-serif", fontSize: "16px", margin: 0 }}>
                                                    {b.description}
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            ))}

                            {/* Outro Section */}
                            <p
                                style={{
                                    fontFamily: "Mont, sans-serif",
                                    fontSize: "16px",
                                    marginTop: "32px",
                                    maxWidth: "512px",
                                }}
                            >
                                You can manage your subscription and see how much you have saved from
                                shipping and cash on delivery fees from your account page.
                            </p>

                            {/* Learn More Button */}
                            <div style={{ textAlign: "center", marginTop: "40px" }}>
                                <a href="#" style={{ textDecoration: "none" }}>
                                    <button
                                        className="btn"
                                        style={{
                                            backgroundColor: "black",
                                            color: "white",
                                            padding: "18px 100px",
                                            borderRadius: "2px",
                                            border: "none",
                                            cursor: "pointer",
                                            fontSize: "18px",
                                            fontWeight: 600,
                                            fontFamily: "Mont, sans-serif",
                                        }}
                                    >
                                        Learn More
                                    </button>
                                </a>
                            </div>

                            {/* Social Icons Table */}
                            <div style={{ marginTop: "60px", textAlign: "center" }}>
                                <table
                                    width="auto"
                                    cellPadding="0"
                                    cellSpacing="0"
                                    style={{ textAlign: "center", borderCollapse: "collapse", margin: "0 auto" }}
                                >
                                    <tbody>
                                        <tr>
                                            {[
                                                { label: "Facebook", svgPath: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                                                { label: "LinkedIn", svgPath: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                                                { label: "Twitter", svgPath: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" },
                                                { label: "Instagram", svgPath: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
                                                { label: "YouTube", svgPath: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
                                            ].map((icon, idx) => (
                                                <td key={idx} style={{ padding: "0 4px" }}>
                                                    <a href="#" aria-label={icon.label}>
                                                        <div
                                                            style={{
                                                                width: "42px",
                                                                height: "42px",
                                                                border: "1px solid black",
                                                                borderRadius: "50%",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                margin: "0 auto 1px",
                                                            }}
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="20"
                                                                height="20"
                                                                fill="black"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path d={icon.svgPath} />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </td>
                                            ))}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </td>
                    </tr>

                    {/* --- FOOTER ROW (BLACK SECTION) --- */}
                    <tr>
                        <td
                            style={{
                                fontFamily: "Mont, sans-serif",
                                width: "100%",
                                backgroundColor: "black",
                                color: "white",
                                padding: "24px",
                                borderBottomLeftRadius: "8px",
                                borderBottomRightRadius: "8px",
                            }}
                        >
                            <p
                                style={{
                                    fontFamily: "Mont, sans-serif",
                                    fontSize: "14px",
                                    textAlign: "center",
                                    margin: 0,
                                }}
                            >
                                You're receiving this email because you are a subscriber of
                                NextMockup.com
                            </p>
                            <p style={{ fontFamily: "Mont, sans-serif", fontSize: "14px", textAlign: "center", marginTop: "8px", margin: "8px 0 0" }}>
                                If you feel you received it by mistake or wish to unsubscribe,{" "}
                                <a
                                    href="#"
                                    style={{
                                        fontFamily: "Mont, sans-serif",
                                        textDecoration: "underline",
                                        fontWeight: 700,
                                        fontSize: "16px",
                                        color: "white",
                                    }}
                                >
                                    click here
                                </a>
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default GoldPrimoEmail;
