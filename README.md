# My website

docker build -t davidmottet .

docker stack deploy davidmottet --compose-file stack.yml


openssl genrsa -des3 -out server.key 1024
openssl req -new -key server.key -out server.csr
//Création d'un backup
cp server.key server.key.org
openssl rsa -in server.key.org -out server.key
openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt