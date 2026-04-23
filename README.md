# Proyecto PokeDex - Pueblo Paleta Inc.

# 1. Introducción

Este proyecto consiste en el despliegue profesional de la aplicación **PokeDex** para la compañía **Pueblo Paleta Inc.**. Como parte del equipo de ingeniería de **PumasLab**, el objetivo es transicionar una aplicación web estática (desarrollada en HTML, CSS y JavaScript) a un entorno de nube pública bajo estándares de seguridad web y prácticas DevOps.

# 2. Configuración del Entorno de Nube (Azure for Students)

1.  **Acceso Institucional:** Se utilizó la cuenta de correo institucional para acceder al portal de **Azure for Students**.
2.  **Activación del Beneficio:** Se valido la identidad estudiantil mediante un código de verificación enviado al teléfono asociado a la cuenta del correo estudiantil.
3.  **Configuración de Suscripción:** Se verificó que la suscripción de "Azure for Students" estuviera activa para evitar costos y utilizar los créditos gratuitos proporcionados.

# 3. Requisitos del Sistema

Para el correcto funcionamiento y despliegue de esta aplicación, se requieren las siguientes herramientas:

-   **Repositorio:** GitHub (Nombre: `pokedex`).
-   **Plataforma de Despliegue:** Azure Static Web Apps.
-   **Editor de Documentación:** StackEdit.

# 4. Estándares de Seguridad Implementados

Siguiendo las exigencias de Pueblo Paleta Inc. tras sus recientes ciberataques, la aplicación ha sido configurada para incluir los siguientes encabezados de seguridad:

-   **Content-Security-Policy (CSP):** Prevención de ataques XSS.
-   **Strict-Transport-Security (HSTS):** Obligatoriedad de HTTPS.
-   **X-Content-Type-Options: nosniff:** Protección contra el rastreo de tipos MIME.
-   **X-Frame-Options: DENY:** Prevención de Clickjacking.
-   **Referrer-Policy: no-referrer:** Protección de la privacidad en las cabeceras.

