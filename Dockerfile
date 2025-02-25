# Base Image
FROM node:14

# Working Directory setting 
WORKDIR /usr/src/app

# Copy File package.json 
COPY package*.json ./

# install npm install & yarn install
RUN yarn

# Application Code Copy
COPY . .

# Application run
CMD ["node", "index.js"]

# Container Port Setting 
EXPOSE 3000