
#**Bitácora de Despliegue: Proyecto PokeDex**

**Empresa:** Pueblo Paleta Inc. **Equipo de Ingeniería:** PumasLab

  

1.  **Resumen del Entorno**

  

-  **Plataforma de Despliegue:** Azure Static Web Apps (Suscripción Azure for Students).

-  **Origen del Código:** Repositorio GitHub `pokedex`.

-  **Tipo de Aplicación:** Web Estática / Framework (Angular/SCSS detectado en build logs).

  

2. Proceso de Configuración Inicial

  

1.  **Creación del Recurso:** Se seleccionó el servicio **Static Web Apps** en el portal de Azure.

2.  **Conexión DevOps:** Se vinculó el repositorio de GitHub, autorizando el despliegue automático mediante **GitHub Actions**.

3.  **Configuración de Región:** Se intentaron diversas regiones hasta encontrar una compatible con la suscripción institucional.

  

3. Bitácora de Errores y Soluciones Técnias (Troubleshooting)

  

_Este apartado es crítico para cumplir con el 20% de la nota de documentación técnica__._

  

Error 1: Validación de Plantilla (InvalidTemplate)

  

-  **Mensaje de Error:**  `The provided value for the template parameter 'appArtifactLocation' is not valid... received a value of type 'Array'`.

-  **Causa:** Durante la configuración manual en el portal, se ingresó un formato incorrecto para la ruta de los artefactos.

-  **Solución:** Se corrigieron los "Build Presets" asegurando que el campo `app_location` fuera un String (`/`) y no una lista de rutas.

  

Error 2: Restricción de Políticas de Región (RequestDisallowedByAzure)

  

-  **Mensaje de Error:**  `Resource was disallowed by Azure: This policy maintains a set of best available regions`.

-  **Causa:** La suscripción **Azure for Students** tiene restricciones geográficas para optimizar recursos.

-  **Solución:** Se cambió la ubicación del recurso a **East US 2**, región permitida por la política de la suscripción.

  

Error 3: Visualización de Página por Defecto

  

-  **Problema:** Al acceder a la URL, se mostraba el mensaje "Congratulations on your new site!" en lugar de la PokeDex.

-  **Causa:** Los archivos fuente estaban en la carpeta `/src`, pero el flujo de trabajo buscaba el `index.html` en la raíz.

-  **Solución:** Se modificó el archivo `.github/workflows/azure-static-web-apps.yml` ajustando `app_location: "/src"`.

  

Error 4: Fallo en la Construcción y Archivo por Defecto no Encontrado

  

-  **Mensaje de Error:**  `Failed to find a default file in the app artifacts folder (/)`.

-  **Causa:** Discordancia entre la carpeta de salida generada por el build (Angular `dist/`) y la configuración de Azure.

-  **Solución:** Se ajustó el parámetro `output_location` en el Workflow de GitHub para que coincidiera con la carpeta de compilación final.

  

4. Implementación de Seguridad (Fase Final)

  

Para alcanzar la calificación **A+** en **securityheaders.com**, se procedió con la siguiente configuración:

  

1.  **Archivo de Configuración:** Se creó el archivo `staticwebapp.config.json` en la raíz del repositorio.

2.  **Cabeceras HTTP Aplicadas:**

-  `Content-Security-Policy`: Protección contra XSS.

-  `Strict-Transport-Security`: Forzar HTTPS.

-  `X-Content-Type-Options`: Prevenir MIME sniffing.

-  `X-Frame-Options`: Evitar Clickjacking.

-  `Referrer-Policy`: Seguridad en cabeceras de referencia.

  

5. Verificación de Resultados

  

-  **Estado de la Aplicación:** Funcional y accesible públicamente sin errores 404/500 en consola.

-  **Calificación de Seguridad:** **A**

> Written with [StackEdit](https://stackedit.io/).
> Written with [StackEdit](https://stackedit.io/).
