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

```shell
python ./receive.py
python ./send.py
```

The receive script will open a blocking program that will wait for messages. Messages sent by the second script can be checked in the terminal for the receiver.

## Experiment integrated with Kubernetes
(in progress)

## References
[1] RabbitMQ. https://www.rabbitmq.com/  
[2] RabbitMQ Tutorial. https://www.rabbitmq.com/tutorials/tutorial-one-python.html 
[3] RabbitMQ Docker Hub. https://hub.docker.com/_/rabbitmq