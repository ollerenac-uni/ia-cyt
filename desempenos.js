// Desempeños de Indaga (Programa curricular de Secundaria, MINEDU). Los usan ficha.html y temas.html.
const CAPACIDADES = [
  "Problematiza situaciones",
  "Diseña estrategias para hacer indagación",
  "Genera y registra datos e información",
  "Analiza datos e información",
  "Evalúa y comunica el proceso y resultados de su indagación",
];

const GRADOS = [
  { id: "g1", titulo: "1.° grado de secundaria",
    intro: "Cuando el estudiante indaga mediante métodos científicos para construir conocimientos y se encuentra en proceso hacia el nivel esperado del ciclo VI, realiza desempeños como los siguientes:",
    desempenos: [
      "Formula preguntas acerca de las variables que influyen en un hecho, fenómeno u objeto natural o tecnológico, y selecciona aquella que puede ser indagada científicamente. Plantea hipótesis en las que establece relaciones de causalidad entre las variables.",
      "Propone procedimientos para observar, manipular la variable independiente, medir la variable dependiente y controlar aspectos que modifican la experimentación. Selecciona herramientas, materiales e instrumentos para recoger datos cualitativos/cuantitativos. Prevé el tiempo y las medidas de seguridad personal y del lugar de trabajo.",
      "Obtiene datos cualitativos/cuantitativos a partir de la manipulación de la variable independiente y mediciones repetidas de la variable dependiente. Controla aspectos que modifican la experimentación. Organiza los datos y hace cálculos de la moda, mediana, proporcionalidad u otros, y los representa en gráficas.",
      "Compara los datos obtenidos (cualitativos y cuantitativos) para establecer relaciones de causalidad, correspondencia, equivalencia, pertenencia, similitud, diferencia u otros; contrasta los resultados con su hipótesis e información científica para confirmar o refutar su hipótesis, y elabora conclusiones.",
      "Sustenta si sus conclusiones responden a la pregunta de indagación, y si los procedimientos, mediciones y ajustes realizados contribuyeron a demostrar su hipótesis. Comunica su indagación a través de medios virtuales o presenciales.",
    ]},
  { id: "g2", titulo: "2.° grado de secundaria",
    intro: "Cuando el estudiante indaga mediante métodos científicos para construir conocimientos y logra el nivel esperado del ciclo VI, realiza desempeños como los siguientes:",
    desempenos: [
      "Formula preguntas acerca de las variables que influyen en un hecho, fenómeno u objeto natural o tecnológico y selecciona aquella que puede ser indagada científicamente. Plantea hipótesis en las que establece relaciones de causalidad entre las variables. Considera las variables intervinientes en su indagación.",
      "Propone procedimientos para observar, manipular la variable independiente, medir la variable dependiente y controlar la variable interviniente. Selecciona herramientas, materiales e instrumentos para recoger datos cualitativos/cuantitativos. Prevé el tiempo y las medidas de seguridad personal y del lugar de trabajo.",
      "Obtiene datos cualitativos/cuantitativos a partir de la manipulación de la variable independiente y mediciones repetidas de la variable dependiente. Realiza los ajustes en sus procedimientos y controla las variables intervinientes. Organiza los datos y hace cálculos de medidas de tendencia central, proporcionalidad u otros, y los representa en gráficas.",
      "Compara los datos obtenidos (cualitativos y cuantitativos) para establecer relaciones de causalidad, correspondencia, equivalencia, pertenencia, similitud, diferencia u otros; contrasta los resultados con su hipótesis e información científica para confirmar o refutar su hipótesis, y elabora conclusiones.",
      "Sustenta si sus conclusiones responden a la pregunta de indagación, y si los procedimientos, mediciones, cálculos y ajustes realizados contribuyeron a demostrar su hipótesis. Comunica su indagación a través de medios virtuales o presenciales.",
    ]},
  { id: "g3", titulo: "3.° grado de secundaria",
    intro: "Cuando el estudiante indaga mediante métodos científicos para construir conocimientos y se encuentra en proceso hacia el nivel esperado del ciclo VII, realiza desempeños como los siguientes:",
    desempenos: [
      "Formula preguntas sobre el hecho, fenómeno u objeto natural o tecnológico para delimitar el problema por indagar. Determina el comportamiento de las variables, y plantea hipótesis basadas en conocimientos científicos, en las que establece relaciones de causalidad entre las variables que serán investigadas. Considera las variables intervinientes que pueden influir en su indagación y elabora los objetivos.",
      "Propone y fundamenta, sobre la base de los objetivos de su indagación e información científica, procedimientos que le permitan observar, manipular y medir las variables y el tiempo por emplear, las medidas de seguridad, y las herramientas, materiales e instrumentos de recojo de datos cualitativos/cuantitativos para confirmar o refutar la hipótesis.",
      "Obtiene datos cualitativos/cuantitativos a partir de la manipulación de la variable independiente y mediciones repetidas de la variable dependiente. Realiza los ajustes en sus procedimientos y controla las variables intervinientes. Organiza los datos y hace cálculos de medidas de tendencia central, proporcionalidad u otros, y los representa en gráficas.",
      "Compara los datos obtenidos (cualitativos y cuantitativos) para establecer relaciones de causalidad, correspondencia, equivalencia, pertenencia, similitud diferencia u otros. Identifica regularidades o tendencias. Contrasta los resultados con su hipótesis e información científica para confirmar o refutar su hipótesis, y elabora conclusiones.",
      "Sustenta, sobre la base de conocimientos científicos, sus conclusiones, procedimientos, mediciones, cálculos y ajustes realizados, y si permitieron demostrar su hipótesis y lograr el objetivo. Comunica su indagación a través de medios virtuales o presenciales.",
    ]},
  { id: "g4", titulo: "4.° grado de secundaria",
    intro: "Cuando el estudiante indaga mediante métodos científicos para construir conocimientos y se encuentra en proceso hacia el nivel esperado del ciclo VII, realiza desempeños como los siguientes:",
    desempenos: [
      "Formula preguntas sobre el hecho, fenómeno u objeto natural o tecnológico que indaga para delimitar el problema. Determina el comportamiento de las variables, y plantea hipótesis basadas en conocimientos científicos, en las que establece relaciones entre las variables que serán investigadas. Considera las variables intervinientes que pueden influir en su indagación y elabora los objetivos.",
      "Propone y fundamenta, sobre la base de los objetivos de su indagación e información científica, procedimientos que le permitan observar, manipular y medir las variables; el tiempo por emplear; las medidas de seguridad; las herramientas, materiales e instrumentos de recojo de datos cualitativos/cuantitativos; y el margen de error. Estos procedimientos también le permitirán prever un grupo de control para confirmar o refutar la hipótesis.",
      "Obtiene y organiza datos cualitativos/cuantitativos a partir de la manipulación de la variable independiente y mediciones repetidas de la variable dependiente. Realiza ajustes en sus procedimientos o instrumentos y controla las variables intervinientes; hace cálculos de medidas de tendencia central, proporcionalidad u otros, obtiene el margen de error, y representa sus resultados en gráficas.",
      "Compara los datos obtenidos (cualitativos y cuantitativos) para establecer relaciones de causalidad, correspondencia, equivalencia, pertenencia, similitud, diferencia u otros. Identifica regularidades o tendencias. Contrasta los resultados con su hipótesis e información científica para confirmar o refutar su hipótesis, y elabora conclusiones.",
      "Sustenta, sobre la base de conocimientos científicos, sus conclusiones, procedimientos y la reducción del error a través del uso del grupo de control, repetición de mediciones, cálculos y ajustes realizados en la obtención de resultados válidos y fiables para demostrar la hipótesis y lograr el objetivo. Comunica su indagación a través de medios virtuales o presenciales.",
    ]},
  { id: "g5", titulo: "5.° grado de secundaria",
    intro: "Cuando el estudiante indaga mediante métodos científicos para construir conocimientos y logra el nivel esperado del ciclo VII, realiza desempeños como los siguientes:",
    desempenos: [
      "Formula preguntas sobre el hecho, fenómeno u objeto natural o tecnológico para delimitar el problema por indagar. Observa el comportamiento de las variables. Plantea hipótesis basadas en conocimientos científicos en las que establece relaciones entre las variables que serán investigadas. Considera las variables intervinientes que pueden influir en su indagación y elabora los objetivos.",
      "Propone y fundamenta, sobre la base de los objetivos de su indagación e información científica, procedimientos que le permitan observar, manipular y medir las variables; el tiempo por emplear; las medidas de seguridad, herramientas, materiales e instrumentos de recojo de datos cualitativos/cuantitativos; y el margen de error. Estos procedimientos también le permitirán prever un grupo de control para confirmar o refutar la hipótesis.",
      "Obtiene y organiza datos cualitativos/cuantitativos a partir de la manipulación de la variable independiente y de mediciones repetidas de la variable dependiente. Realiza los ajustes en sus procedimientos o instrumentos. Controla las variables intervinientes. Realiza cálculos de medidas de tendencia central, proporcionalidad u otros. Obtiene el margen de error y representa sus resultados en gráficas.",
      "Compara los datos obtenidos (cualitativos y cuantitativos) para establecer relaciones de causalidad, correspondencia, equivalencia, pertenencia, similitud, diferencia u otros. Identifica regularidades o tendencias. Predice el comportamiento de las variables y contrasta los resultados con su hipótesis e información científica, para confirmar o refutar su hipótesis. Elabora conclusiones.",
      "Sustenta, sobre la base de conocimientos científicos, sus conclusiones, los procedimientos y la reducción del error a través del uso del grupo de control, la repetición de mediciones, los cálculos y los ajustes realizados en la obtención de resultados válidos y fiables para demostrar la hipótesis y lograr el objetivo. Su indagación puede ser reproducida o genera nuevas preguntas que den lugar a otras indagaciones. Comunica su indagación con un informe escrito o a través de otros medios.",
    ]},
];

// Copia texto; si el portapapeles falla, selecciona `nodo` para Ctrl + C.
function copiar(texto, boton, nodo) {
  const listo = () => { boton.textContent = "Copiado"; boton.classList.add("hecho");
    setTimeout(() => { boton.textContent = "Copiar"; boton.classList.remove("hecho"); }, 2000); };
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(texto).then(listo, () => seleccionar(boton, nodo));
  } else { seleccionar(boton, nodo); }
}
function seleccionar(boton, nodo) {
  const r = document.createRange(); r.selectNodeContents(nodo);
  const s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
  boton.textContent = "Seleccionado: Ctrl + C";
}
