# Use an official Node.js runtime as a parent image

FROM --platform=linux/amd64 node:18-alpine

# Set the working directory in the container

WORKDIR /frontend

# Copy package.json and package-lock.json to the working directory
COPY dist/ /frontend/dist
COPY src/ /frontend/src
COPY package*.json /frontend/
COPY . ./
# Install project dependencies
# Update npm and clear cache before installing
RUN npm install -g npm@latest && npm cache clean --force
# Install dependencies
RUN npm install --legacy-peer-deps
# Copy the rest of the application code to the working directory
#
#COPY . .
#
## Build the React application
#
#RUN npm run build
#
## Expose the port on which your React app will run (default is 3000)
#
#EXPOSE 3000
#
## Start the React app
#
#CMD ["npm", "start"]


# 暴露应用程序运行的端口
EXPOSE 80
CMD ["npm", "start"]
