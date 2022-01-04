FROM node:16.13.0

WORKDIR /api

COPY package.json .

RUN npm install -g

RUN npm install --save sequelize

RUN npm install -g sequelize-cli

RUN npx sequelize-cli init

RUN npm install mysql2 --save

#RUN npx sequelize db:migrate

#RUN npx sequelize db:seed:all

COPY . /api

EXPOSE 4000

CMD npm start