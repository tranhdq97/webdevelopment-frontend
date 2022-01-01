FROM node:alpine

WORKDIR /app

ENV PATH="./node_modules/.bin:$PATH"

COPY frontend .

RUN npm run build

CMD ["npm", "start"]
