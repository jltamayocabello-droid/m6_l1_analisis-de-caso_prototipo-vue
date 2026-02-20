<template>
  <section class="login-wrapper">
    <div class="login-card">
      <!-- Logo / Header -->
      <div class="login-header">
        <div class="logo-circle">⬡</div>
        <h1 class="login-title">FrontTech</h1>
        <p class="login-subtitle">Sistema de acceso</p>
      </div>

      <!-- Input -->
      <div class="field">
        <label class="field-label" for="nombre">Nombre de Usuario</label>
        <input
          id="nombre"
          class="field-input"
          v-model="nombre"
          placeholder="Escribe tu nombre..."
          autocomplete="off"
        />
      </div>

      <!-- Tarjeta de ingreso -->
      <TarjetaUsuario
        :nombre="nombre"
        :contador="contador"
        :hora-ingreso="horaIngreso"
        @incrementar="registrarIngreso"
        @reset="resetContador"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import TarjetaUsuario from '../components/TarjetaUsuario.vue'

const nombre = ref(localStorage.getItem('nombre') || '')
const contador = ref(0)
const horaIngreso = ref('')

watch(nombre, (nuevoNombre) => {
  localStorage.setItem('nombre', nuevoNombre)
})

function registrarIngreso() {
  contador.value++
  const ahora = new Date()
  horaIngreso.value = ahora.toLocaleTimeString('es-CL', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}

function resetContador() {
  contador.value = 0
  horaIngreso.value = ''
}
</script>

<style scoped>
.login-wrapper {
  min-height: calc(100vh - 3.5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
}

.login-card {
  background: var(--ft-surface);
  border: 1px solid var(--ft-border);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.login-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.logo-circle {
  width: 3.5rem;
  height: 3.5rem;
  background: var(--ft-accent-soft);
  border: 2px solid var(--ft-accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  color: var(--ft-accent);
  margin-bottom: 0.25rem;
}

.login-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--ft-text);
  letter-spacing: 0.02em;
}

.login-subtitle {
  font-size: 0.875rem;
  color: var(--ft-muted);
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
  font-size: 1rem;
  outline: none;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
  width: 100%;
}

.field-input::placeholder {
  color: var(--ft-muted);
  opacity: 0.6;
}

.field-input:focus {
  border-color: var(--ft-accent);
  box-shadow: 0 0 0 3px var(--ft-accent-soft);
}
</style>
