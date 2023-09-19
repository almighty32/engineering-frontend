# #stage 1
FROM node:18.9.0-alpine3.15 As development
WORKDIR /app
RUN apk add --no-cache g++ make python3
ENV ENV_BACKEND_URI = ${ENV_BACKEND_URI}
COPY package*.json ./
COPY yarn.lock ./
RUN npm install
COPY . .
RUN npm run build

# #stage 2
FROM nginx:alpine
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY /nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# COPY /dist/ng-matero /usr/share/nginx/html
# COPY --from=build /app/dist/ng-matero /usr/share/nginx/html
COPY --from=development /app/dist/ng-matero /usr/share/nginx/html
