eval $(minikube -p minikube docker-env)
./run-docker-build.sh
kubectl apply -f deployment.yalm