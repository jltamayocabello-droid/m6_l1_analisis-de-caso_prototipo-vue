<template>
  <div class="perfil">
    <!-- BINDING BIDIRECCIONAL -->

    <div class="campo">
        <h2 class="text-center">Bienvenido al prototipo de prueba de Vue.js</h2>
      <label for="nombre"> Introduzca su nombre </label>
      <input id="nombre" v-model="nombre" placeholder="Escribe tu nombre..." />
    </div>

    <!--BINDING UNIDIRECCIONAL-->

    <!-- TARJETA USUARIO -->

    <div>
        <TarjetaUsuario :nombre="nombre" :contador="contador" @reset="resetContador" />
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import TarjetaUsuario from './TarjetaUsuario.vue'

const nombre = ref('Usuario')
const contador = ref(0)

// function incrementar() {
//  contador.value++
// }

// Reset Contador
function resetContador() {
  contador.value = 0
}



</script>

<style scoped>
.perfil {
  font-family: sans-serif;
  max-width: 400px;
  margin: 2rem auto;
  padding: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.campo {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.3rem;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #aaa;
  border-radius: 6px;
  font-size: 1rem;
}


</style>
