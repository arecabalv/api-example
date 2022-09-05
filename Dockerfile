FROM node:14-alpine AS develop

RUN apk --update add nodejs
WORKDIR /usr/src/app/
COPY . .
ENV PORT=3000
RUN npm i
ARG NODE_ENV
ARG CONSUL_HTTP_TOKEN
ENV APP_ENV=${NODE_ENV}
ARG CONSUL_HTTP_ADDR=${CONSUL_HTTP_ADDR}
ARG CONSUL_HTTP_TOKEN=${CONSUL_HTTP_TOKEN}


## Add Certificate Validation and consul
RUN apk add --no-cache ca-certificates && update-ca-certificates
ARG CONSUL_TEMPLATE_VERSION=0.25.1
RUN wget "https://releases.hashicorp.com/consul-template/${CONSUL_TEMPLATE_VERSION}/consul-template_${CONSUL_TEMPLATE_VERSION}_linux_amd64.tgz"
RUN tar zxfv consul-template_${CONSUL_TEMPLATE_VERSION}_linux_amd64.tgz
RUN docker/entrypoint.sh
RUN rm -f consul-template_${CONSUL_TEMPLATE_VERSION}_linux_amd64.tgz
RUN rm -f consul-template
RUN npm run build
COPY . .

EXPOSE 3000
CMD ["npm", "run", "prod"]

