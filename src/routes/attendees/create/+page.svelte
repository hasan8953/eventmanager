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

<h1 class="mb-4 text-center">Teilnahme erfassen</h1>

{#if showSuccess}
  <div class="alert alert-success" role="alert">
    Teilnahme wurde erfolgreich erfasst!
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
    <label class="form-label fw-bold">Name</label>
    <input
      type="text"
      class="form-control"
      name="name"
      required
      minlength="2"
      maxlength="100"
    />
  </div>

  <div class="col-md-6">
    <label class="form-label fw-bold">E-Mail</label>
    <input type="email" class="form-control" name="email" required />
  </div>

  <div class="col-12">
    <label class="form-label fw-bold">Event auswählen</label>
    <select name="eventId" class="form-select" required>
      <option value="" disabled selected>Bitte Event wählen...</option>
      {#each data.events as event}
        <option value={event._id}>{event.title}</option>
      {/each}
    </select>
  </div>

  <div class="col-12 text-end">
    <button type="submit" class="btn btn-outline-success"
      >Teilnahme speichern</button
    >
  </div>
</form>
