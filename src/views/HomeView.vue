<template>
  <section class="row justify-content-center py-4">
    <div class="campo col-12 col-md-6">
      <h2 class="text-center">Bienvenido</h2>
      <label for="nombre">Nombre de Usuario</label>
      <input id="nombre" class="form-control" v-model="nombre" placeholder="Escribe tu nombre..." />

      <TarjetaUsuario
        :nombre="nombre"
        :contador="contador"
        @incrementar="contador++"
        @reset="contador = 0"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import TarjetaUsuario from '../components/TarjetaUsuario.vue'

const nombre = ref(localStorage.getItem('nombre') || '')
const contador = ref(0)

watch(nombre, (nuevoNombre) => {
  localStorage.setItem('nombre', nuevoNombre)
})
</script>