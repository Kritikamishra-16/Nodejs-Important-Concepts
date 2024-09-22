# configuring base container
FROM node   

# working directory is bydefault the root directiry of your container but if we define it manually it will create that directory "/developer/nodejs" in the container and cd you in that directory
# WORKDIR /developer/nodejs
WORKDIR /developer/nodejs/my-server


# copy the entire project inside the container, here wea re copying everything in the current directory . to the working directory of container inside my-server folder so the entire path will be /developer/nodejs/my-server , here we have deleted node_modules bcz we want to npm i inside the container only 
# COPY . my-server/
COPY . .

# run specific command in container here we are doing doing npm ci (clean install) instead of npm i bcz npm ci install packages from package-lock.json file (so exact versions should be replicated) and npm i install packages from node_modules cache
RUN npm ci


CMD ["npm", "start"]

