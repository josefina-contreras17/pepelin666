# Análisis de las Visualizaciones:

Nuestra webstory se apoya en visualizaciones de datos para traducir las métricas técnicas de Spotify (metadata) en perfiles musicales comprensibles para el usuario.

### Visualización 1: El ADN de las Grandes Bandas (Gráfico Radar)
* ¿Qué dimensiones y mensajes comunica?
Comunica la "huella digital" de agrupaciones clave (Los Jaivas, Los Tres, Los Prisioneros, La Ley). El objetivo es comparar sus parámetros principales (*Danceability, Energy, Valence, Acousticness*). Queremos mostrar visualmente contrastes drásticos: por ejemplo, cómo La Ley domina en un sonido electrónico y bailable (0.63) frente a Los Jaivas, que presentan la acústica más alta (0.39) pero menor alcance masivo actual.
https://public.flourish.studio/visualisation/29488203/

### Visualización 2: Atributos de un Hit TOP 10
* ¿Qué dimensiones y mensajes comunica?
Esta visualización busca aislar las características sonoras que comparten las 10 canciones más populares de nuestro catálogo histórico. El mensaje central es demostrar que el "éxito" sostenido en el tiempo no es aleatorio, sino que responde a un patrón rítmico y energético específico que conectó masivamente con el público chileno.
https://public.flourish.studio/visualisation/29489887/

### Visualización 3: El Cuadrante del Éxito
* ¿Qué dimensiones y mensajes comunica?
Cruza las dos variables más importantes descubiertas en nuestro análisis: la *Bailabilidad* (Eje X) con la *Energía* (Eje Y). El gráfico expone de manera contundente cómo los proyectos musicales calibraron sus composiciones para resonar en una "frecuencia óptima". Demuestra visualmente el clúster de himnos chilenos agrupados en el cuadrante de Alta Energía + Alta Bailabilidad.
https://public.flourish.studio/visualisation/29488808/

### ¿Cómo se generaron las visualizaciones?
Originalmente, las tres visualizaciones fueron prototipadas en la herramienta *Flourish* para buscar los mejores modelos de representación. Sin embargo, para cumplir con los requisitos técnicos de la entrega y tener mayor control sobre la personalización, la segunda visualización (Top 10) fue desarrollada programáticamente en *Python* utilizando librerías de visualización de datos.

### Ficha técnica base de datos
* **Fuente Primaria:** API de Spotify (Metadata Tracks).
* **Fuente Secundaria:** Listado Rockaxis ("Las 250 canciones más importantes del rock chileno").
* **Procesamiento:** Limpieza de datos nulos y normalización de escalas (0.0 a 1.0) para variables acústicas.