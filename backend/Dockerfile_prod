FROM node:lts-alpine

LABEL maintainer="ZAP Group"


RUN mkdir -p /backend

RUN npm install nodemon -g

WORKDIR /backend


COPY package.json /backend
RUN npm install 

COPY . /backend

EXPOSE 3030
EXPOSE 9229

CMD ["npm","start"]