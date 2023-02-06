
FROM node:18-alpine
WORKDIR  "/super/backend/"
RUN npm install -g npm@8.11.0
RUN npm i -g ts-node
RUN npm i -g nodemon
# RUN npm config set http-proxy http://<my company proxy>:8099
# RUN npm config set https-proxy http://<my company proxy>:8099


COPY package.json /super/backend/
COPY package-lock.json /super/backend/
RUN  npm -v
RUN  npm install
EXPOSE 8082
COPY ./ ./
ENTRYPOINT npm start
