# SROI Studio

Prototipo funcional de interfaz UX/UI para una plataforma de evaluación de impacto social, construido desde Diseño de Medios Interactivos.

## Ejecutar

```bash
npm install
npm run dev
```

## Alcance

- Interfaz responsive dark-tech con opción de modo claro.
- Dashboard, gestión de proyectos y ruta de seis etapas.
- Formularios persistidos únicamente en el navegador mediante localStorage.
- Vista ilustrativa de resultados basada en el resumen ejecutivo del caso estudiado.
- Concepto editorial de informes; la exportación todavía no está disponible.

**Importante:** no es un motor SROI validado. Los cálculos automáticos, el backend, la autenticación, la carga de evidencias y la generación de informes quedan fuera de esta primera versión. Los datos de referencia no deben usarse para decisiones reales.

## Stack

React 18 · TypeScript · Vite · CSS modular por clases · lucide-react.

## Próximos pasos

1. Validar arquitectura y UX con el autor de la metodología y funcionarios usuarios.
2. Definir fichas, campos, reglas, modelo de datos, cálculos y proxies validados.
3. Integrar una base de datos y autenticación con permisos de acceso.
4. Añadir carga y trazabilidad de evidencias, cálculo, análisis de sensibilidad y reportes.
