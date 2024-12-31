# Use a lightweight Nginx base image
FROM nginx:alpine

# Copy your app files to the Nginx default directory
COPY ./index.html /usr/share/nginx/html/
COPY ./style.css /usr/share/nginx/html/
COPY ./script.js /usr/share/nginx/html/

# Expose the default port 80
EXPOSE 80
