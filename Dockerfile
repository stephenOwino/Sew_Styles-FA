# Stage 1: Build the React application
FROM node:22.1.0 AS react-build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install npm dependencies
RUN npm install

# Copy the rest of the React app source code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Setup the Spring Boot application
FROM openjdk:21-jdk-slim AS backend 

# Set the working directory
WORKDIR /app

# Copy the Spring Boot application JAR file
COPY target/my-spring-boot-app.jar ./app.jar

# Copy the built React application from the previous stage
COPY --from=react-build /app/build ./src/main/resources/static

# Expose the port the app runs on
EXPOSE 8080

# Command to run the Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]
