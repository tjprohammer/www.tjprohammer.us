# Stage 1
FROM node:16.14.0-alpine AS build

WORKDIR /client

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

#Stage 2
FROM nginx:1.23-alpine

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

EXPOSE 80

COPY --from=build /client/build /usr/share/nginx/html
COPY ./nginx/config/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=build /server/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
