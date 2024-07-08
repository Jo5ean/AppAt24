# Establecer la imagen base
FROM node:lts

# Establecer el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Exponer el puerto que se utilizará
EXPOSE 80

# Comando para ejecutar la aplicación
CMD [ "npm", "start" ]