FROM node:10

WORKDIR /user/garden/

COPY . .
RUN rm -rf node_modules
RUN apt-get update
RUN apt-get install -y apt-utils build-essential python apt-utils
# RUN apk --no-cache add --virtual builds-deps build-base python
RUN npm i

EXPOSE 3000

CMD npm start
