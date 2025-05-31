<script>
  let { data } = $props();
</script>

<h1 class="mb-4 text-center">{data.event.title}</h1>

<div class="card shadow-sm mb-5">
  <div class="card-body">
    <h5 class="card-title">{data.event.location}</h5>
    <h6 class="card-subtitle mb-3 text-muted">
      {new Date(data.event.date).toLocaleDateString()}
    </h6>
    <p class="card-text">{data.event.description}</p>
    <p class="card-text">
      <strong>Max. Teilnehmer:</strong>
      {data.event.maxParticipants}
    </p>

    <div class="d-flex justify-content-between mt-4">
      <a href="/events" class="btn btn-outline-secondary">Zurück</a>
      <div class="d-flex">
        <a
          href={`/events/${data.event._id}/edit`}
          class="btn btn-outline-warning me-2"
        >
          Event bearbeiten
        </a>
        <form method="POST" action="?/delete" class="m-0">
          <input type="hidden" name="id" value={data.event._id} />
          <button type="submit" class="btn btn-outline-danger">
            Event löschen
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

<h2 class="mb-4">Teilnehmende</h2>

{#if data.attendees.length > 0}
  <ul class="list-group shadow-sm">
    {#each data.attendees as attendee}
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <div>
          <strong>{attendee.name}</strong> <br />
          <small class="text-muted">{attendee.email}</small>
        </div>
        <form method="POST" action="?/deleteAttendee" style="margin: 0;">
          <input type="hidden" name="id" value={attendee._id} />
          <input type="hidden" name="eventId" value={data.event._id} />
          <button type="submit" class="btn btn-sm btn-outline-danger"
            >Löschen</button
          >
        </form>
      </li>
    {/each}
  </ul>
{:else}
  <p>Keine Teilnehmenden bisher.</p>
{/if}
