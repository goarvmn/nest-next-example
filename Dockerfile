FROM node:14-alpine

WORKDIR /app

RUN apk --no-cache add curl

COPY package*.json ./
RUN npm install

COPY . /app
COPY .env.example /app/.env

RUN npm run build

CMD npm run start:prod