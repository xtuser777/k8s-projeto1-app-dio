#!/bin/zsh

echo "Criando as imagens..."

docker build -t xtuser777/backend-kubernetes:1.0 backend/.
docker build -t xtuser777/database-kubernetes:1.0 database/.

echo "Criando serviços no cluster kubernetes..."

kubectl apply -f ./services.yml

echo "Criando deployments no cluster kubernetes..."

kubectl apply -f ./deployment.yml
