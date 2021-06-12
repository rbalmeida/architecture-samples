# Volumes in Kubernetes
## Objective
The objective of this section is to gather information on experimentes and studies on the uses of volumes in kubernetes.

## Experiment
A simple experiment was conducted to evaluate the behavior of volumes. A Python program to randomly write messages to a file was created.
The deployment configuration has a Volume Claim mapped to the container.
Once the deployment was applied, it is possible to acess the pod and verify that it could obtain the volume and use it to write the file.

For the deployment in local minikunbe:

```Shell
./deploy-local-minikube.sh
```

To verify the output, enter in the pod with:

```Shell
kubectl exec -it random-writer -- /bin/bash
```

then check the file:

```Shell
tail -f /output/messages.txt
```

## Further Experiments
Many advanced options of volume usage would be dependent on a storage system, be it a NFS or a cloud provider based file system. It would be worth it to create other experiments with that options.

It would be interesting as well to do experiments with long term persistent storage, for example for database systems, or other systems in which the data should persist after pod deletion or in case of pod failure.

## References
[1] Volumes | Kubernetes. https://kubernetes.io/docs/concepts/storage/volumes/  
[2] Persistent Volumes | minikube. https://minikube.sigs.k8s.io/docs/handbook/persistent_volumes/  