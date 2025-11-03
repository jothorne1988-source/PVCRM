import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const { notes, site, contact } = await req.json();
  const summary = `Lead: ${contact?.firstName ?? contact?.companyName ?? "Prospect"} — Key needs TBD. Next best action: schedule site survey.`;
  const score = 0.7;
  return NextResponse.json({ summary, score });
}
