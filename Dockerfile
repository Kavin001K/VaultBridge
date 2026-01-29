# Use Node 20 as the base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first to leverage Docker cache
COPY package*.json ./

# Install ALL dependencies (needed for the build script)
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application (runs your script/build.ts)
# This compiles the React frontend and the Node backend
RUN npm run build

# The app listens on port 5001 by default
EXPOSE 5001

# Set production environment
ENV NODE_ENV=production

# Start the server using the built artifact
CMD ["npm", "start"]
