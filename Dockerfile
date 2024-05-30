#FROM node:lts-alpine as build-stage
#WORKDIR /app
#COPY package*.json ./
#RUN npm install -g npm@latest
#COPY . .
#RUN npm run build
#
#FROM nginx:stable-alpine as production-stage
#COPY --from=build-stage /app/dist /usr/share/nginx/html
#COPY ./nginx.conf /etc/nginx/conf.d/default.conf
#CMD ["nginx", "-g", "daemon off;"]
#EXPOSE 80
# Utilisez l'image Node.js LTS Alpine comme image de base
FROM node:lts-alpine

# Installe un simple serveur HTTP pour servir un contenu statique
RUN npm install -g http-server

# Définit le dossier 'app' comme dossier de travail
WORKDIR /app

# Copie 'package.json' et 'package-lock.json' (si disponible)
COPY package*.json ./

# Installe les dépendances du projet
RUN npm install

# Copie les fichiers et dossiers du projet dans le dossier de travail
COPY . .
# Construit l'application pour la production en la minifiant
RUN npm run build

# Expose le port 8080 pour que l'application soit accessible à l'extérieur du conteneur

# Commande par défaut pour démarrer l'application lorsque le conteneur démarre
CMD [ "npm", "start" ]
