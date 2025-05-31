import db from '$lib/server/db.js';
import { redirect, error } from '@sveltejs/kit';

export async function load({ params }) {
  const event = await db.getEventById(params.id);

  if (!event) {
    throw error(404, 'Event not found');
  }

  return { event };
}

export const actions = {
  update: async ({ request, params }) => {
    const data = await request.formData();
    const updatedEvent = {
      title: data.get('title'),
      location: data.get('location'),
      date: data.get('date'),
      description: data.get('description'),
      maxParticipants: parseInt(data.get('maxParticipants'))
    };
    await db.updateEvent(params.id, updatedEvent);
    throw redirect(303, `/events/${params.id}`);
  }
};
