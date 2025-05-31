<script>
  let { data } = $props();
</script>

<h1 class="mb-4 text-center">Event bearbeiten</h1>

<form
  method="POST"
  action="?/update"
  class="row g-3 shadow-sm p-4 rounded bg-light"
>
  <div class="col-md-6">
    <label class="form-label fw-bold">Titel</label>
    <input
      type="text"
      class="form-control"
      name="title"
      required
      value={data.event.title}
    />
  </div>

  <div class="col-md-6">
    <label class="form-label fw-bold">Ort</label>
    <input
      type="text"
      class="form-control"
      name="location"
      required
      value={data.event.location}
    />
  </div>

  <div class="col-md-6">
    <label class="form-label fw-bold">Datum</label>
    <input
      type="date"
      class="form-control"
      name="date"
      required
      value={data.event.date.substring(0, 10)}
    />
  </div>

  <div class="col-md-6">
    <label class="form-label fw-bold">Max. Teilnehmer</label>
    <input
      type="number"
      class="form-control"
      name="maxParticipants"
      required
      value={data.event.maxParticipants}
    />
  </div>

  <div class="col-12">
    <label class="form-label fw-bold">Beschreibung</label>
    <textarea class="form-control" name="description" rows="4" required
      >{data.event.description}</textarea
    >
  </div>

  <div class="col-12 text-end">
    <button type="submit" class="btn btn-outline-primary"
      >Event speichern</button
    >
  </div>
</form>
