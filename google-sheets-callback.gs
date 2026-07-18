/**
 * CCTI India — "Get a Callback" lead capture → Google Sheets
 * ==========================================================
 * SETUP (one time, ~3 minutes):
 *
 * 1. Create a new Google Sheet. Name the first tab "Leads".
 * 2. In the Sheet: Extensions → Apps Script.
 * 3. Delete any code, paste ALL of this file, and Save.
 * 4. Click Deploy → New deployment → type "Web app".
 *      - Description: CCTI Callback
 *      - Execute as: Me
 *      - Who has access: Anyone
 *    Click Deploy, authorise access when prompted.
 * 5. Copy the Web app URL (ends with /exec).
 * 6. In the website project create/edit .env.local and add:
 *      NEXT_PUBLIC_SHEETS_WEBAPP_URL=https://script.google.com/macros/s/XXXX/exec
 *    (or paste it directly into components/CallbackForm.tsx → SHEETS_WEBAPP_URL)
 * 7. Restart `npm run dev`. Submit a test — a row should appear in the Sheet.
 *
 * To also get an email on every lead, fill NOTIFY_EMAIL below.
 */

var NOTIFY_EMAIL = ''; // e.g. 'sales@cctiindia.com' — leave '' to disable emails

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Leads')
      || SpreadsheetApp.getActiveSpreadsheet().insertSheet('Leads');

    // Add header row once
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Phone', 'City', 'Interest', 'Source Page']);
    }

    var p = (e && e.parameter) ? e.parameter : {};
    sheet.appendRow([
      new Date(),
      p.name || '',
      p.phone || '',
      p.city || '',
      p.interest || '',
      p.source || '',
    ]);

    if (NOTIFY_EMAIL) {
      MailApp.sendEmail(
        NOTIFY_EMAIL,
        'New callback request — ' + (p.name || 'Lead'),
        'Name: ' + (p.name || '') + '\nPhone: ' + (p.phone || '') +
        '\nCity: ' + (p.city || '') + '\nInterested in: ' + (p.interest || '') +
        '\nPage: ' + (p.source || '')
      );
    }

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput('CCTI callback endpoint is live.');
}
