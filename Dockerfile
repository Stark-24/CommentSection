# Instructions copied from - https://hub.docker.com/_/node/
FROM node:6.4.0-onbuild

# Set the working directory
WORKDIR /dockerFolder

# Copy the current directory contents into the container at /app
ADD . /dockerFolder

# Install any needed packages specified in requirements.txt
RUN npm install

# tell the port number the container should expose
EXPOSE 9003

# run the command
CMD ["npm", "start"]
