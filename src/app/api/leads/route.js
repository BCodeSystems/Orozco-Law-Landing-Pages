import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      ok: true,
      message: "Leads API is working",
      hasScriptUrl: !!process.env.GOOGLE_APPS_SCRIPT_URL,
    },
    { status: 200 }
  );
}

export async function POST(request) {
  try {
    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;

    if (!scriptUrl) {
      return NextResponse.json(
        { ok: false, error: "Missing GOOGLE_APPS_SCRIPT_URL env var" },
        { status: 500 }
      );
    }

    const body = await request.json();

    const name = (body.name || "").toString().trim();
    const email = (body.email || "").toString().trim();
    const phoneRaw = (body.phone || "").toString().trim();
    const message = (body.message || "").toString();

    if (!name || !email || !phoneRaw || !message) {
      return NextResponse.json(
        { ok: false, error: "Name, email, phone, and message are required." },
        { status: 400 }
      );
    }

    const phone = phoneRaw.replace(/\D/g, "");
    if (phone.length < 10) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid phone number." },
        { status: 400 }
      );
    }

    const MAX_MESSAGE_LENGTH = 500;
    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { ok: false, error: `Message cannot exceed ${MAX_MESSAGE_LENGTH} characters.` },
        { status: 400 }
      );
    }

    // Source of Lead: derive from request host (best for multi-domain)
    const hostHeader =
      request.headers.get("x-forwarded-host") ||
      request.headers.get("host") ||
      "unknown";
    const source = hostHeader.split(",")[0].trim();

    // Area of Law (Practice Area)
    const areaOfLaw = (body.areaOfLaw || "Personal Injury").toString().trim();

    const payload = { name, email, phone, message, source, areaOfLaw };

    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    const text = await res.text().catch(() => "");
    let data = null;
    try {
      data = text ? JSON.parse(text) : null;
    } catch {
      data = { raw: text };
    }

    if (!res.ok || (data && data.ok === false)) {
      return NextResponse.json(
        { ok: false, error: data?.error || "Apps Script request failed", status: res.status },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err?.message || String(err) },
      { status: 500 }
    );
  }
}