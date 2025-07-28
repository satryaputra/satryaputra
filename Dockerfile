# Build stage
FROM node:lts-alpine AS build
WORKDIR /app
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

# Production stage
FROM httpd:2.4-alpine AS runtime
COPY --from=build /app/dist /usr/local/apache2/htdocs/
EXPOSE 80