import db from '$lib/server/db.js';
import { error, redirect } from '@sveltejs/kit';

export async function load({ params }) {
  const event = await db.getEventById(params.id);
  const attendees = await db.getAttendeesByEventId(params.id);

  if (!event) {
    throw error(404, 'Event not found');
  }

  return { event, attendees };
}

export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();
    const id = data.get('id');
    await db.deleteEvent(id);
    throw redirect(303, '/events');
  },

  deleteAttendee: async ({ request }) => {
    const data = await request.formData();
    const id = data.get('id');
    const eventId = data.get('eventId');
    await db.deleteAttendee(id);
    throw redirect(303, `/events/${eventId}`);
  }
};
