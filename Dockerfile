FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN 

EXPOSE 9000

CMD /bin/bash -c "sh update_target.sh && npm start"