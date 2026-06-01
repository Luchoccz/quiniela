# Quiniela Mundial 2026 (Frontend)

Proyecto frontend en Next.js con una pantalla de login temática del Mundial 2026.

## Ejecutar en desarrollo

```bash
npm install
npm run dev
```

## Build y lint

```bash
npm run lint
npm run build
```

## Integración futura con backend Python

El formulario de login envía `email` y `password` por `POST` a:

- `NEXT_PUBLIC_AUTH_API_URL` (si está definida)
- `http://localhost:8000/api/login` (valor por defecto)
