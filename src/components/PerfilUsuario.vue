<template>
  <div class="perfil">
    <!-- BINDING BIDIRECCIONAL -->

    

    <div class="campo">
        <h2 class="text-center">Bienvenido al prototipo de prueba de Vue.js</h2>
      <label for="nombre"> Introduzca su nombre </label>
      <input id="nombre" v-model="nombre" placeholder="Escribe tu nombre..." />
    </div>

    <!--BINDING UNIDIRECCIONAL-->

    

    <!--CONTADOR-->
    <div>
        <h2 class="text-center">Contador</h2>
      <p class="contador">Contador: {{ contador }}</p>
      <button @click="incrementar">Incrementar</button>
    </div>

    <!-- TARJETA USUARIO -->

    <div>
        <h2 class="text-center">TarjetaUsuario</h2>
        <TarjetaUsuario :nombre="nombre" :contador="contador" @reset="resetContador" />
    </div>




  </div>
</template>

<script setup>
import { ref } from 'vue'
import TarjetaUsuario from './TarjetaUsuario.vue'

// Equivale a data()
const nombre = ref('Usuario')
const contador = ref(0)

// Equivale a methods
function incrementar() {
  contador.value++
}

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

.contador {
  font-size: 1.2rem;
  margin: 1rem 0 0.5rem;
}

button {
  padding: 0.5rem 1.2rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #2563eb;
}
</style>
