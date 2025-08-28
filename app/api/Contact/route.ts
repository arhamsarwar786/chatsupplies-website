import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 🔄 Map your frontend form fields → API schema
    const payload = {
      first_name: body.firstName,
      last_name: body.lastName,
      email: body.email,
      phone_number: body.phone,
      website_url: body.website || "", // required, send empty string if not collected
      company_name: body.company || "", // required, send empty string if not collected
    };

    const res = await fetch("https://api.chatsupplies.com/beta/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": "Bearer YOUR_TOKEN" // add if needed
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Swagger API Error:", res.status, text);
      return NextResponse.json(
        {
          error: `Swagger API returned ${res.status}`,
          details: text,
        },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);

  } catch (error: any) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: error.message || "Unknown error in route" },
      { status: 500 }
    );
  }
}
