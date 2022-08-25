FROM node:14-alpine

RUN apk --no-cache add curl

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . /app
COPY .env.example /app/.env

RUN npm run build

CMD npm run start:prod