FROM node:latest

# Set the working directory
WORKDIR /app
# Copy project specification and dependencies lock files
COPY package.json ./

RUN npm install


# Copy app sources
COPY . .

# Create env.yaml file inside container
# COPY env.example.yaml env.yaml

# Run linters and tests
# RUN yarn lint && yarn test

# Expose application port
EXPOSE 3000
# In production environment
RUN npm run build
# ENV NODE_ENV production
# Run
CMD ["npm", "start"]
