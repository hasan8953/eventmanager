<script>
  let { data } = $props();

  let searchQuery = $state("");
  let sortField = $state("title");
  let sortDirection = $state("asc");

  let filteredEvents = $derived(
    data.events
      .filter(
        (event) =>
          event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.location.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      .sort((a, b) => {
        let fieldA = a[sortField];
        let fieldB = b[sortField];

        if (sortField === "date") {
          fieldA = new Date(fieldA);
          fieldB = new Date(fieldB);
        }

        if (fieldA < fieldB) return sortDirection === "asc" ? -1 : 1;
        if (fieldA > fieldB) return sortDirection === "asc" ? 1 : -1;
        return 0;
      }),
  );

  function toggleSort(field) {
    if (sortField === field) {
      sortDirection = sortDirection === "asc" ? "desc" : "asc";
    } else {
      sortField = field;
      sortDirection = "asc";
    }
  }
</script>

<h1 class="mb-4 text-center">Veranstaltungen</h1>

<div class="mb-4">
  <input
    type="text"
    class="form-control"
    placeholder="Suche nach Titel oder Ort..."
    bind:value={searchQuery}
  />
</div>

<table class="table table-hover align-middle shadow-sm rounded">
  <thead class="table-primary">
    <tr>
      <th onclick={() => toggleSort("title")} style="cursor: pointer;">
        Titel {sortField === "title"
          ? sortDirection === "asc"
            ? "▲"
            : "▼"
          : ""}
      </th>
      <th onclick={() => toggleSort("location")} style="cursor: pointer;">
        Ort {sortField === "location"
          ? sortDirection === "asc"
            ? "▲"
            : "▼"
          : ""}
      </th>
      <th onclick={() => toggleSort("date")} style="cursor: pointer;">
        Datum {sortField === "date"
          ? sortDirection === "asc"
            ? "▲"
            : "▼"
          : ""}
      </th>
      <th
        onclick={() => toggleSort("maxParticipants")}
        style="cursor: pointer;"
      >
        Max. Teilnehmer {sortField === "maxParticipants"
          ? sortDirection === "asc"
            ? "▲"
            : "▼"
          : ""}
      </th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    {#if filteredEvents.length > 0}
      {#each filteredEvents as event}
        <tr>
          <td>{event.title}</td>
          <td>{event.location}</td>
          <td>{new Date(event.date).toLocaleDateString()}</td>
          <td>{event.maxParticipants}</td>
          <td>
            <a
              class="btn btn-outline-primary btn-sm"
              href={`/events/${event._id}`}
            >
              Ansehen
            </a>
          </td>
        </tr>
      {/each}
    {:else}
      <tr>
        <td colspan="5" class="text-center text-muted"
          >Keine Events gefunden.</td
        >
      </tr>
    {/if}
  </tbody>
</table>
