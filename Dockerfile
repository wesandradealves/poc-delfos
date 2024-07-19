# Usa uma imagem base do Node.js
FROM node:20-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /frontend

# Copia o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install --legacy-peer-deps

# Copia todo o código fonte para o diretório de trabalho
COPY . .

# # Constrói o aplicativo React para produção
# RUN npm run build

# Expõe a porta 3000 para o mundo exterior
EXPOSE 3000

# Define o comando para executar o aplicativo quando o contêiner for iniciado
CMD ["npm", "run", "dev"]