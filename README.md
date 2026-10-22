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


## Integración de la base metodológica — versión 0.2

- Se agregó `src/methodology.ts` como fuente de contenido editorial estructurado, basado en el resumen ejecutivo y las asesorías entregadas.
- El Centro de ayuda ahora funciona como **Biblioteca SROI**, con problema, contexto, seis etapas, evidencia del caso, validación, pendientes y procedencia de fuentes.
- Cada etapa del formulario tiene orientación metodológica y precauciones específicas.
- Se distingue explícitamente el material confirmado de las definiciones todavía no recibidas.
- **No se han inventado los nombres ni campos de los siete instrumentos originales.** Se necesita incorporarlos desde la fuente primaria para reemplazar los formularios orientativos.
- Queda pendiente validar si el catálogo definitivo contiene 12 o 13 indicadores (diferencia entre la guía web y el resumen ejecutivo).
- Las cifras de `0,17:1` y `0,29:1` pertenecen al caso académico; no son cálculos dinámicos del prototipo.

### Documentación requerida para la siguiente fase
1. Fichas diligenciables originales y estructura de cada instrumento.
2. Catálogo definitivo de indicadores y definición de sus variables.
3. Fórmulas, parámetros, proxies monetarios y reglas de atribución aprobadas por el autor.
4. Pruebas de uso con usuarios institucionales.

> Nota de despliegue: este repositorio se publica automáticamente si Vercel está conectado a `main`. Revisar la compilación del nuevo commit en Vercel antes de presentar.
