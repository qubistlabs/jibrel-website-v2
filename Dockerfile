FROM node:8-onbuild AS build

RUN npm run build

FROM nginx:alpine

ENV AUTOPILOT_API_KEY=undefined
ENV HOSTNAME=localhost

RUN wget https://github.com/jibrelnetwork/dockerize/releases/latest/download/dockerize-alpine-linux-amd64-latest.tar.gz \
 && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-latest.tar.gz \
 && rm dockerize-alpine-linux-amd64-latest.tar.gz

COPY --from=build /usr/src/app/build/. /app/
COPY version.txt /app/
COPY nginx.tpl.conf /etc/nginx/
COPY run.sh /bin/run.sh

RUN ["run.sh", "check"]
CMD ["run.sh", "start"]
