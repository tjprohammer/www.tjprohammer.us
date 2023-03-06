FROM nginx

EXPOSE 80

RUN rm /usr/share/nginx/html/*


COPY ./config/default.conf /etc/nginx/conf.d/default.conf
COPY ./key.crt /etc/ssl/certs/key.crt
COPY ./key.key /etc/ssl/private/key.key
# COPY --from=build /client/build /usr/share/nginx/html
# COPY /client/build /usr/share/nginx/html
# COPY /portfolio/build /usr/share/nginx/html-portfolio

CMD ["nginx", "-g", "daemon off;"]
