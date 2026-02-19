<template>
  <header class="py-3">
    <h1 class="text-center">Prototipo Front Tech</h1>
  </header>
  <main class="container">
    <section>
      <div class="row justify-content-center">
        <div class="col-12 col-md-6">
          <form @submit.prevent="crearTarea">
            <div class="mb-3">
              <label for="" class="form-label">Titulo</label>
              <input type="text" class="form-control" required v-model="titulo" />
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Descripción</label>
              <textarea class="form-control" required v-model="descripcion"></textarea>
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Responsable</label>
              <input type="text" class="form-control" required v-model="responsable" />
            </div>
            <div>
              <button class="btn btn-primary">Crear tarea</button>
            </div>
          </form>
        </div>
      </div>
    </section>
    <div class="row py-3" v-if="tareas.length">
      <h3 class="text-center">Listado de Tareas</h3>
      <div class="col-12 col-md-4 col-lg-3" style="mx-width" v-for="(tarea, index) in tareas" :key="index">
        <CardTareaComp />
      </div>
    </div>
  </main>
  <div>
    <PerfilUsuario />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tareas = ref([])

const titulo = ref('')
const descripcion = ref('')
const responsable = ref('')

const resetForm = () => {
  titulo.value = ''
  descripcion.value = ''
  responsable.value = ''
}

tareas.value.push({})
resetForm()

const crearTarea = () => {
  const nuevaTarea = {
    titulo: titulo.value,
    descripcion: descripcion.value,
    responsable: responsable.value,
  }

  tareas.value.push(nuevaTarea)
}

import PerfilUsuario from './components/PerfilUsuario.vue'
import CardTareaComp from './components/CardTareaComp.vue'
</script>

<style scoped lang="css">
.card.tarea {
  border: 1px solid black;
  padding: 1rem;
  margin: 1rem;
}
</style>
