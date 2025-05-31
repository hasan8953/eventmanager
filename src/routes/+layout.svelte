<script>
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props();
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
  <div class="container">
    <a class="navbar-brand" href="/">EventManager</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="/events">Events</a></li>
        <li class="nav-item">
          <a class="nav-link" href="/events/create">Neues Event</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/attendees">Teilnehmende</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/attendees/create">Teilnahme erfassen</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<main class="container">
  {@render children?.()}
</main>
