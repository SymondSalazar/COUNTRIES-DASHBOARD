# Dashboard de Países - Entrega

> **Instrucciones:** Copia esta plantilla al README.md de tu proyecto y completa todas las secciones.

---

## Información del Candidato

- **Nombre:** [Symond Salazar]
- **Email:** [symond.salazar.silva.2005@gmail.com]
- **Fecha:** [13/junio/2026]

---

## Enlaces del Proyecto

| Tipo de Enlace | URL |
|----------------|-----|
| Repositorio de GitHub | [https://github.com/SymondSalazar/COUNTRIES-DASHBOARD] |
| Video | [https://drive.google.com/file/d/1iDgMCUX0sCDUIA9ZBGxxf_Vs9p8hF703/view?usp=sharing] |
| Demo en Vivo  |[https://countries-dashboard-ten.vercel.app/]| 
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
# http://localhost:5173 (Vite) 
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
| Manejo de Errores | ✅ ❌ |Muestra mensajes cuando no encuentra el pais|

### Características Extra

| Característica | Estado | Notas |
|----------------|--------|-------|
| Diseño Responsivo | ✅  | |
| Modo Oscuro/Claro | ✅ | |
| Funcionalidad de Ordenamiento | ❌ | |
| Favoritos (localStorage) |❌ ✅  | Uso el localStorage para el modo oscuro-claro |
| TypeScript |  ❌ | |
| Pruebas Unitarias | ❌ | |
| Despliegue en Vivo | ✅  | |

---

## Capturas de Pantalla

### Página Principal / Lista de Países
<img width="1920" height="1080" alt="screenshot-2026-06-13_18-43-44" src="https://github.com/user-attachments/assets/eae14b4b-6657-4829-a88e-6772930ca3b2" />

> Descripción: Esta es la vista que se obtiene al abrir la aplicacion.

### Búsqueda en Acción
<img width="1920" height="1080" alt="screenshot-2026-06-13_18-29-52" src="https://github.com/user-attachments/assets/ed4fadee-eb2b-4158-9e2d-b4c3f54dfa40" />
> Descripción: Muestro la busqueda en tiempo real de los paises.

### Vista Detallada del País
<img width="1920" height="1080" alt="screenshot-2026-06-13_18-44-43" src="https://github.com/user-attachments/assets/f914220c-f660-4e38-b018-eb36dc1e64f1" />

> Descripción: En esta foto muetro la informacion en detalle de un pais.

### Estados de Carga / Error
<img width="1920" height="1080" alt="screenshot-2026-06-13_18-45-33" src="https://github.com/user-attachments/assets/f04a92b3-ee55-4968-ace4-7a5925713d99" />
<img width="1920" height="1080" alt="screenshot-2026-06-13_18-46-28" src="https://github.com/user-attachments/assets/7e06a3f0-64f3-4390-8670-03212e9b266a" />
<img width="1920" height="1080" alt="screenshot-2026-06-13_18-47-08" src="https://github.com/user-attachments/assets/3fda06fd-9cfc-45ce-98b0-6ac6f1efa965" />

> Descripción: El primer capture muestra la carga de datos, el segundo muestra cuando no se encuentra un pais y la tercera es un easter egg que pongo en mis proyectos para la pagina 404 Not Found


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
│   ├── ThemeButton.jsx
│   ├── ThemeSync.jsx
│   └── Titulo.jsx
│   
│       
├── hooks/
│   ├── useFiltroPais.js
│   ├── useTheme.jsx
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

### Desafío 1: Buscar la api
**Problema:** En el repositorio de la prueba tecnica, indicaba que debia usar una api deprecada.

**Solución:** En el mensaje daba un enlace indicando el problema, al acceder al enlace indicaba
que la api ya no existia, ahora existe una nueva version donde tengo que generar una api key, entonces eso hice, la genere y la use con herramientas para hacer peticiones.

### Desafío 2: Usar la api
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
