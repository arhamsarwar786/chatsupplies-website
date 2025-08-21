import React from "react";

const GoldPrimoEmail = () => {
    return (
        <div style={{ backgroundColor: "#F9F9F9", minHeight: "100vh", padding: "0 0 0 0" }}>
            {/* Inline CSS for responsiveness using a style tag */}
            <style>
                {`
                /* Basic reset and font import for consistency */
                body {
                    margin: 0;
                    padding: 0;
                    font-family: 'Mont', sans-serif;
                }
                /* Media query for mobile devices */
                @media only screen and (max-width: 600px) {
                    .container {
                        width: 100% !important;
                        min-width: 100% !important;
                    }
                    .header-cell {
                        padding: 24px 20px !important;
                        display: block !important;
                        width: 100% !important;
                        box-sizing: border-box;
                        text-align: center !important;
                    }
                    .header-heading {
                        font-size: 28px !important;
                        line-height: 1.2 !important;
                    }
                    .header-image-cell {
                        display: block !important;
                        width: 100% !important;
                        text-align: center !important;
                    }
                    .header-image {
                        max-width: 200px !important;
                        height: auto !important;
                    }
                    .cta-button {
                        padding: 16px 40px !important;
                        font-size: 16px !important;
                    }
                    .content-cell {
                        padding: 24px 20px !important;
                    }
                    .intro-text, .outro-text, .benefit-text {
                        font-size: 14px !important;
                    }
                    .benefit-title {
                        font-size: 18px !important;
                    }
                    .benefit-table td {
                        display: block !important;
                        width: 100% !important;
                        text-align: center !important;
                    }
                    .benefit-icon-cell {
                         width: 100% !important;
                         padding-bottom: 12px !important;
                    }
                    .benefit-icon-circle {
                        margin: 0 auto;
                    }
                    .social-icons {
                        width: auto !important;
                    }
                }
                `}
            </style>

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
                                padding: "32px 32px 32px 52px",
                                borderTopLeftRadius: "8px",
                                borderTopRightRadius: "8px",
                            }}
                            className="header-cell"
                        >
                            <table width="100%" cellPadding="0" cellSpacing="0" role="presentation">
                                <tbody>
                                    <tr>
                                        {/* Main heading text */}
                                        <td style={{ verticalAlign: "top", width: "60%" }} className="header-cell">
                                            <h1
                                                style={{
                                                    fontFamily: "'Mont', sans-serif",
                                                    fontSize: "40px",
                                                    fontWeight: 700,
                                                    margin: 0,
                                                    lineHeight: 1.2,
                                                }}
                                                className="header-heading"
                                            >
                                                Your shopping experience <br /> is now called <br /> the Gold Primo
                                            </h1>
                                        </td>
                                        {/* Robot image container */}
                                        <td style={{ verticalAlign: "top", textAlign: "right", width: "40%" }} className="header-image-cell">
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    maxWidth: "100%",
                                                    minWidth: "200px",
                                                    position: "relative",
                                                }}
                                            >
                                                <img
                                                    src="https://images.unsplash.com/photo-1755354113133-303805b81806?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                    alt="Robot"
                                                    style={{
                                                        position: "relative",
                                                        zIndex: 1,
                                                        width: "100%",
                                                        height: "250px",
                                                        display: "block",
                                                        maxWidth: "300px",
                                                    }}
                                                    className="header-image"
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
                                            display: "inline-block",
                                        }}
                                        className="cta-button"
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
                                borderBottomLeftRadius: "0",
                                borderBottomRightRadius: "0",
                            }}
                            className="content-cell"
                        >
                            {/* Intro Section */}
                            <div
                                style={{
                                    marginBottom: "24px",
                                    borderBottom: "1px solid #D1D5DB",
                                    paddingBottom: "16px",
                                }}
                            >
                                <p style={{ fontFamily: "Mont, sans-serif", fontSize: "18px", margin: 0 }} className="intro-text">
                                    Hi Jonathan,
                                </p>
                                <p style={{ fontFamily: "Mont, sans-serif", fontSize: "16px", marginTop: "16px", marginBottom: 0 }} className="intro-text">
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
                                    className="benefit-table"
                                    style={{
                                        marginBottom: "20px",
                                        borderBottom: i === 4 ? "1px solid #D1D5DB" : "none",
                                        paddingBottom: i === 4 ? "20px" : "0",
                                    }}
                                >
                                    <tbody>
                                        <tr>
                                            {/* Icon Cell */}
                                            <td style={{ verticalAlign: "top", width: "40px", paddingRight: "12px" }} className="benefit-icon-cell">
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
                                                    className="benefit-icon-circle"
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
                                                    className="benefit-title"
                                                >
                                                    {b.title}
                                                </h3>
                                                <p style={{ fontFamily: "Mont, sans-serif", fontSize: "16px", margin: 0 }} className="benefit-text">
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
                                className="outro-text"
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
                                    className="social-icons"
                                    style={{ textAlign: "center", borderCollapse: "collapse", margin: "0 auto" }}
                                >
                                    <tbody>
                                        <tr>
                                            {[
                                                { label: "Facebook", svgPath: "https://raw.githubusercontent.com/sultan-arshi/assets-chat-supplies/fe0313790bc584b9ef066fda32960afd7642c023/assets/facebook-f.svg" },
                                                { label: "LinkedIn", svgPath: "https://raw.githubusercontent.com/sultan-arshi/assets-chat-supplies/main/assets/linkedin-in.svg" },
                                                { label: "Twitter", svgPath: "https://raw.githubusercontent.com/sultan-arshi/assets-chat-supplies/fe0313790bc584b9ef066fda32960afd7642c023/assets/x-twitter.svg" },
                                                { label: "Instagram", svgPath: "https://raw.githubusercontent.com/sultan-arshi/assets-chat-supplies/fe0313790bc584b9ef066fda32960afd7642c023/assets/instagram.svg" },
                                                { label: "YouTube", svgPath: "https://raw.githubusercontent.com/sultan-arshi/assets-chat-supplies/fe0313790bc584b9ef066fda32960afd7642c023/assets/youtube.svg" },
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
                                                            <img
                                                                src={icon.svgPath}
                                                                alt={icon.label}
                                                                width="20"
                                                                height="20"
                                                                style={{ display: "block" }}
                                                            />
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
                                If you feel you received it by mistake or wish to unsubscribe.{" "}
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