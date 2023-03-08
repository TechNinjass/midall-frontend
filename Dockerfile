FROM node:16.13.2-alpine as build-stage

WORKDIR /app
RUN npm install npm@latest
RUN npm install
