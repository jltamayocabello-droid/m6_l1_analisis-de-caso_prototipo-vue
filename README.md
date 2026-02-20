# 📝 PROYECTO ABP M6: FrontTech Prototipo Vue

![Estado del Proyecto](https://img.shields.io/badge/Estado-Finalizado-yellow)
![Stack](https://img.shields.io/badge/Stack-Vue.js_3_%7C_Vue_Router_%7C_CSS-blue)

---

## 📖 Descripción del Proyecto

**Unidad solicitante:** FrontTech — Departamento de Desarrollo Frontend

Una empresa de desarrollo llamada FrontTech ha decidido renovar el frontend de su sistema de reservas en línea adoptando **Vue.js** como framework principal. Como parte de la fase de adopción, se desarrolla un prototipo interactivo que evalúa la estructura de componentes, la reactividad y la integración básica del framework.

Este prototipo es utilizado por el equipo técnico como referencia para evaluar si Vue.js cumple con los requisitos de escalabilidad y mantenibilidad de la empresa.

---

## 🎯 Objetivo

Implementar un prototipo con Vue.js 3 que demuestre:

- Uso de **componentes SFC** (Single File Components `.vue`)
- **Reactive data** y **binding** unidireccional y bidireccional (`v-model`)
- Comunicación entre componentes mediante **props** y **eventos personalizados** (`emit`)
- Integración de **Vue Router** para navegación entre vistas
- Buenas prácticas del patrón **MVVM**

---

## 🔍 Análisis Inicial

### ¿Qué ventajas ofrece Vue.js como framework progresivo frente a React y Angular?

El equipo de FrontTech necesita ordenar su código JavaScript puro. Se propone Vue.js porque, a diferencia de Angular (que exige adoptar toda su arquitectura de una vez) o React (que requiere configurar múltiples librerías externas), Vue puede integrarse gradualmente: comenzando con un simple CDN en el proyecto existente y escalando a una SPA completa cuando sea necesario.

Su enfoque se basa en el patrón **MVVM**: el _Model_ guarda los datos, la _View_ es el HTML visible, y el _ViewModel_ (la instancia Vue) los sincroniza automáticamente mediante reactividad. Esto elimina la manipulación manual del DOM y el "código espagueti" que hoy afecta a FrontTech.

Frente a otros frameworks, Vue destaca por tres ventajas clave:

- **Adopción gradual**: Se integra sin necesidad de reescribir el proyecto desde cero, algo que ni React ni Angular permiten con la misma facilidad.
- **Curva de aprendizaje suave**: Usa HTML estándar en sus plantillas, mucho más familiar que el JSX de React o el TypeScript obligatorio de Angular.
- **Ecosistema integrado**: Ofrece soluciones oficiales para enrutamiento (Vue Router) y manejo de estado (Pinia/Vuex), reduciendo la fatiga de tener que elegir y configurar librerías externas.

### ¿Por qué puede ser útil para un equipo que recién comienza a adoptar un framework basado en componentes?

Para un equipo que recién comienza con componentes, Vue es especialmente adecuado porque sus archivos `.vue` agrupan estructura, lógica y estilos en un solo lugar (**SFC — Single File Component**). Esta organización replica de forma ordenada lo que el equipo ya conoce en HTML/CSS/JS puro, facilitando la transición sin necesidad de aprender abstracciones complejas desde el inicio.

---

## 🛠️ Requerimientos Técnicos

Este proyecto cumple con los siguientes criterios del análisis de caso:

- ✅ **Componente Vue básico**: `TarjetaUsuario.vue` muestra nombre y contador de ingresos.
- ✅ **Binding bidireccional**: `v-model` en el campo de nombre de usuario.
- ✅ **Props y eventos**: `nombre`, `contador` y `horaIngreso` como props; `incrementar` y `reset` como emits.
- ✅ **Reutilización modular**: `CardTareaComp.vue` reutilizable por cada tarea creada.
- ✅ **Vue Router**: Navegación entre vista de Inicio y Lista de Tareas.
- ✅ **Persistencia**: `localStorage` para el nombre de usuario.
- ✅ **Patrón MVVM**: La lógica reactiva separa el Model (datos) del View (template).

---

## 📂 Documentación Técnica

### 1. Stack Tecnológico

- **Vue.js 3** (Composition API con `<script setup>`): Framework progresivo principal.
- **Vue Router 4**: Enrutamiento entre vistas SPA.
- **CSS Scoped**: Estilos encapsulados por componente, paleta dark navy/slate.
- **uuid**: Generación de IDs únicos para tareas.
- **LocalStorage API**: Persistencia del nombre de usuario.
- **Git/GitHub**: Control de versiones.

### 2. Estructura del Proyecto

```
m6_l1_analisis-de-caso/
│
├── index.html
├── README.md
├── jsconfig.json
├── vite.config.js
│
└── src/
    ├── main.js                   # Punto de entrada
    ├── App.vue                   # Componente raíz
    │
    ├── assets/
    │   ├── base.css              # Variables CSS (paleta dark navy/teal)
    │   └── main.css              # Estilos globales
    │
    ├── router/
    │   └── index.js              # Configuración de rutas
    │
    ├── views/
    │   ├── HomeView.vue          # Vista de acceso / registro de ingreso
    │   └── TareasView.vue        # Vista de gestión de tareas
    │
    └── components/
        ├── NavBar.vue            # Barra de navegación
        ├── TarjetaUsuario.vue    # Tarjeta de bienvenida con contador
        └── CardTareaComp.vue     # Tarjeta individual de tarea
```

### 3. Arquitectura de Componentes

#### Componente `TarjetaUsuario.vue`

```vue
<!-- Props recibidas -->
defineProps({ nombre: String, contador: Number, horaIngreso: String })

<!-- Eventos emitidos -->
defineEmits(['incrementar', 'reset'])
```

**Responsabilidades:**

- Mostrar el botón de ingreso (visible solo si hay nombre)
- Mostrar la tarjeta de resumen tras el primer ingreso (hora + contador animado)
- Emitir eventos al componente padre (`HomeView`)

#### Componente `CardTareaComp.vue`

```vue
defineProps({ tarea: Object }) defineEmits(['eliminar'])
```

**Responsabilidades:**

- Mostrar título, descripción y responsable de cada tarea
- Confirmar y emitir la eliminación de una tarea

### 4. Características Implementadas

#### 🔐 Sistema de Acceso

- Registro de ingreso con nombre de usuario y hora exacta
- Contador de ingresos del día con animación `pop`
- Persistencia del nombre en `localStorage`

#### 📋 Gestión de Tareas

- Formulario de creación con validación nativa (`required`)
- Listado dinámico de tareas con `v-for`
- Eliminación con confirmación del usuario

#### 🎨 Diseño Dark Navy/Slate

- Paleta de variables CSS consistente (`--ft-bg`, `--ft-surface`, `--ft-border`)
- Navbar sticky con link activo destacado
- Cards con hover de elevación y micro-animaciones

---

## 🚀 Cómo ejecutar este proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/jltamayocabello-droid/m6_l1_analisis-de-caso_prototipo-vue.git
cd m6_l1_analisis-de-caso_prototipo-vue
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar en modo desarrollo

```bash
npm run dev
```

### 4. Uso de la aplicación

1. Ingresa tu nombre en el campo de la vista **Inicio**
2. Presiona **"Ingreso"** para registrar tu acceso (se muestra la hora y el contador)
3. Navega a **"Lista de Tareas"** y crea tareas con título, descripción y responsable
4. Elimina tareas con el botón **"✕ Eliminar"** (pide confirmación)

---

## 🌐 Despliegue (Demo)

> Proyecto desplegado en GitHub Pages:  
> 🔗 [https://jltamayocabello-droid.github.io/m6_l1_analisis-de-caso_prototipo-vue/](https://jltamayocabello-droid.github.io/m6_l1_analisis-de-caso_prototipo-vue/)

---

## 📱 Funcionalidades Destacadas

| Funcionalidad          | Descripción                                             |
| ---------------------- | ------------------------------------------------------- |
| 🔐 Registro de Ingreso | Botón que registra hora exacta y cuenta accesos del día |
| 👤 Nombre persistente  | El nombre del usuario se guarda en `localStorage`       |
| 📋 Crear Tareas        | Formulario con validación y limpieza automática         |
| 🗑️ Eliminar Tareas     | Eliminación con diálogo de confirmación                 |
| 🧭 Navegación SPA      | Vue Router sin recarga de página                        |
| 🎨 Diseño Dark         | Paleta dark navy/slate cohesionada en toda la app       |

---

## 💡 Justificación de Decisiones Técnicas

### Composition API (`<script setup>`)

**Decisión**: Uso de `<script setup>` en lugar de Options API.

**Justificación**:

- **Mejor organización**: La lógica relacionada se agrupa junta, no separada por tipo de opción.
- **Reutilización**: Facilita la extracción de lógica a composables.
- **Estándar moderno**: Es la forma recomendada en Vue 3.

### Props + Emits vs Store global

**Decisión**: Comunicación directa padre-hijo con props/emits.

**Justificación**:

- **Simplicidad**: Para un prototipo de dos niveles de profundidad, un store global sería sobreingeniería.
- **Trazabilidad**: El flujo de datos es predecible y fácil de depurar.

### LocalStorage para persistencia

**Decisión**: Guardar el nombre de usuario en `localStorage`.

**Justificación**:

- **Sin backend**: No requiere servidor ni base de datos.
- **Experiencia de usuario**: El nombre persiste al recargar la página.

---

## 📊 Comparativa Vue vs React vs Angular

| Característica         | React          | Angular     | Vue               |
| ---------------------- | -------------- | ----------- | ----------------- |
| Lenguaje base          | JavaScript/JSX | TypeScript  | JavaScript        |
| Curva de aprendizaje   | Media          | Alta        | **Baja**          |
| Enrutamiento           | Externo        | Integrado   | **Integrado**     |
| Gestión de estado      | Externo        | Integrado   | **Integrado**     |
| Sintaxis de plantillas | JSX            | Decoradores | **HTML estándar** |
| Adopción gradual       | No             | No          | **Sí**            |

---

## 🤔 Reflexión

### ¿Qué desafíos podría enfrentar FrontTech al migrar a Vue.js desde un enfoque tradicional HTML+JS?

La transición desde HTML+JS puro implica un cambio de mentalidad más que de sintaxis. Los principales desafíos son:

- **Cambio de paradigma**: El equipo está acostumbrado a manipular el DOM directamente (`getElementById`, `innerHTML`). Vue exige pensar en _estado reactivo_ y dejar que el framework actualice el DOM automáticamente, lo que puede resultar contraintuitivo al inicio.
- **Herramientas de construcción**: Un proyecto Vue moderno requiere Node.js, npm y Vite (o webpack). Para un equipo que abría archivos `.html` directamente en el navegador, configurar un entorno de build representa una barrera de entrada.
- **Componentización**: Dividir una interfaz monolítica en componentes reutilizables requiere planificación. El equipo deberá aprender a definir correctamente las responsabilidades de cada componente y la comunicación entre ellos (props/emits).
- **Sistema de módulos (ESM)**: El paso de scripts globales a `import/export` puede generar errores difíciles de depurar al principio, especialmente en proyectos legados donde el scope global era la norma.
- **Curva de aprendizaje de la Composition API**: Aunque `<script setup>` es más conciso, conceptos como `ref`, `reactive` y los ciclos de vida (`onMounted`) pueden ser confusos para quienes vienen de JavaScript procedural.

A pesar de estos desafíos, la adopción gradual de Vue — comenzando por componentes simples e integrando Vue Router y Pinia solo cuando el proyecto lo justifique — minimiza el impacto y permite al equipo aprender sin detener el desarrollo.

### ¿Consideras que Vue.js puede escalar adecuadamente para un sistema más complejo? Justifica.

Sí. Vue.js está diseñado para escalar desde un componente aislado hasta una aplicación empresarial completa. Las razones son:

- **Ecosistema oficial robusto**: Vue Router para enrutamiento avanzado (rutas anidadas, guards de navegación, lazy loading) y Pinia para gestión de estado global escalable son soluciones mantenidas por el core team, lo que elimina la incertidumbre de elegir librerías de terceros.
- **Composables**: La Composition API permite extraer y reutilizar lógica compleja en funciones (`useUsuario`, `useTareas`), evitando la duplicación de código en proyectos grandes.
- **TypeScript nativo**: Vue 3 tiene soporte de primera clase para TypeScript, indispensable en equipos grandes que necesitan tipado estático para mantener la calidad del código.
- **Rendimiento**: Vue 3 implementa un Virtual DOM optimizado con compilación de plantillas en tiempo de build, lo que garantiza velocidad incluso en interfaces complejas.
- **Casos de uso reales**: Empresas como Alibaba, GitLab y Nintendo han utilizado Vue.js en producción para sistemas de gran escala, demostrando su capacidad real.

En conclusión, Vue.js puede escalar adecuadamente. La clave está en adoptar gradualmente sus herramientas a medida que la complejidad del sistema lo requiera, evitando sobreingeniería en etapas tempranas.

---

## 🧪 Testing Manual

Para verificar el correcto funcionamiento:

1. **Sin nombre**: El botón "Ingreso" no debe aparecer; solo el aviso.
2. **Con nombre → Ingreso**: Debe aparecer la tarjeta con badge, hora y contador = 1.
3. **Múltiples ingresos**: El contador anima con efecto `pop` en cada clic.
4. **Reiniciar**: El contador vuelve a 0 y la tarjeta de resumen desaparece.
5. **Recargar página**: El nombre debe persistir en el input.
6. **Crear tarea**: Debe aparecer en el listado con el nuevo diseño.
7. **Eliminar tarea**: Diálogo de confirmación → la tarea desaparece.
8. **Navegación**: Los links del navbar deben destacar el activo.

---

## 📚 Recursos y Referencias

- [Documentación oficial Vue.js 3](https://vuejs.org/)
- [Vue Router 4](https://router.vuejs.org/)
- [Composition API — `<script setup>`](https://vuejs.org/api/sfc-script-setup.html)
- [MDN — localStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
- [uuid (npm)](https://www.npmjs.com/package/uuid)

---

## ✒️ Autor

**Jorge Tamayo Cabello**

_Estudiante de Desarrollo Front-End Trainee — SENCE_

---

## 📄 Licencia

Este proyecto es parte de un trabajo académico para SENCE y está disponible con fines educativos.

---

## 🙏 Agradecimientos

- **SENCE** por la formación en desarrollo Front-End
- **Comunidad Vue.js** por la documentación clara y los ejemplos
- **Vite** por el tooling moderno y el HMR instantáneo
