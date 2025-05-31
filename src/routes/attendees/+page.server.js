import db from '$lib/server/db.js';

export async function load() {
  const attendees = await db.getAllAttendees();
  return { attendees };
}
