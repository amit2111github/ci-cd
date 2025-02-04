from node
RUN mkdir -p /app
workdir /app
copy ./ .
RUN npm install
cmd ["npm" , "run","start" ]