
FROM node:12.19.0-alpine3.9 AS server-build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY src/ ./src/
COPY app.js .
COPY . .

EXPOSE 3500

CMD ["node", "app.js"]
