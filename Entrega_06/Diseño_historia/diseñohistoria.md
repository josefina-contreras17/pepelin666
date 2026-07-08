# Análisis del diseño de la información

### Análisis del diseño de la información y diseño de la interacción: 

La estructura narrativa se construyó bajo el formato de scrollytelling. El recorrido del usuario es lineal descendente, diseñado para imitar el flujo de una investigación empírica:
1. **La Pregunta (Hero)**: Plantea la hipótesis inicial.
2. **Transparencia (Metodología)**: Antes de mostrar datos, se valida la fuente (API Spotify) empoderando al usuario con la opción de descargar el CSV.
3. **Alfabetización de Datos (Glosario)**: Se educa al lector sobre qué es Danceability o Acousticness de forma amigable.
4. **La Evidencia Visual (Visualizaciones y Video)**: Se despliegan los gráficos interactivos intercalados con "El sonido de la resistencia" (video de YouTube) para no perder el contexto histórico y auditivo.
5. **Cierre:** El gráfico de dispersión confirma la hipótesis, pero el texto cierra reflexivamente apuntando a las excepciones (Mon Laferte).

### Comentarios sobre la crónica y textos en general como titular, bajada, secciones o subtítulos, entre otros: 
¿Por qué usaron este estilo narrativo?
* Adoptamos un estilo narrativo que hibrida el periodismo de datos con la crónica musical (estilo fanzine).
* Si la redacción fuera puramente técnica ("La variable X es mayor a Y"), se perdería el peso cultural y emocional que tienen las canciones de la dictadura y post-dictadura para Chile.
* El texto actúa siempre como un "guía interpretativo". Por ejemplo, antes de que el usuario interactúe con el radar, el texto ya le anticipa la gran paradoja: "las canciones de rabia social de Los Prisioneros son las más alegres del catálogo". Así, la redacción prepara psicológicamente al usuario para decodificar correctamente la visualización.

### Decisiones sobre elementos visuales: 
* ¿De qué manera el logo, los colores, tipografías, videos y/o fotos constituyen parte del significado de su historia?
    * **Tipografías:** Se seleccionó Monoton para los títulos, aportando una estética retro y rítmica (similar a luces de neón o un ecualizador). Para los cuerpos de texto se utilizó Montserrat para garantizar una lectura limpia en dispositivos móviles.
    * **Colores y Contenedores**: Utilizamos una paleta nostálgica pero cálida. El fondo es un Beige (#ead5be) con tramas texturizadas, sobre el cual flotan tarjetas o "cards" con bordes Terracota (#c05a48) y cajas de destaque en Turquesa (#46B3BA). Esto emula el aspecto de un archivo físico o un recorte de revista musical de los 80s.
    * **Recursos Visuales Clave:**
        * El collage inicial de portadas (Los Jaivas, Los Tres, Violeta Parra) sirve como un ancla emocional antes de entrar a la frialdad de los números.
        * El menú de navegación (Header) se mantiene fijo al hacer scroll y cuenta con un logo en forma de disco de vinilo que rota al pasar el cursor (efecto hover de CSS), reforzando la identidad temática en cada segundo de la navegación del usuario.