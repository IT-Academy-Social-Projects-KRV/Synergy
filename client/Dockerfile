FROM node:16.13.0

WORKDIR /client

COPY package.json .

RUN npm install -g

COPY . /client

EXPOSE 3000

CMD npm start