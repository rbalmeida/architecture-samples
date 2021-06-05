# Python interprocess communication with RabbitMQ

## Objective
The objective of this section is to gather information on experiments with Python interprocess communication using RabbitMQ

## Intent
We may need to integrate two Python processes with asynchronously. One possible solution is to use a messaging system, for example RabbitMQ.

## Manual Experiment
In this experiment a docker container with a RabbitMQ environment was used.
To start the docker container:

```shell
./start-local-docker-rabbitmq.sh
```

After that, the Python scripts were used to send and receive messages.
The sender will send messages with ramdon sleep intervals.

```shell
python ./receive.py
python ./send.py
```

The receive script will open a blocking program that will wait for messages. Messages sent by the second script can be checked in the terminal for the receiver.

## Experiment integrated with Kubernetes
With the sample python programs created an experiment was prepared for Kubernetes.

Based on a python base image, two images were created for the send and receive programs. The two Dockerfiles, Dockerfile-receiver and Dockerfile-sender were used to build these images. These build files copy the scripts in to the image and install the required library, Pika.

A Kubernetes deployment configuration was defined to deploy these images and a RabbitMQ image into a single Pod. As they are in the same pod, both python clients can connect to the RabbitMQ using localhost. In a different approach where the MQ pod is in another Pod a different host name could be used for the connection.

The RabbitMQ image used provides a web app for management on port 15672, so a service definiton was configured to expose this port for monitoring.

With this helper script, the images can be build and the deployment applied to a local minikube cluster:

```shell
./deploy-local-minikube.sh
```


## References
[1] RabbitMQ. https://www.rabbitmq.com/  
[2] RabbitMQ Tutorial. https://www.rabbitmq.com/tutorials/tutorial-one-python.html  
[3] RabbitMQ Docker Hub. https://hub.docker.com/_/rabbitmq  
[4] Introduction to Pika. https://pika.readthedocs.io/en/stable/