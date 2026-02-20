<template>
  <div class="card-tarea">
    <div class="card-header">
      <span class="responsable-badge">{{ tarea.responsable }}</span>
    </div>
    <div class="card-body">
      <h5 class="card-titulo">{{ tarea.titulo }}</h5>
      <p class="card-desc">{{ tarea.descripcion }}</p>
      <button class="btn-eliminar" @click="eliminarTarea(tarea.id, tarea.titulo)">
        ✕ Eliminar
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  tarea: Object,
})
const emit = defineEmits(['eliminar'])

const eliminarTarea = (id, titulo) => {
  let confirmacion = confirm(`¿Está seguro que desea eliminar la tarea ${titulo}?\nID: ${id}`)
  if (confirmacion) {
    emit('eliminar', id)
  }
}
</script>

<style scoped>
.card-tarea {
  background: var(--ft-surface);
  border: 1px solid var(--ft-border);
  border-top: 3px solid var(--ft-accent);
  border-radius: 10px;
  width: 280px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.card-tarea:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
}

.card-header {
  background: var(--ft-surface-2);
  padding: 0.6rem 1rem;
  border-bottom: 1px solid var(--ft-border);
}

.responsable-badge {
  font-size: 0.78rem;
  color: var(--ft-accent);
  font-weight: 600;
  letter-spacing: 0.03em;
}

.card-body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card-titulo {
  font-size: 1rem;
  font-weight: 700;
  color: var(--ft-text);
}

.card-desc {
  font-size: 0.875rem;
  color: var(--ft-muted);
  line-height: 1.5;
  flex: 1;
}

.btn-eliminar {
  align-self: flex-end;
  margin-top: 0.5rem;
  padding: 0.35rem 0.8rem;
  background: transparent;
  color: var(--ft-danger);
  border: 1px solid var(--ft-danger);
  border-radius: 6px;
  font-size: 0.8rem;
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s;
}

.btn-eliminar:hover {
  background: var(--ft-danger);
  color: #fff;
}
</style>
