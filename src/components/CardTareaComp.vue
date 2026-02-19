<template>
  <div class="card text-bg-primary mb-3 mx-auto" style="max-width: 18rem">
    <div class="card-header">{{ tarea.responsable }}</div>
    <div class="card-body">
      <h5 class="card-title">{{ tarea.titulo }}</h5>
      <p class="card-text">{{ tarea.descripcion }}</p>

      <div>
        <button class="btn btn-danger" @click="eliminarTarea(tarea.id, tarea.titulo)">
          Eliminar
        </button>
      </div>
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

<style scoped lang="css"></style>
