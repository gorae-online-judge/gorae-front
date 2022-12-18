FROM node:16-alpine

# 빌드된 산출물을 실행시키기 위해 필요한 serve 모듈
RUN npm install -g serve

WORKDIR /app

COPY package*.json .
RUN npm install --legacy-peer-deps
COPY . .

CMD ["npm", "start"]
