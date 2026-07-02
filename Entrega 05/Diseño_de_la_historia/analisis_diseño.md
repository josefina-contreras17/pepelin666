# Análisis del Diseño de la Historia

### Estructura Narrativa y Recorrido del Usuario
La estructura narrativa remite a un formato de **scrollytelling** (periodismo inmersivo por desplazamiento). El recorrido del usuario dentro de la página está diseñado de manera lineal descendente, imitando la estructura clásica de un reportaje investigativo pero potenciado con interactividad.
98888
### Comentarios sobre la crónica:
El recorrido sigue esta lógica de revelación progresiva:
1. **La Hipótesis**: Plantea la gran pregunta inicial (¿Puede la matemática explicar un himno?) acompañada de un collage visual que apela a la nostalgia.
2. **La Metodología**: Antes de saltar a los gráficos, transparentamos el proceso (API de Spotify, 232 canciones) para darle rigor periodístico a la webstory, incluyendo un botón para descargar la base de datos.
3. **Glosario**: Educamos al lector sobre los parámetros (Danceability, Acousticness, etc.) usando un lenguaje accesible para que sepa interpretar la data.
4. **El ADN (Radar)**: Presentación del perfil sonoro general comparando bandas clave (Prisioneros, Jaivas, Ley, Bunkers).
5. **La resistencia (bloque audiovisual)**: Un bloque audiovisual (`#contexto`) que conecta la matemática de los datos con la historia cultural de Chile a través de un video de YouTube.
6. **Top 10 (Evolución)**: Gráfico de barras aislando las características de las canciones más populares que han resistido la prueba del tiempo.
7. **Mapa y cierre**: Se concluye cruzando las dos variables más importantes (Energía y Bailabilidad) en un gráfico de dispersión, cerrando el círculo narrativo comprobando la hipótesis (pero reconociendo la excepción a la regla con Mon Laferte).

### Comentarios sobre la redacción:
* El tono de la redacción busca alejarse de un informe estadístico técnico. Adoptamos un estilo narrativo que mezcla **periodismo de datos con crítica musical o "fanzine"**.
* ¿Por qué este estilo?
    * Porque estamos hablando de rock y memoria colectiva (canciones dictadura/post-dictadura). Si la redacción fuera puramente matemática, perdería el peso cultural y emocional. Explicaciones como "Danceability: qué tanto se presta una canción para que las caderas tomen el control" acercan los datos fríos de una API a la experiencia humana de escuchar música.
* Refuerzo a las visualizaciones:
    * El texto actúa como un guía interpretativo. En el Bloque Radar, en lugar de dejar que el gráfico hable solo, el texto anticipa el hallazgo: "Los Prisioneros lideran en bailabilidad (0.70)... una paradoja fascinante: sus canciones de rabia social son las más alegres del catálogo". Esto prepara la mente del usuario para entender lo que visualizará a continuación.

### Decisiones sobre elementos visuales: 
* **Tipografías:** Se utilizó *Monoton* para los títulos y estadísticas destacadas (`.metodo-num`), aportando una estética retro y rítmica. Para el cuerpo de texto se utilizó *Montserrat*, garantizando máxima legibilidad y jerarquía.
* **Colores y Cajas (Cards):** La paleta busca un contraste nostálgico pero enérgico. Un fondo base Beige (#ead5be) texturizado, contrastado con cajas de contenido tipo "tarjeta" (`.bloque-card`) con bordes Terracota (#c05a48) y cajas destacadas color Turquesa (`.bloque-card-turquesa`). Estos contenedores (que incluyen un efecto `backdrop-filter: blur`) ayudan a enmarcar la lectura como si fueran recortes de una revista o paneles de un museo interactivo.
* **Fotografía y Logo:** El collage inicial `.imagen-seccion` agrupa portadas icónicas (Los Tres, Jaivas), sirviendo como un ancla emocional antes de entrar a los números de Spotify. El logo circular rotatorio de la barra de navegación (el vinilo) refuerza subliminalmente el tema musical a lo largo de todo el scrollytelling.
