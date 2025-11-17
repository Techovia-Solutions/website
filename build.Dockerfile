# ===============================
# 1. Build Stage
# ===============================
FROM node:20-alpine AS build

# Install pnpm globally
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy package files (better caching)
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install

# Copy project files
COPY . .

# Build (same as Amplify)
RUN npm run build


# ===============================
# 2. Nginx Serve Stage
# ===============================
FROM nginx:alpine

# Copy build output to nginx root
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
