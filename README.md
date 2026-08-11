# Portafolio — Uriel Angel Briceño Rondon (tema Kali Linux)

Portafolio construido en **React + Vite + Tailwind CSS**, bilingüe (ES/EN) con `react-i18next`,
animaciones con `framer-motion` e íconos con `lucide-react`.

## 1. Cómo abrirlo en VS Code y ejecutarlo

1. Descomprime el `.zip` y abre la carpeta `kali-portfolio` en VS Code.
2. Abre una terminal en VS Code (**Terminal > New Terminal**) y ejecuta:

   ```bash
   npm install
   npm run dev
   ```

3. Abre el navegador en la URL que aparece en la terminal (normalmente `http://localhost:5173`).

Requisitos: tener **Node.js 18 o superior** instalado (revisa con `node -v`; si no lo tienes,
descárgalo de https://nodejs.org).

Para generar la versión final de producción (para subir a Vercel, Netlify, GitHub Pages, etc.):

```bash
npm run build
```

Esto genera la carpeta `dist/` lista para subir a cualquier hosting estático.

## 2. Dónde editar tu información real

Todo tu contenido está separado del diseño, en `src/data/`:

| Archivo | Qué contiene |
|---|---|
| `src/data/profile.js` | Nombre, foto, ubicación, email, teléfono, redes sociales (LinkedIn, GitHub, WhatsApp) |
| `src/data/skills.js` | Categorías del "Cybersecurity Arsenal" y su lista de tecnologías |
| `src/data/experience.js` | Tu experiencia laboral (con título y descripción en español **y** en inglés) |
| `src/data/projects.js` | Tus proyectos destacados (con título/descripción en ambos idiomas) |
| `src/components/Labs.jsx` | Lista de laboratorios/prácticas (arriba del archivo, array `labs`) |
| `src/components/Certifications.jsx` | Lista de certificaciones (arriba del archivo, array `certifications`) |

Cada archivo tiene un comentario `EDITA AQUÍ` al inicio indicando qué cambiar.

### Foto de perfil
Agrega tu foto como `public/profile.jpg` (no viene incluida). Si usas otro nombre, actualiza
el campo `photo` en `src/data/profile.js`.

### CV / Resume
Coloca tu currículum en `public/CV.pdf` para que el botón "Descargar CV" funcione.

### Redes sociales
En `src/data/profile.js`, actualiza:
```js
social: {
  linkedin: "https://www.linkedin.com/in/TU-USUARIO",
  github: "https://github.com/TU-USUARIO",
  whatsapp: "https://wa.me/51999991165",
},
```

## 3. Cómo funciona el bilingüe (ES / EN)

No usa el traductor automático de Google (da traducciones poco naturales para un portafolio
profesional). En su lugar usa **react-i18next**, el estándar en proyectos React:

- Los textos fijos de la interfaz (títulos de sección, botones, etiquetas) están en
  `src/locales/es.json` y `src/locales/en.json`.
- Los textos que dependen de tu contenido (experiencia, proyectos) tienen sus dos versiones
  directamente en `src/data/experience.js` y `src/data/projects.js` (campos `_es` y `_en`).
- El botón **ES / EN** en la barra superior cambia el idioma al instante y lo recuerda
  (queda guardado en el navegador del visitante).

Si agregas una sección nueva: pon el texto en ambos JSON (`es.json` y `en.json`) con la
misma clave, y en el componente usa `t("clave.hijo")` con el hook `useTranslation()`.

## 4. Estructura del proyecto

```
src/
  components/     -> Todas las secciones visuales (Sidebar, Hero, About, Arsenal, etc.)
  data/           -> Tu contenido editable (perfil, skills, experiencia, proyectos)
  locales/        -> Traducciones de la interfaz (es.json, en.json)
  i18n.js         -> Configuración de react-i18next
  App.jsx         -> Ensambla todas las secciones
  index.css       -> Estilos globales y paleta de colores tema Kali
tailwind.config.js -> Paleta de colores, tipografías y sombras del tema
```

## 5. Personalizar colores

La paleta está centralizada en `tailwind.config.js` (colores `void`, `panel`, `cyan`, `term`,
`ink`). Si quieres cambiar el acento cian por otro color, solo cambias el valor hex de
`cyan.DEFAULT` y `cyan.glow` ahí y se actualiza en todo el sitio.

## 6. Despliegue gratuito recomendado

- **Vercel** (recomendado, conecta tu repo de GitHub): https://vercel.com
- **Netlify**: https://netlify.com

Ambos detectan automáticamente que es un proyecto Vite; solo conecta tu repositorio.
