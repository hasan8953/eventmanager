import db from '$lib/server/db.js';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();
    const title = data.get('title');
    const location = data.get('location');
    const date = data.get('date');
    const description = data.get('description');
    const maxParticipants = parseInt(data.get('maxParticipants'), 10);


    if (!title || !location || !date || !description || isNaN(maxParticipants) || maxParticipants <= 0) {
      return fail(400, { error: 'Ungültige Eingabedaten' });
    }

    const event = { title, location, date, description, maxParticipants };

    await db.createEvent(event);
    return { success: true };
  }
};
