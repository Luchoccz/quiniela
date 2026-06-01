<<<<<<< HEAD
# quiniela
Un espacio para compartir la pasión del fútbol más allá de la oficina. Pronostica los marcadores de cada jornada, compite con tus compañeros de equipo y escala posiciones en la tabla general. ¡Demuestra tu visión estratégica también en la cancha!
=======
# Quiniela Mundial 2026 (Frontend)

Aplicación frontend construida con Next.js para iniciar sesión en una quiniela temática del Mundial 2026.

Este documento explica:

- Qué herramientas usa el proyecto
- Cómo está estructurado internamente
- Cómo ejecutarlo en local
- Cómo conectar el login con una API backend

## 1. Herramientas y tecnologías

### Framework y librerías principales

- Next.js 16 (App Router)
- React 19
- React DOM 19

### Lenguaje y calidad de código

- TypeScript 5 (modo estricto)
- ESLint 9
- Configuración de lint de Next.js (core-web-vitals + typescript)

### Runtime y gestor de paquetes

- Node.js (recomendado: versión LTS actual)
- pnpm (recomendado para este repositorio por la presencia de pnpm-lock.yaml)

## 2. Cómo está hecho el proyecto

La app usa App Router de Next.js dentro de la carpeta src/app.

### Estructura principal

- src/app/layout.tsx
	Define el layout raíz y metadatos globales (título y descripción).

- src/app/page.tsx
	Página principal (cliente) con el formulario de login y la lógica de envío por fetch.

- src/app/page.module.css
	Estilos CSS Modules específicos de la página de login.

- src/app/globals.css
	Estilos globales de toda la app.

- public/
	Recursos estáticos como íconos y fondos SVG usados en la UI.

### Flujo de login actual

1. El usuario completa correo y contraseña.
2. Se valida que no estén vacíos.
3. El frontend hace una solicitud POST en JSON al endpoint de autenticación.
4. Si la respuesta es OK, muestra mensaje de éxito.
5. Si falla, muestra mensaje de error con detalle de estado.

Campos enviados al backend:

- email
- password

## 3. Configuración de endpoint de autenticación

El frontend utiliza la variable de entorno pública:

- NEXT_PUBLIC_AUTH_API_URL

Si no está definida, usa por defecto:

- http://localhost:8000/api/login

Ejemplo de archivo .env.local:

NEXT_PUBLIC_AUTH_API_URL=http://localhost:8000/api/login

## 4. Instalación y ejecución

### Con pnpm (recomendado)

1. Instalar dependencias:
	 pnpm install
2. Levantar servidor de desarrollo:
	 pnpm run dev
3. Abrir en navegador:
	 http://localhost:3000

### Alternativa con npm

1. Instalar dependencias:
	 npm install
2. Levantar servidor de desarrollo:
	 npm run dev

## 5. Scripts disponibles

- pnpm run dev
	Inicia el servidor de desarrollo de Next.js.

- pnpm run build
	Genera el build de producción.

- pnpm run start
	Levanta el servidor sobre el build generado.

- pnpm run lint
	Ejecuta validaciones de ESLint.

## 6. Convenciones técnicas relevantes

- Alias de imports configurado: @/* apunta a src/*
- TypeScript con strict activado
- Renderizado de la pantalla de login como Client Component
- Estilos por CSS Modules para encapsular estilos de la página

## 7. Estado actual y próximos pasos sugeridos

Estado actual:

- Frontend de login funcional
- Integración preparada para backend por variable de entorno

Próximos pasos recomendados:

1. Implementar manejo de sesión (token/cookies).
2. Agregar rutas protegidas tras login.
3. Validar respuestas del backend con un esquema (por ejemplo, zod).
4. Incorporar tests de UI y lógica de autenticación.
>>>>>>> 9fc4dffca83e7f357b7e7f1419b1dfd9323d0a8f
