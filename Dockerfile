# Usamos una imagen base oficial de Node.js
FROM node:18-slim

# Establecemos el directorio de trabajo
WORKDIR /app

# Copiamos los archivos de configuración
COPY package.json package-lock.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos todo el código fuente
COPY . .

# Construimos la aplicación de Next.js
RUN npm run build

# Exponemos el puerto que Next.js utilizará
EXPOSE 3000

# Comando para iniciar el servidor Next.js
CMD ["npm", "run", "start"]