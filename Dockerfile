FROM node:16.17.0
WORKDIR /app
COPY . .
RUN npm install
# RUN npx prisma migrate dev
# RUN npm run prisma:start
# RUN npm run prisma:migrate
CMD [ "npm", "start" ]
