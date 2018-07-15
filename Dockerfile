FROM node:10-alpine
WORKDIR /app
EXPOSE 3000 9229
COPY package*.json ./
RUN npm i
COPY . /app
CMD ["npm", "start"]
