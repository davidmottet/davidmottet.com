FROM node:carbon-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i

COPY . .

CMD node index.js

EXPOSE 80
