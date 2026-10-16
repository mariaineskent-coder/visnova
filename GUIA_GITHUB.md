# 📖 Guía Paso a Paso: Cómo Subir tu Proyecto a GitHub

Esta guía te servirá siempre como referencia rápida para subir **VisNova** (o cualquier otro proyecto web) a tu cuenta de GitHub y publicarlo gratis en internet.

---

## 📋 Requisitos Previos

1. Tener una cuenta en [GitHub.com](https://github.com/).
2. Tener Git instalado en tu computadora.

---

## 🚀 OPCIÓN 1: Desde la Terminal (Recomendada)

### Paso 1: Crear el repositorio en GitHub
1. Entra a [github.com/new](https://github.com/new).
2. En **Repository name**, escribe: `visnova`
3. Déjalo en **Public** (Público).
4. **No** marques las casillas de *"Add a README"*, *"Add .gitignore"* ni *"Choose a license"* (ya tienes esos archivos).
5. Haz clic en **Create repository**.

---

### Paso 2: Abrir la terminal en la carpeta del proyecto
Abre la terminal en la carpeta de este proyecto (`visnova`).

> 💡 *Nota*: Si la terminal no reconoce `git`, reinicia tu terminal/editor para que detecte la instalación reciente de Git.

---

### Paso 3: Ejecutar estos comandos en la terminal

Copia y pega estos comandos uno a uno:

```bash
# 1. Iniciar el repositorio local
git init

# 2. Agregar todos los archivos al guardado
git add .

# 3. Guardar los cambios con un mensaje
git commit -m "Primer commit: web VisNova completa"

# 4. Cambiar el nombre de la rama principal a 'main'
git branch -M main

# 5. Conectar con tu repositorio en GitHub
# (Reemplaza TU_USUARIO por tu nombre de usuario de GitHub)
git remote add origin https://github.com/TU_USUARIO/visnova.git

# 6. Subir tus archivos a GitHub
git push -u origin main
```

> 🔑 **Inicio de sesión**: La primera vez que ejecutes `git push`, se abrirá una ventana para autorizar tu cuenta de GitHub en el navegador. Haz clic en **Sign in with your browser**.

---

## 🔄 ¿Cómo subir cambios futuros a GitHub?

Cada vez que hagas cambios en tus archivos (por ejemplo, editar `index.html` o `styles.css`) y quieras actualizarlos en GitHub, solo ejecuta estos 3 comandos:

```bash
git add .
git commit -m "Descripción de los cambios realizados"
git push
```

---

## 🌐 OPCIÓN 2: Método Web (Sin Terminal)

Si en algún momento prefieres no usar la consola:

1. Ve a [github.com/new](https://github.com/new) y crea el repositorio `visnova`.
2. En la pantalla que aparece, haz clic en el enlace que dice:  
   **"uploading an existing file"** (subir un archivo existente).
3. Arrastra los archivos (`index.html`, `styles.css`, `script.js`, `README.md`, `GUIA_GITHUB.md`) a la ventana.
4. En la parte inferior, escribe un mensaje de commit (ej. *"Subida inicial"*) y haz clic en **Commit changes**.

---

## 🌍 Bonus: Cómo activar tu página en internet GRATIS (GitHub Pages)

Para que tu página esté visible para todo el mundo con un enlace público (ejemplo: `https://TU_USUARIO.github.io/visnova/`):

1. En tu repositorio de GitHub, haz clic en la pestaña **Settings** (Configuración ⚙️).
2. En el menú de la izquierda, busca y selecciona **Pages**.
3. En la sección **Build and deployment**:
   - **Source**: Selecciona `Deploy from a branch`.
   - **Branch**: Selecciona `main` y en la carpeta deja `/ (root)`.
4. Haz clic en **Save** (Guardar).
5. Espera 1 o 2 minutos, refresca la página y verás un recuadro verde con el enlace de tu página web en vivo.

---

*Guía creada para el proyecto VisNova Wellness.*
