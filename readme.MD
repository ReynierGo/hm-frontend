# HM - FrontEnd ![HM FrontEnd](https://img.shields.io/badge/version-1.0.0-blue.svg)

## Descripción 📜

Este es el frontend de la aplicación de Pokémon construida con **Next.js**, **TailwindCSS** y **Shadcn/UI**. La aplicación obtiene la información de los Pokémon de una API de FastAPI y muestra una lista de tarjetas de Pokémon. Además, cuenta con un buscador para filtrar los Pokémon por nombre.

## Requisitos 📋

Antes de empezar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 18 o superior) ⚡
- [npm](https://www.npmjs.com/) (gestor de paquetes de Node.js) 📦

Si deseas utilizar Docker, asegúrate de tener [Docker](https://www.docker.com/) instalado. 🐋

## Instalación 🚀

1. Clona este repositorio a tu máquina local:

   ```bash
   git clone https://github.com/ReynierGo/hm-frontend.git

2. Para ejecutar el contenedor docker:

   ```bash
   docker build -t hm-frontend .
   docker run -p 3000:3000 hm-frontend


