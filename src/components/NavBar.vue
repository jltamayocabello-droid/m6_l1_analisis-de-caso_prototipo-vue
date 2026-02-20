<template>
  <nav class="navbar">
    <div class="nav-container">
      <span class="brand">
        <span class="brand-icon">⬡</span>
        FrontTech |
      </span>
      <div class="nav-links">
        <RouterLink class="nav-link" to="/"><strong>Inicio</strong></RouterLink>
        <RouterLink class="nav-link" to="/tareas"><strong>Lista de Tareas</strong></RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
.navbar {
  background: var(--ft-bg);
  border-bottom: 1px solid var(--ft-border);
  padding: 0 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(8px);
}

.nav-container {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.5rem;
}

.brand {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--ft-accent);
  letter-spacing: 0.04em;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.brand-icon {
  font-size: 1.4rem;
  line-height: 1;
}

.nav-links {
  display: flex;
  gap: 0.25rem;
}

.nav-link {
  color: var(--ft-muted);
  text-decoration: none;
  padding: 0.35rem 0.85rem;
  border-radius: 6px;
  font-size: 0.9rem;
  transition:
    color 0.2s,
    background 0.2s;
}

.nav-link:hover {
  color: var(--ft-text);
  background: var(--ft-accent-soft);
}

.nav-link.router-link-active {
  color: var(--ft-accent);
  background: var(--ft-accent-soft);
}
</style>
