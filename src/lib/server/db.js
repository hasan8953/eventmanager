import { MongoClient, ObjectId } from 'mongodb';
import { DB_URI } from '$env/static/private';

const client = new MongoClient(DB_URI);
await client.connect();
const db = client.db('eventmanager'); 


async function getEvents() {
  const collection = db.collection('events');
  const events = await collection.find({}).toArray();
  events.forEach(event => {
    event._id = event._id.toString(); 
  });
  return events;
}


async function getEventById(id) {
  const collection = db.collection('events');
  const event = await collection.findOne({ _id: new ObjectId(id) });
  if (event) {
    event._id = event._id.toString();
  }
  return event;
}



async function createEvent(event) {
  const collection = db.collection('events');
  return await collection.insertOne(event);
}


async function createAttendee(attendee) {
  const collection = db.collection('attendees');
  return await collection.insertOne(attendee);
}

async function getAttendeesByEventId(eventId) {
  const collection = db.collection('attendees');
  const attendees = await collection.find({ eventId: eventId }).toArray();
  attendees.forEach(attendee => {
    attendee._id = attendee._id.toString();  
  });
  return attendees;
}

async function deleteEvent(id) {
  const collection = db.collection('events');
  return await collection.deleteOne({ _id: new ObjectId(id) });
}

async function deleteAttendee(id) {
  const collection = db.collection('attendees');
  return await collection.deleteOne({ _id: new ObjectId(id) });
}

async function updateEvent(id, updatedData) {
  const collection = db.collection('events');
  return await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: updatedData }
  );
}

async function getAllAttendees() {
  const collection = db.collection('attendees');
  const attendees = await collection.find({}).toArray();
  attendees.forEach(attendee => {
    attendee._id = attendee._id.toString();
  });
  return attendees;
}





export default {
  getEvents,
  getEventById,
  createEvent,
  createAttendee,
  getAttendeesByEventId,
  getAllAttendees,
  deleteEvent,
  deleteAttendee,
  updateEvent
};


