#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v20.5.0/bin

cd deploying-backend
 git pull origin master
 pm2 kill
 pm2 start index.js