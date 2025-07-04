FROM node:18.16.0-alpine as production
ENV APP_ROOT /web
ENV NITRO_PRESET node_cluster

RUN apk add --no-cache tzdata git
ENV TZ Asia/Yekaterinburg

WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN npm ci

RUN npm run build
CMD node .output/server/index.mjs

FROM node:18.16.0-alpine as development
ENV APP_ROOT /web

RUN apk add --no-cache tzdata git
ENV TZ Asia/Yekaterinburg

WORKDIR ${APP_ROOT}

CMD node