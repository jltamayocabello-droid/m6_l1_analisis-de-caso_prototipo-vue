<template>
  <div class="tarjeta">
    <!-- Botón de ingreso siempre visible si hay nombre -->
    <button v-if="props.nombre" class="btn-ingreso" @click="emit('incrementar')">Ingreso</button>

    <p v-if="!props.nombre" class="aviso">Ingresa tu nombre para registrar tu acceso.</p>

    <!-- Tarjeta de resumen: solo visible después del primer ingreso -->
    <div v-if="props.contador > 0" class="resumen">
      <div class="resumen-header">
        <span class="resumen-badge">✓ Acceso registrado</span>
        <span class="hora">{{ props.horaIngreso }}</span>
      </div>

      <h3 class="bienvenida">
        Bienvenido, <strong>{{ props.nombre }}</strong>
      </h3>

      <div class="contador-box">
        <span class="contador-label">Ingresos registrados hoy</span>
        <span class="contador-numero" :key="props.contador">{{ props.contador }}</span>
      </div>

      <button class="btn-reset" @click="emit('reset')">Reiniciar registro</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  nombre: String,
  contador: Number,
  horaIngreso: String,
})
const emit = defineEmits(['incrementar', 'reset'])
</script>

<style scoped>
.tarjeta {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* --- Botón principal CTA --- */
.btn-ingreso {
  width: 100%;
  padding: 0.85rem 1.2rem;
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
  letter-spacing: 0.02em;
  transition:
    background 0.2s,
    border-color 0.2s,
    box-shadow 0.2s,
    transform 0.1s;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.5);
}

.btn-ingreso:hover {
  background: rgba(51, 65, 85, 0.97);
  border-color: rgba(71, 85, 105, 0.9);
  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.6);
}

.btn-ingreso:active {
  background: rgba(51, 65, 85, 1);
  border-color: rgba(71, 85, 105, 1);
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.2);
  transform: scale(0.97);
}

/* --- Aviso sin nombre --- */
.aviso {
  text-align: center;
  color: var(--ft-muted);
  font-size: 0.875rem;
  padding: 0.5rem 0;
}

/* --- Tarjeta de resumen --- */
.resumen {
  background: var(--ft-surface-2);
  border: 1px solid var(--ft-border);
  border-left: 3px solid var(--ft-accent);
  border-radius: 10px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.resumen-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.resumen-badge {
  font-size: 0.75rem;
  color: var(--ft-accent);
  font-weight: 600;
  background: var(--ft-accent-soft);
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  letter-spacing: 0.03em;
}

.hora {
  font-size: 0.8rem;
  color: var(--ft-muted);
  font-variant-numeric: tabular-nums;
}

.bienvenida {
  font-size: 1rem;
  color: var(--ft-text);
  font-weight: 400;
}

.bienvenida strong {
  color: var(--ft-accent);
  font-weight: 700;
}

/* --- Contador animado --- */
.contador-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--ft-surface);
  border: 1px solid var(--ft-border);
  border-radius: 8px;
  padding: 0.65rem 1rem;
}

.contador-label {
  font-size: 0.85rem;
  color: var(--ft-muted);
}

.contador-numero {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--ft-accent);
  font-variant-numeric: tabular-nums;
  animation: pop 0.2s ease;
}

@keyframes pop {
  0% {
    transform: scale(1.4);
    opacity: 0.6;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* --- Botón ghost reset --- */
.btn-reset {
  align-self: flex-end;
  background: transparent;
  color: var(--ft-muted);
  border: 1px solid var(--ft-border);
  border-radius: 6px;
  padding: 0.3rem 0.75rem;
  font-size: 0.8rem;
  cursor: pointer;
  transition:
    color 0.2s,
    border-color 0.2s,
    background 0.2s;
}

.btn-reset:hover {
  color: var(--ft-danger);
  border-color: var(--ft-danger);
  background: rgba(244, 63, 94, 0.08);
}
</style>
