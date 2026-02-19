<template>
  <header>
    <h1 class="text-center py-3">Prototipo Front Tech</h1>
  </header>

  <main class="container">
    <section>
      <div class="row justify-content-center">
        <div class="col-12 col-md-6">
          <form @submit.prevent="crearTarea">
            <div class="mb-3">
              <label for="form-label">Titulo</label>
              <input type="text" class="form-control" required v-model="titulo" />
            </div>

            <div class="mb-3">
              <label for="form-label">Desripción</label>
              <textarea class="form-control" required v-model="descripcion"></textarea>
            </div>

            <div class="mb-3">
              <label for="form-label">Responsable</label>
              <input type="text" class="form-control" required v-model="responsable" />
            </div>

            <div>
              <button class="btn btn-primary">Crear Tarea</button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <div class="row py-3" v-if="tareas.length">
      <h2 class="text-center py-3">Listado de Tareas</h2>

      <div class="col-12 col-md-4 col-lg-3" v-for="(tarea, index) in tareas" :key="index">
        <CardTareaComp :tarea="tarea" @eliminar="eliminarTarea" />
      </div>
    </div>
  </main>
  <div>
    <PerfilUsuario />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CardTareaComp from './components/CardTareaComp.vue'
import { v4 as uuidv4 } from 'uuid'

const tareas = ref([])
const titulo = ref('')
const descripcion = ref('')
const responsable = ref('')

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
  tareas.value = tareas.value.filter((tarea) => tarea.id != id)
  alert('Tarea eliminada con éxito.')
}

const resetForm = () => {
  titulo.value = ''
  descripcion.value = ''
  responsable.value = ''
}

import PerfilUsuario from './components/PerfilUsuario.vue'
</script>

<style scoped lang="css">
.card.tarea {
  border: 1px solid black;
  padding: 1rem;
  margin: 1rem;
}
</style>
