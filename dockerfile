FROM node:10.16.0

# RUN useradd --user-group --create-home --shell /bin/false app &&\ npm install --global npm

ENV HOME=/home/app

COPY   package.json  $HOME/api-account/

# RUN chown -R app:app $HOME/*

WORKDIR $HOME/api-account

RUN npm install -g mongo-seeding-cli

RUN npm install

RUN npm shrinkwrap

# USER root

COPY . $HOME/api-account


# CMD ["npm","run dev"]