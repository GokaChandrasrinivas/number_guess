# Use a lightweight Node.js image as base
FROM node:alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the project (if needed)
RUN npm run build

# Use NGINX as a web server
FROM nginx:alpine

# Copy the built project from the previous stage to NGINX's web root directory
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start NGINX server when the container starts
CMD ["nginx", "-g", "daemon off;"]
