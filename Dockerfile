FROM mhart/alpine-node:6.6

RUN npm install -g node-static

WORKDIR /www
EXPOSE 8080

CMD static --host-address 0.0.0.0 -p 8080 --gzip -H '{"Cache-Control": "no-cache, must-revalidate"}'