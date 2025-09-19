<div align="center">
  <img src="./src/assets/favicon.ico" width="48" alt="Weather App Icon" style="vertical-align:middle;" />
  <h1 style="font-size:2.2em; vertical-align:middle; font-weight:bold; margin-left: 10px;">Weather App</h1>
</div>

<p align="center">
  Aplicación web para consultar el clima actual y pronóstico de tu ciudad favorita.
</p>

---

## 🚀 Descripción

Weather App es una aplicación desarrollada en React que permite consultar el clima actual, el pronóstico por horas y detalles meteorológicos como humedad, presión, visibilidad, viento y más. Utiliza una API de clima para obtener datos en tiempo real y presenta la información de forma clara y visual.

Puedes probar la app en producción aquí: [weather-app-psi-self.vercel.app](https://weather-app-psi-self.vercel.app)

## ✔️ Características principales

- Búsqueda de ciudades para ver el clima actual y pronóstico.
- Visualización de temperatura máxima y mínima.
- Información detallada: humedad, presión, visibilidad, viento, salida y puesta del sol/luna.
- Interfaz moderna y responsiva.

## 📦 Estructura del proyecto

```
weather-app/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── assets/
│   └── Components/
│   └── DataContext/
├── package.json
├── vite.config.js
└── README.md
```

## ⚙️ Instalación y uso

1. Clona el repositorio:

   ```bash
   git clone https://github.com/NavierCracco/Weather-App.git
   cd Weather-App/client
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Crea un archivo `.env.local` con tu clave de API de clima:

   ```env
   VITE_WEATHER_API_KEY=tu_api_key
   ```

4. Inicia la aplicación:

   ```bash
   npm run dev
   ```

5. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## 📝 Principales tecnologías

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- CSS Modules

---

## 👤 Autor y contacto

- **Navier Cracco**
- 📧 Email: <cracconavier@gmail.com>
- 💼: [LinkedIn](https://www.linkedin.com/in/navier-cracco-7112b1252/)
- 📱: +54 342 5378014

---

Hecho con ❤️ por Navier Cracco
