FROM node:18
WORKDIR /backendapp
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000
ENTRYPOINT [ "npm", "run" ]
CMD ["runserver"]
