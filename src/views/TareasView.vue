<template>
  <div class="tareas-page">
    <h2 class="page-title">Agregar Tareas</h2>

    <section class="form-section">
      <div class="form-card">
        <form @submit.prevent="crearTarea">
          <div class="field">
            <label class="field-label" for="titulo">Título</label>
            <input
              id="titulo"
              type="text"
              class="field-input"
              required
              v-model="titulo"
              placeholder="Título de la tarea"
            />
          </div>

          <div class="field">
            <label class="field-label" for="descripcion">Descripción</label>
            <textarea
              id="descripcion"
              class="field-input field-textarea"
              required
              v-model="descripcion"
              placeholder="Describe la tarea..."
            ></textarea>
          </div>

          <div class="field">
            <label class="field-label" for="responsable">Responsable</label>
            <input
              id="responsable"
              type="text"
              class="field-input"
              required
              v-model="responsable"
              placeholder="Nombre del responsable"
            />
          </div>

          <button type="submit" class="btn-crear"><span>＋</span> Agregar tarea</button>
        </form>
      </div>
    </section>

    <!-- Listado de tareas -->
    <div v-if="tareas.length" class="listado">
      <h2 class="page-title">Listado de Tareas</h2>
      <div class="cards-grid">
        <CardTareaComp
          v-for="(tarea, index) in tareas"
          :key="index"
          :tarea="tarea"
          @eliminar="eliminarTarea"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CardTareaComp from '../components/CardTareaComp.vue'
import { v4 as uuidv4 } from 'uuid'

const tareas = ref([])
const titulo = ref('')
const descripcion = ref('')
const responsable = ref(localStorage.getItem('nombre') || '')

const crearTarea = () => {
  const nuevaTarea = {
    id: uuidv4(),
    titulo: titulo.value,
    descripcion: descripcion.value,
    responsable: responsable.value,
  }
  tareas.value.push(nuevaTarea)
  resetForm()
}

const eliminarTarea = (id) => {
  tareas.value = tareas.value.filter((tarea) => tarea.id !== id)
  alert('Tarea eliminada con éxito.')
}

const resetForm = () => {
  titulo.value = ''
  descripcion.value = ''
  responsable.value = ''
}
</script>

<style scoped>
.tareas-page {
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.page-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--ft-text);
  text-align: center;
  letter-spacing: 0.01em;
}

/* --- Formulario --- */
.form-section {
  display: flex;
  justify-content: center;
}

.form-card {
  background: var(--ft-surface);
  border: 1px solid var(--ft-border);
  border-radius: 14px;
  padding: 2rem;
  width: 100%;
  max-width: 480px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.field-label {
  font-size: 0.85rem;
  color: var(--ft-muted);
  font-weight: 500;
  letter-spacing: 0.03em;
}

.field-input {
  background: var(--ft-surface-2);
  border: 1px solid var(--ft-border);
  border-radius: 8px;
  padding: 0.65rem 0.9rem;
  color: var(--ft-text);
  font-size: 0.95rem;
  outline: none;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
  width: 100%;
  font-family: inherit;
}

.field-input::placeholder {
  color: var(--ft-muted);
  opacity: 0.6;
}

.field-input:focus {
  border-color: var(--ft-accent);
  box-shadow: 0 0 0 3px var(--ft-accent-soft);
}

.field-textarea {
  resize: vertical;
  min-height: 90px;
}

.btn-crear {
  width: 100%;
  padding: 0.8rem 1.2rem;
  background: rgba(51, 65, 85, 0.9);
  color: #fff;
  border: 1px solid rgba(71, 85, 105, 0.8);
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  transition:
    background 0.2s,
    border-color 0.2s,
    box-shadow 0.2s,
    transform 0.1s;
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.5);
}

.btn-crear:hover {
  background: rgba(51, 65, 85, 0.97);
  border-color: rgba(71, 85, 105, 0.9);
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.6);
}

.btn-crear:active {
  background: rgba(51, 65, 85, 1);
  border-color: rgba(71, 85, 105, 1);
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.2);
  transform: scale(0.97);
}

/* --- Grid de cards --- */
.cards-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
</style>
