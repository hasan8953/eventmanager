<script>
  import { enhance } from "$app/forms";
  import { run } from "svelte/legacy";

  let { data, form } = $props();

  let showSuccess = $state(false);

  run(() => {
    if (form?.success) {
      showSuccess = true;
      setTimeout(() => {
        showSuccess = false;
      }, 3000);
    }
  });
</script>

<h1 class="mb-4 text-center">Neues Event erstellen</h1>

{#if showSuccess}
  <div class="alert alert-success" role="alert">
    Event wurde erfolgreich erstellt!
  </div>
{/if}

{#if form?.error}
  <div class="alert alert-danger" role="alert">
    {form.error}
  </div>
{/if}

<form
  method="POST"
  action="?/create"
  use:enhance
  class="row g-3 shadow-sm p-4 rounded bg-light needs-validation"
  novalidate
>
  <div class="col-md-6">
    <label class="form-label fw-bold">Titel</label>
    <input
      type="text"
      class="form-control"
      name="title"
      required
      minlength="3"
      maxlength="100"
    />
  </div>

  <div class="col-md-6">
    <label class="form-label fw-bold">Ort</label>
    <input
      type="text"
      class="form-control"
      name="location"
      required
      minlength="2"
      maxlength="100"
    />
  </div>

  <div class="col-md-6">
    <label class="form-label fw-bold">Datum</label>
    <input type="date" class="form-control" name="date" required />
  </div>

  <div class="col-md-6">
    <label class="form-label fw-bold">Max. Teilnehmer</label>
    <input
      type="number"
      class="form-control"
      name="maxParticipants"
      required
      min="1"
      max="1000"
    />
  </div>

  <div class="col-12">
    <label class="form-label fw-bold">Beschreibung</label>
    <textarea
      class="form-control"
      name="description"
      rows="4"
      required
      minlength="10"
      maxlength="500"
    ></textarea>
  </div>

  <div class="col-12 text-end">
    <button type="submit" class="btn btn-outline-success"
      >Event speichern</button
    >
  </div>
</form>
