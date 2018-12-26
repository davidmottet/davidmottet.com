FROM node:carbon-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i

COPY . .

CMD node app.js

EXPOSE 80
