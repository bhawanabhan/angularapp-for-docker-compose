FROM node

WORKDIR /app

COPY . .

RUN npm install -g json-server

EXPOSE 3000

CMD ["json-server", "--host", "0.0.0.0", "data.json"]
