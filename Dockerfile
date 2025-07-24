    # Stage 1: Build the Vue.js application
    FROM node:lts-alpine as build-stage
    WORKDIR /app
    COPY package*.json ./
    RUN npm install
    COPY . .
    RUN npm run build

    # Stage 2: Serve the built application with Nginx
    FROM nginx:stable-alpine as production-stage
    COPY --from=build-stage /app/dist /usr/share/nginx/html
    COPY nginx.conf /etc/nginx/conf.d/default.conf # Create this file
    EXPOSE 80
    CMD ["nginx", "-g", "daemon off;"]