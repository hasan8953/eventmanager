import db from '$lib/server/db.js';
import { fail } from '@sveltejs/kit';


export async function load() {
  const events = await db.getEvents();
  return { events };
}

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();
    const name = data.get('name');
    const email = data.get('email');
    const eventId = data.get('eventId');

    if (!name || !email || !eventId || !/^[a-f\d]{24}$/.test(eventId)) {
      return fail(400, { error: 'Ungültige Eingabedaten' });
    }

    const event = await db.getEventById(eventId);

    const attendee = {
      name,
      email,
      eventId,
      eventTitle: event ? event.title : 'Unbekannt'
    };

    await db.createAttendee(attendee);
    return { success: true };
  }
};
