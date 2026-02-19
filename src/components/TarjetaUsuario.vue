
<template>

<div>

    <h2>{{ props.nombre }}</h2>
    <p>Contador: {{ props.contador }}</p>
    <button @click="emit('reset')">Reset</button>
</div>

</template>

<script setup>
const props = defineProps({

    nombre: String,
    contador: Number
})

const emit = defineEmits(['reset'])

</script>