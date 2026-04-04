FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install && npm install react-router-dom clsx maplibre-gl

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]