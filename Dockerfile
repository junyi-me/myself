FROM node:22 AS builder
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build
RUN npm prune --production

FROM node:22
WORKDIR /app
COPY --from=builder /app/build build/
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]

