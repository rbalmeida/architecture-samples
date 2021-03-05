# Simple Python Http on Kubernetes
## Intent
Understand the simplest way in which we could deploy a very simple Python http application to a Kubernetes Cluster.

## Motivation
Sometimes we need to provide a very simple interface over http for a Python application. It could be a simple method execution, with low throuhgput and scalability requirements.

## Possible Solution
We could deploy a simple Python http server to expose the service of feature over http and provide a configuration to deploy it on Kubernetes.

## Experiment
In this experiment a very simple Python controller exposing an http port, simple_controller.py, was implemented.
A Dockerfile descriptor was used to specify an image to run this program and expose the http port. A Kubernetes deployment configuraiton was used to automate the deploy of this image to the cluster. The shell helper scripts were implemented to automate these steps and run them and a simple manual curl test was conducted after exposing the port to the local machine via the port forwarding feature of the cluster.

## Environment
This experiment was done on Ubuntu with a minikube Kubernetes cluster.

## Related Alternatives
Solutions that are more complex, which would required for example routing, complex logic on parameter parsing, would be better implemented with an existing library, for example Flask, to avoid having to manually implement those features.

## References
[1] https://docs.python.org/3/library/http.server.html<br>
[2] https://docs.python.org/3/library/http.server.html#http.server.BaseHTTPRequestHandler<br>
[3] https://wiki.python.org/moin/BaseHttpServer