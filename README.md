# 🌤️ Clima Weather App

Una aplicación del tiempo moderna y elegante desarrollada con React, Vite y Electron. Obtén información meteorológica en tiempo real de cualquier ciudad del mundo con una interfaz intuitiva y atractiva.

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.1.4-646CFF.svg)](https://vitejs.dev/)
[![Electron](https://img.shields.io/badge/Electron-29.1.0-47848F.svg)](https://www.electronjs.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 📋 Descripción

Clima Weather App es una aplicación multiplataforma que te permite consultar el clima actual de cualquier ciudad del mundo. Muestra información detallada como temperatura actual, sensación térmica, humedad, velocidad del viento y presión atmosférica, todo con una interfaz oscura moderna y minimalista.

## ✨ Características

- 🌍 **Búsqueda global**: Consulta el clima de cualquier ciudad del mundo
- 🌡️ **Información completa**: Temperatura, sensación térmica, humedad, viento y presión
- 🎨 **Interfaz moderna**: Diseño oscuro elegante y responsivo
- 💻 **Multiplataforma**: Funciona como aplicación web y aplicación de escritorio (Windows, macOS, Linux)
- ⚡ **Rendimiento óptimo**: Construida con Vite para una experiencia ultrarrápida
- 🔄 **Actualizaciones en tiempo real**: Datos meteorológicos actualizados de OpenWeatherMap API

## 🛠️ Tecnologías utilizadas

- **React 18.2** - Librería de UI
- **Vite 5.1** - Build tool y dev server
- **Electron 29** - Framework para aplicaciones de escritorio
- **FontAwesome** - Iconos
- **OpenWeatherMap API** - Datos meteorológicos
- **CSS3** - Estilos personalizados

## 📋 Requisitos previos

- Node.js (versión 20 o superior)
- npm o yarn
- Clave API de OpenWeatherMap (gratuita en [openweathermap.org](https://openweathermap.org/api))

## 🚀 Instalación

1. **Clona el repositorio**
```bash
git clone https://github.com/cmurestudillos/clima-widget.git
cd clima-widget
```

2. **Instala las dependencias**
```bash
npm install
```

3. **Configura tu API Key** (opcional)

Crea un archivo `.env` en la raíz del proyecto:
```env
VITE_WEATHER_API_KEY=tu_api_key_aqui
```

O utiliza la API key incluida en el código para pruebas.

## 💻 Uso

### Modo Web (Desarrollo)

```bash
npm run dev
```

Abre tu navegador en `http://localhost:3000`

### Modo Electron (Desarrollo)

```bash
npm run electron:dev
```

Esto iniciará el servidor de desarrollo y abrirá la aplicación de escritorio automáticamente.

### Vista previa de la build

```bash
npm run preview
```

## 📦 Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo web
- `npm run build` - Construye la aplicación para producción (web)
- `npm run preview` - Vista previa de la build de producción
- `npm run electron:dev` - Inicia la aplicación en modo Electron desarrollo
- `npm run electron:build` - Construye y empaqueta la aplicación de escritorio
- `npm run prerelease` - Crea el ejecutable sin publicar
- `npm run release` - Crea el ejecutable y lo prepara para distribución
- `npm run lint` - Ejecuta el linter de código

## 🏗️ Construcción para producción

### Web

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `build/`

### Aplicación de escritorio

```bash
npm run electron:build
```

Los instaladores se generarán en la carpeta `release/`

Formatos disponibles:
- **Windows**: `.exe` (NSIS installer)
- **macOS**: `.dmg`
- **Linux**: `.AppImage`

## ⚙️ Configuración

### Cambiar ciudad por defecto

En `src/App.jsx`, modifica:
```javascript
const [currCity, setCurrCity] = useState('Madrid'); // Cambia 'Madrid' por tu ciudad
```

### Personalizar estilos

Los estilos se encuentran en `src/styles/style.css`. Puedes modificar:
- Colores de tema
- Tamaños de fuente
- Espaciados
- Efectos visuales

## 📁 Estructura del proyecto

```
clima-widget/
├── electron/
│   └── main.js              # Proceso principal de Electron
├── src/
│   ├── assets/              # Iconos e imágenes
│   │   ├── icon.png
│   │   ├── icon.ico
│   │   └── icon.icns
│   ├── components/          # Componentes React
│   │   ├── WeatherHeader.jsx
│   │   └── WeatherBody.jsx
│   ├── utils/               # Utilidades
│   │   ├── convertTimeStamp.js
│   │   └── convertCountryCode.js
│   ├── styles/              # Estilos CSS
│   │   └── style.css
│   ├── App.jsx              # Componente principal
│   └── main.jsx             # Punto de entrada
├── public/                  # Archivos públicos
├── package.json
├── vite.config.js           # Configuración de Vite
└── README.md
```

## 🤝 Contribución

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👤 Autor

**Tu Nombre**

- GitHub: [@tu-usuario](https://github.com/cmurestudillos)

## 🙏 Agradecimientos

- [OpenWeatherMap](https://openweathermap.org/) por proporcionar la API meteorológica
- [FontAwesome](https://fontawesome.com/) por los iconos
- [Electron](https://www.electronjs.org/) por el framework de aplicaciones de escritorio

## 📊 Estado del proyecto

🟢 Activo - El proyecto está en desarrollo activo y acepta contribuciones.

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!