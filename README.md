# Dashboard de Países - Entrega

> **Instrucciones:** Copia esta plantilla al README.md de tu proyecto y completa todas las secciones.

---

## Información del Candidato

- **Nombre:** [Symond Salazar]
- **Email:** [symond.salazar.silva.2005@gmail.com]
- **Fecha:** []

---

## Enlaces del Proyecto

| Tipo de Enlace | URL |
|----------------|-----|
| Repositorio de GitHub | [https://github.com/SymondSalazar/COUNTRIES-DASHBOARD] |
| Video de Loom | [https://www.loom.com/share/...] |
| Demo en Vivo (si está desplegado) | [https://countries-dashboard-r11nnf85e-symond-salazar-s-projects.vercel.app/] |

---

## Instrucciones de Configuración

```bash
# Clonar el repositorio
git clone [https://github.com/SymondSalazar/COUNTRIES-DASHBOARD.git]
cd [COUNTRIES_DASHBOARD]

# Instalar dependencias
npm install

# Ejecutar el servidor de desarrollo
npm run dev
# O
npm start

# Abrir en el navegador
# http://localhost:5173 (Vite) o http://localhost:3000 (CRA)
```

---

## Tecnologías Utilizadas

- [✅] React (versión: 19.2.6)
- [✅] Vite 
- [✅ ] Tailwind 
- [✅] React router

---

## Características Implementadas

### Características Principales

| Característica | Estado | Notas |
|----------------|--------|-------|
| Lista de Países | ✅ | |
| Funcionalidad de Búsqueda | ✅   | |
| Filtro por Región | ✅  | |
| Vista Detallada del País | ✅ | |
| Estados de Carga | ✅| No se si es lo que se pide, pero muestra cuanto se carga |
| Manejo de Errores | ⏳ |Muestra mensajes cuando no encuentra el pais|

### Características Extra

| Característica | Estado | Notas |
|----------------|--------|-------|
| Diseño Responsivo | ❌ | Algunos componentes si, otros no |
| Modo Oscuro/Claro | ❌| |
| Funcionalidad de Ordenamiento | ❌ | |
| Favoritos (localStorage) |❌ | |
| TypeScript |  ❌ | |
| Pruebas Unitarias | ❌ | |
| Despliegue en Vivo | ✅  | |

---

## Capturas de Pantalla

### Página Principal / Lista de Países
![Lista de Países](./screenshots/country-list.png)
> Descripción: Breve descripción de lo que se muestra

### Búsqueda en Acción
![Búsqueda](./screenshots/search.png)
> Descripción: Breve descripción de lo que se muestra

### Vista Detallada del País
![Vista Detallada](./screenshots/detail.png)
> Descripción: Breve descripción de lo que se muestra

### Estados de Carga / Error
![Estados](./screenshots/states.png)
> Descripción: Breve descripción de lo que se muestra

---

## Estructura del Proyecto

```
src/
├── components/
│   ├── BarraBusqueda.jsx 
│   ├── BarraCargar.jsx
│   ├── Boton.jsx
│   ├── DropdownRegion.jsx 
│   ├── PaisesLista;jsx
│   ├── PaisTarjeta.jsx
│   ├── PanelPropiedades.jsx
│   ├── TabInfo.jsx
│   └── Titulo.jsx
│   
│       
├── hooks/
│   ├── useFiltroPais.js
│   └── useObtenerPaises.js
├── App.jsx
├── NotFound.jsx
├── PaginaPais.jsx
├── main.jsx
├── App.css
├── index.css
└── index.js
```

---

## Desafíos Enfrentados

### Desafío 1: [Buscar la api]
**Problema:** En el repositorio de la prueba tecnica, indicaba que debia usar una api deprecada.

**Solución:** En el mensaje daba un enlace indicando el problema, al acceder al enlace indicaba
que la api ya no existia, ahora existe una nueva version donde tengo que generar una api key, entonces eso hice, la genere y la use con herramientas para hacer peticiones.

### Desafío 2: [Usar la api]
**Problema:** Tenia un error de parte del cliente donde no me permitia usar la api, por un problema de Cors.

**Solución:** Tanto en el entorno de desarrollo como en el despliegue cree un proxy.


---

## Lo Que Aprendí

- Aprendi a desplegar aplicaciones usando Vercel
- Aprendi sobre algunas convenciones de React
- Re aprendi algunos conceptos olvidados de React

---

## Si Tuviera Más Tiempo

- [ ] Mejoraria la carga de los paises en un inicio.
- [ ] Mejoraria el uso de los states y como estos se van pasando como parametros a diferentes componentes
- [ ] Aprenderia a crear pruebas.

---

## Auto-Evaluación

En una escala del 1 al 5, ¿cómo calificarías tu entrega en cada área?

| Área | Calificación (1-5) | Comentarios |
|------|-------------------|-------------|
| Funcionalidad |4 | |
| Calidad del Código |3 | Trate de separar en componentes para mejorar la lectura, pero igual hay muchos aspectoas a mejorar |
| UI/UX |4 | Busque en internet varias plantillas de objetos creados con tailwindcss para este proyecto |
| Documentación |2| No tengo un archivo donde explica que hace cada cosa, aunque los nombres de los mismos ya lo hace intuitivo |

---



> **Recordatorio:** Asegúrate de que tu video de Loom (3-5 minutos) cubra:
> 1. Una demostración de tu aplicación funcionando
> 2. Un recorrido del código de un componente del que estés orgulloso
> 3. Un desafío que enfrentaste y cómo lo resolviste
