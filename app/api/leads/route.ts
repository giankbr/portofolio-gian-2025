import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

// Ganti dengan ID Google Sheet kamu
const SHEET_ID = 'YOUR_SHEET_ID';
const SHEET_RANGE = 'Sheet1!A:D'; // Atur sesuai kebutuhan

const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    const sheets = google.sheets({ version: 'v4', auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: SHEET_RANGE,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, email, message, new Date().toISOString()]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
