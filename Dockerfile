FROM node:14-slim
LABEL maintainer="abdumalik.imenov@optimabank.kg"

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

RUN npm config set strict-ssl false

RUN npm install

RUN npm config set strict-ssl true

COPY . /usr/src/app

CMD [ "npm", "start" ]