import { promises as fs } from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

const CSV_PATH = path.join(process.cwd(), 'data', 'leads.csv');

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }
    const now = new Date().toISOString();
    // Escape double quotes in message
    const safeMessage = (message || '').replace(/"/g, '""');
    const row = `"${name.replace(/"/g, '""')}","${email.replace(/"/g, '""')}","${safeMessage}","${now}"
`;
    let fileExists = false;
    try {
      await fs.access(CSV_PATH);
      fileExists = true;
    } catch {}
    if (!fileExists) {
      // Write header
      await fs.writeFile(CSV_PATH, 'name,email,message,date\n' + row, 'utf8');
    } else {
      await fs.appendFile(CSV_PATH, row, 'utf8');
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
