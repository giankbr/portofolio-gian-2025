import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

// Ganti dengan ID Google Sheet kamu
const SHEET_ID = '1zwlTGK4NzTvOO3odSSCMs8Gj9FPM7pn1dOK_S6oqwRc';
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
    console.error('Google Sheets API error:', err); // <--- Tambahkan ini!
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
