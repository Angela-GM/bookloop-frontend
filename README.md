# 📘 Bookloop Frontend – Interfaz de usuario con Next.js

Este repositorio contiene el frontend de **Bookloop**, una plataforma para intercambiar libros usando una moneda virtual llamada **Bookis**.  
La interfaz está construida con Next.js y Tailwind CSS, optimizada para SSR y experiencia de usuario fluida.

---

## 🚀 Stack tecnológico

- **Framework:** [Next.js](https://nextjs.org/) (App Router + SSR)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Lenguaje:** TypeScript
- **Fuentes:** Geist Sans / Geist Mono vía `next/font`
- **Testing:** Jest (unitario) + Playwright (end-to-end)
- **CI/CD:** Vercel + GitHub Actions

---

## 📦 Instalación

```bash
# Clonar el repositorio del backend
git clone https://github.com/tu-usuario/bookloop-backend.git
cd bookloop-backend

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run start:dev
```

Esto levanta el servidor en http://localhost:3000

## 🧩 Estructura del proyecto

```bash
bookloop-frontend/
├── app/                  # Rutas y layout principal
│   └── layout.tsx        # Layout raíz con fuentes y clases globales
├── styles/
│   └── globals.css       # Variables CSS y configuración de Tailwind
├── public/               # Archivos estáticos
├── tailwind.config.js    # Configuración extendida de Tailwind
├── tsconfig.json         # Configuración de TypeScript
└── README.md             # Este archivo
```

## ✨ Funcionalidades cubiertas (Sprint 1)

[x] Diseñar wireframes (flujo principal + pantallas clave)

[/] Separar proyecto en dos repositorios independientes (Next.js + NestJS)

[ ] Configurar CI/CD con GitHub Actions (test + deploy)

[ ] Modelar base de datos inicial con Prisma: User, Book, Bookis

[ ] Autenticación JWT + Passport (registro, login, roles)

[ ] Integrar Cloudinary para portadas y perfiles


## 🤝 Contribuir 
Aunque actualmente el desarrollo está liderado por Angela, es posible que se sume alguien más en el futuro. Para facilitarlo: 

- Consulta el archivo `CONTRIBUTING.md` 
- Sigue las reglas de estilo y commit definidas 

--- 
## 📜 Licencia Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles. 
--- 
## 👩🏻‍💻 Autora Desarrollado con 💜 por **Angela** 
🔗 [GitHub](https://github.com/Angela-GM) 💼 [LinkedIn](https://www.linkedin.com/in/angela-garcia-mu) 🌐 [Portfolio](#)
