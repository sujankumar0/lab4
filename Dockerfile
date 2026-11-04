#stage 1-build stage

#base node as image
FROM node:18 AS build

#Working directory
WORKDIR /app

#copy the jsonfile
COPY package*.json ./

#Run the command to install npm
RUN npm install

#copy all files
COPY . .

#satge 2- Runtime stage
CMD ["node", "index.js"] 
