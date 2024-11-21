# Changelog - Express Docker with GitHub Actions

## 1. Initial Setup
- Created basic Express server
  - GET / endpoint returning "Hello world! Docker"
  - Port 3000
- Created Dockerfile
  ```dockerfile
  FROM node:18-alpine
  WORKDIR /app
  COPY package*.json ./
  RUN npm install
  COPY . .
  EXPOSE 3000
  CMD ["npm", "start"]
  ```

## 2. Local Docker
- Tested local build: `docker build -t express-app .`
- Tested local run: `docker run -p 3000:3000 express-app`
- Verified localhost:3000 connection

## 3. Docker Hub
- Created Docker Hub account
- Generated access token
- Tested manual publishing to Docker Hub
  ```bash
  docker tag express-app username/express-app
  docker push username/express-app
  ```

## 4. GitHub Actions CI/CD
- Created workflow in `.github/workflows/docker-publish.yml`
- Configured GitHub secrets:
  - DOCKER_USERNAME
  - DOCKER_TOKEN
- Automated pipeline for:
  - Image building
  - Pushing to Docker Hub

## 5. Tests
- Added dependencies:
  ```json
  "devDependencies": {
    "jest": "^29.7.0",
    "supertest": "^6.3.3"
  }
  ```
- Separated logic into:
  - `app.js`: Express logic
  - `server.js`: Server initialization
  - `test/app.test.js`: Tests
- Created test to verify "hello" response
- Integrated test into GitHub Actions pipeline



## 6. Current Pipeline
1. Run tests
2. If tests pass:
   - Build Docker image
   - Push to Docker Hub
3. If tests fail:
   - Pipeline stops
   - No new image is published


```bash
# Local Development
npm install
npm test
npm start

# Docker Local
docker build -t express-app .
docker run -p 3000:3000 express-app

# Docker Hub
docker login
docker push username/express-app
```
