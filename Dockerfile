# base image
FROM node:6.13.0

# set working directory
RUN mkdir -p /src/proxyserver
WORKDIR /src/proxyserver

# copy source code
COPY . /src/proxyserver

# install dependencies
RUN npm install

# port
EXPOSE 3000

# start app
CMD ["npm", "start"]