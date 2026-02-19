<template>
  <div>
    <h3 class="text-center">Asistencia de {{ props.nombre }}</h3>
    <p class="contador">N° de ingresos: {{ props.contador }}</p>
    <button @click="emit('incrementar')">Ingreso</button>
    <button @click="emit('reset')">Reiniciar</button>
  </div>
</template>

<script setup>
const props = defineProps({
  nombre: String,
  contador: Number,
})
const emit = defineEmits(['incrementar', 'reset'])
</script>

<style scoped>
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
