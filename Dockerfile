FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# Clear cache before install
RUN npm cache verify

# If you are building your code for production
# RUN npm install --only=production
RUN npm install

# Bundle app source
COPY . .

EXPOSE 8081

CMD [ "npm", "start" ]
#CMD [ "npm", "install sails -g"]
