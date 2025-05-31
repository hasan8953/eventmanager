<script>
  let { data } = $props();

  let eventTitleFilter = $state("");

  let filteredAttendees = $derived(
    eventTitleFilter
      ? data.attendees.filter((a) =>
          a.eventTitle.toLowerCase().includes(eventTitleFilter.toLowerCase()),
        )
      : data.attendees,
  );
</script>

<h1 class="mb-4 text-center">Teilnehmende Übersicht</h1>

<div class="mb-4">
  <input
    type="text"
    class="form-control"
    placeholder="Filtern nach Event Titel..."
    bind:value={eventTitleFilter}
  />
</div>

<table class="table table-hover align-middle shadow-sm rounded">
  <thead class="table-primary">
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Event Titel</th>
    </tr>
  </thead>
  <tbody>
    {#if filteredAttendees.length > 0}
      {#each filteredAttendees as attendee}
        <tr>
          <td>{attendee.name}</td>
          <td>{attendee.email}</td>
          <td>{attendee.eventTitle}</td>
        </tr>
      {/each}
    {:else}
      <tr>
        <td colspan="3" class="text-center text-muted"
          >Keine Teilnehmenden gefunden.</td
        >
      </tr>
    {/if}
  </tbody>
</table>
