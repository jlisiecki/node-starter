FROM node:18-alpine
WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

RUN npm install pm2 -g

CMD ["pm2-runtime", "ecosystem.config.js"]

EXPOSE $PORT