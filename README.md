RuLapp

Aplicación web de transporte solidario rural

1. Descripción del proyecto

RuLapp es una aplicación web orientada a facilitar la conexión entre conductores y pasajeros que necesitan compartir rutas de transporte, especialmente en zonas rurales.

La aplicación busca facilitar la búsqueda de rutas, la reserva de cupos y la gestión de información de los usuarios.

Este proyecto se desarrolla como parte del programa de formación Análisis y Desarrollo de Software (ADSO) del SENA.

2. Objetivo del proyecto

Desarrollar una aplicación web que permita a los usuarios consultar rutas disponibles, gestionar reservas y acceder a información relacionada con el servicio de transporte solidario.

3. Tecnologías utilizadas

| Tecnología | Función |
|---|---|
| React | Desarrollo de interfaces de usuario. |
| Vite | Entorno de desarrollo del frontend. |
| JavaScript | Lenguaje de programación. |
| React Router | Navegación entre páginas. |
| CSS | Diseño y estilos de la aplicación. |
| Node.js | Entorno previsto para el backend. |
| Express | Framework previsto para construir la API. |
| MySQL | Sistema de gestión de bases de datos previsto. |
| Git y GitHub | Control de versiones y alojamiento del código. |

4. Funcionalidades actuales

La versión inicial del frontend incluye:

- Página principal de RuLapp.
- Formulario de inicio de sesión.
- Navegación entre las diferentes secciones.
- Búsqueda de rutas de demostración.
- Visualización de reservas de ejemplo.
- Formulario de perfil de usuario.
- Adaptación de la interfaz a diferentes tamaños de pantalla.

Nota:algunas funcionalidades utilizan datos de demostración. Todavía no existe una conexión funcional entre el frontend, el backend y la base de datos.

5. Estructura del proyecto

```text
rulapp-frontend/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   └── navbar.jsx
│   ├── pages/
│   │   ├── home.jsx
│   │   ├── login.jsx
│   │   ├── profiles.jsx
│   │   ├── reservations.jsx
│   │   └── routes.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

6. Requisitos para la instalación

Para ejecutar el proyecto se necesita:

- Sistema operativo Windows, Linux o macOS.
- Node.js instalado.
- npm (incluido con Node.js).
- Visual Studio Code u otro editor de código.
- Git para gestionar las versiones del proyecto.

7. Instalación y ejecución

Paso 1. Clonar el repositorio

```bash
git clone https://github.com/SsaraviaL/RuLapp.git
```

Paso 2. Ingresar a la carpeta del proyecto

```bash
cd RuLapp/rulapp-frontend
```

Paso 3. Instalar las dependencias

```bash
npm install
```

Paso 4. Ejecutar el servidor de desarrollo

```bash
npm run dev
```

Paso 5. Abrir la aplicación

Vite mostrará una dirección local en la terminal, normalmente:

```text
http://localhost:5173/
```

Abrir esa dirección en el navegador para visualizar la aplicación.

8. Control de versiones

El proyecto utiliza Git y GitHub para administrar los cambios del código fuente.

Se establecen las siguientes ramas:

- `main`: versión estable del proyecto.
- `develop`: integración de funcionalidades.
- `feature/`: desarrollo de nuevas funcionalidades.
- `fix/`: corrección de errores.
- `docs/`: modificaciones de documentación.

Los mensajes de commit siguen una convención descriptiva basada en Conventional Commits.

9. Estado del proyecto

RuLapp se encuentra en etapa de desarrollo inicial.

Actualmente se cuenta con una estructura de frontend desarrollada en React y Vite. Las siguientes etapas contemplan la construcción del backend con Node.js y Express, la integración con MySQL y la implementación de funcionalidades completas.

10. Autor

Proyecto académico desarrollado en el programa de formación Análisis y Desarrollo de Software (ADSO) del SENA.

Repositorio oficial:

https://github.com/SsaraviaL/RuLapp