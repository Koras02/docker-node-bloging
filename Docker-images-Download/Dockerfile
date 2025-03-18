# Base image
FROM node:14 

# Set the working directory
WORKDIR /the/src/app

# Copy package.json and package-lock.json 
COPY package*.json ./ 

# Install dependencies 
RUN yarn install 

# Copy the rest of the application code 
COPY . . 

# Expose the application port 
EXPOSE 3000 

# Command to run the application 
CMD ["node", "app.js"]