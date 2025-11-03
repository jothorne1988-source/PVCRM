import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const { arrayDesign, lead, orgMode } = await req.json();
  const draft = `Hello ${lead?.contactName ?? "there"}, based on a ${arrayDesign?.dcKW ?? "X"} kW system we estimate …`;
  return NextResponse.json({ draft });
}
