# Usar una imagen base de Node.js
FROM node:18
# Establecer el directorio de trabajo
WORKDIR /app
# Copiar el package.json y package-lock.json
COPY package*.json ./
# Instalar las dependencias
RUN npm install
# Copiar el resto del código
COPY . .
# Exponer el puerto en el que corre el backend 
EXPOSE 5000
# Comando para iniciar el servidor
CMD ["npx", "nodemon", "index.js"]

