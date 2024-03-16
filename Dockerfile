# Use NGINX as base image
FROM nginx:alpine

# Copy the static files to NGINX's web root directory
COPY . /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start NGINX server when the container starts
CMD ["nginx", "-g", "daemon off;"]

