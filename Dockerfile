FROM cypress/base:14.10.1

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN npm install

RUN $(npm bin)/cypress verify

CMD ["npm", "run", "cypress:e2e"]
