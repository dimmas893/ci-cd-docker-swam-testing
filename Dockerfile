# Stage 1: Build the Node.js app
FROM node:16-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy the application code
COPY . .

# Expose port 3000
EXPOSE 3000

# Command to run the app
CMD ["node", "app.js"]
