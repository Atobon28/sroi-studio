export const framework = {
 title:'Modelo de evaluación de impacto social basado en SROI',
 author:'Santiago Medina Cruz',
 degree:'Maestría en Gerencia de Proyectos',
 institution:'Universidad Icesi',
 date:'Octubre de 2026',
 aim:'Diseñar un modelo adaptado para evaluar el impacto social de los proyectos de fortalecimiento empresarial implementados por la Secretaría de Desarrollo Económico de Santiago de Cali.',
 problem:'La entidad dispone de datos auditables sobre ejecución —bienes entregados, personas capacitadas, presupuesto y cronograma—, pero estos no bastan para demostrar los cambios socioeconómicos de los beneficiarios.',
 adaptations:[
  {title:'Atención universal',text:'Las restricciones institucionales dificultan conformar grupos de control. La evaluación debe explicitar los supuestos de atribución.'},
  {title:'Informalidad productiva',text:'Muchas unidades productivas no disponen de registros contables completos. Es necesario trabajar con evidencia disponible y documentar vacíos.'},
  {title:'Rigidez contractual',text:'El esquema de cumplimiento de metas puede desincentivar ajustes. La medición debe preverse desde la estructuración del programa.'}
 ],
 scope:'El procedimiento comprende seis etapas y siete instrumentos diligenciables, complementados por un tablero de control y una plantilla de reporte público conforme a la Ley 1712 de 2014.',
 sources:[
  {title:'Resumen ejecutivo del trabajo de grado',detail:'Santiago Medina Cruz · Icesi · Octubre de 2026',type:'Fuente primaria',link:null},
  {title:'Asesorías y tableros de diseño',detail:'Objetivos, insights, determinantes y restricciones del modelo',type:'Fuente primaria',link:null},
  {title:'Guía interactiva del modelo',detail:'Recurso original del proyecto; contenido dinámico pendiente de contrastar',type:'Revisión pendiente',link:'https://guia-sroi.vercel.app/#s2'},
  {title:'The Guide to SROI',detail:'Marco metodológico general de Social Value International',type:'Referencia complementaria',link:'https://www.socialvalueint.org/guide-to-sroi'}
 ],
 case:{
  invested:'12.154 millones COP',
  beneficiaries:780,
  followed:260,
  ratio:'0,17:1',
  sensitivity:'0,29:1',
  totalIndicators:13,
  monetized:5,
  expertValidators:6
 },
 knownEvidence:[
  {label:'Reducción de costos operativos',detail:'Reportada por 219 de las 260 unidades visitadas; no monetizada en el ejercicio.',state:'No monetizado'},
  {label:'Multiplicador económico local',detail:'No monetizado con la información disponible.',state:'No monetizado'},
  {label:'Costos evitados en seguridad y salud pública',detail:'No monetizados con la información disponible.',state:'No monetizado'},
  {label:'Indicadores cualitativos',detail:'No fueron monetizados; los criterios de selección de proxies requieren documentación.',state:'No monetizado'}
 ],
 validation:[
  'Las tres primeras etapas se diligenciaron con documentación que el programa ya producía.',
  'El seguimiento no incorporaba preguntas de atribución causal para completar la cuarta etapa.',
  'El modelo se aplicó retrospectivamente a un programa ejecutado.',
  'Seis profesionales validaron la pertinencia conceptual y la viabilidad institucional.',
  'Los expertos pidieron documentar criterios de selección del proxy financiero.',
  'Se advirtió el riesgo de reventa de los insumos entregados.',
  'La adopción institucional requiere un acto administrativo.'
 ],
 pending:[
  'Transcribir y aprobar los siete instrumentos originales y sus campos exactos.',
  'Verificar el catálogo completo y resolver diferencia documental entre 12 y 13 indicadores.',
  'Documentar los criterios de selección y las fuentes de los proxies financieros.',
  'Definir preguntas de atribución para el seguimiento en campo.',
  'Desarrollar proyección plurianual del beneficio.',
  'Validar el modelo con organismos de control.',
  'Definir reglas de adopción institucional y tratamiento de datos.'
 ]
};
export const stageGuidance = [
 {purpose:'Delimitar qué intervención se evalúa, el periodo y los actores cuyos cambios se considerarán.',records:['Objetivo, alcance y límite temporal','Actores involucrados y criterios para incluirlos','Recursos de evaluación y audiencia del resultado'],caution:'Excluir actores o efectos materiales requiere justificación.'},
 {purpose:'Construir la cadena entre insumos, actividades, productos y cambios percibidos por cada actor.',records:['Insumos y recursos de la intervención','Entregables y actividades','Cambios esperados u observados por actor'],caution:'Entregar maquinaria es un producto del programa; aumentar ingresos es un posible resultado.'},
 {purpose:'Relacionar los resultados con indicadores verificables y estimaciones monetarias documentadas.',records:['Indicador, unidad y fuente de evidencia','Cantidad y duración del cambio','Proxy financiero, fuente y criterio de selección'],caution:'No asignar valores de referencia sin justificación o evidencia.'},
 {purpose:'Estimar qué proporción del cambio se puede atribuir a la intervención.',records:['Peso muerto: qué ocurriría sin el programa','Atribución: contribución de otros actores','Desplazamiento y eventual decrecimiento'],caution:'En el caso real faltaron preguntas primarias de atribución. Un supuesto no equivale a evidencia.'},
 {purpose:'Relacionar el valor social neto con la inversión y contrastar supuestos.',records:['Beneficios monetizados admisibles','Recursos invertidos y periodo de análisis','Escenarios de sensibilidad y limitaciones'],caution:'El 0,17:1 es un resultado retrospectivo parcial, no una meta ni un cálculo automático de esta herramienta.'},
 {purpose:'Traducir los resultados a información comprensible, trazable y útil para decidir.',records:['Hallazgos clave y ratio con su interpretación','Fuentes, metodología, exclusiones y supuestos','Recomendaciones y reporte público'],caution:'La presentación del informe no equivale a aceptación por organismos de control.'}
];
