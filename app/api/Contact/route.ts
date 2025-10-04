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

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const appointmentId = searchParams.get('id');
    const limit = searchParams.get('limit') || '50';

    // If appointment ID is provided, fetch specific appointment
    if (appointmentId) {
      const res = await fetch(
        `https://api.chatsupplies.com/api/appointments/${appointmentId}?limit=${limit}`,
        {
          method: "GET",
          headers: {
            "accept": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1YmFpZCIsImV4cCI6MTc1OTU2MTU0Mn0.6gokwDoNiU07x0N80JC7mzwzD4z5V4fuFWGnhuO132I"
          },
        }
      );

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
    }

    // Handle other GET scenarios or return error
    return NextResponse.json(
      { error: "Appointment ID is required" },
      { status: 400 }
    );

  } catch (error: any) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: error.message || "Unknown error in route" },
      { status: 500 }
    );
  }
}