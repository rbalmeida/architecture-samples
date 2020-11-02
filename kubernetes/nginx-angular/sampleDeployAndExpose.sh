kubectl apply -f ./web-app-deploy.yalm
kubectl expose deployment optimization-webapp --type=LoadBalancer --port=8080 --name=optimization-service

