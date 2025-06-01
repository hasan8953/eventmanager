<script>
  const year = $state(new Date().getFullYear());
</script>

<h1 class="mb-4 text-center">Über den EventManager</h1>

<div class="card shadow-sm p-4">
  <h5 class="card-title">Was ist der EventManager?</h5>
  <p class="card-text">
    Der EventManager ist eine Webanwendung, die es ermöglicht, Veranstaltungen
    effizient zu verwalten. User können Events erstellen, eine
    Teilnehmerliste führen und Events bei Bedarf aktualisieren oder löschen.
  </p>

  <h5 class="card-title mt-4">Funktionen</h5>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Erstellen neuer Events</li>
    <li class="list-group-item">Teilnehmer erfassen und verwalten</li>
    <li class="list-group-item">Dynamische Such- und Sortierfunktionen</li>
    <li class="list-group-item">
      Verwaltung über eine intuitive Benutzeroberfläche
    </li>
  </ul>

  <h5 class="card-title mt-4">Technologien</h5>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">SvelteKit 5 (Runes Mode)</li>
    <li class="list-group-item">MongoDB</li>
    <li class="list-group-item">Bootstrap 5 für das Styling</li>
    <li class="list-group-item">Netlify Deployment</li>
  </ul>

  <div class="mt-4">
    <p class="text-muted text-end">
      © {year} Hasan Nazim Cengiz
    </p>
    <a class="btn btn-primary" href="/events">Zurück zu den Events</a>
  </div>
</div>
