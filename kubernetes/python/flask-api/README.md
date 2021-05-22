# Python Flask on Kubernetes
## Intent
Understand the alternatives for Python Flask API deployment to a Kubernetes Cluster.

## Motivation
We may need to deploy a more robust Python API, with more complex interfaces, requests or responses, in a reliable and scalable manner.

## Possible Solution
We could deploy a Python Flask API server on Kubernetes. There are appropriate servers for Python Flask for production environments or environments that have more reliability requirements.
One option would be to deploy an image with one of these servers together with the application to a Kubernetes cluster.
As for the options described on [4], we could run uwsgi directly, or we could put it behind a full server, for example nginx.


## Experiment

### Experiment plan (in progress)
- [X] Experiment uWSGI alone with Flask
- [X] Evaluate proper usage of virtualenvs for these deployment options
- [X] Evaluate and create the Dockerfile for image build
- [X] Evaluate and create the Kubernetes deployment configurations
- [ ] Experiment uWSGI alone with Nginx

### Gunicorn
To execute the app with Gunicorn the following helper script can be used:
````shell
./start-flask-gunicorn.sh
````

### uWSGI
After some trials, it was possible to setup uWSGi in a virtual environment. The main issues were related to virtual env configuration and the insallation of Python headers.

For Python headers:
````shell
sudo apt-get install python3-dev
````
After that, proper virtual env and required dependencies were installed. 
The commands to setup the virtual env can be run with this util script:

````shell
./setup-venv-uwsgi.sh
````

The Flask application with uWSGI can then be run with:

````shell
./start-flask-uwsgi-local-venv.sh
````
This script will start a simple Flask app in main.py on port 9191 of the localhost with the Python virtual environment created by the virtual env setup script.

To check if is running properly:
````shell
curl localhost:9191
````

### Network configurations for external exposure
In orther for uWSGI to be available outside the container or kubernetes, the start url had to be 0.0.0.0.

### Deployment to local minikube
For the deployment to minikube some auxiliar artifacts were built.
A Dockerfile to build a container image that could run the uwsgi python application.
A kubernetes deployment configuration.
A script, deploy-local-minikube.sh to run the container image build and deploy to minikube using the kubernetes deployment configuration.

To deploy to local minikube, this script can be run:

```Shell
./deploy-local-minikube.sh
```


The results were checked with a curl command:

```Shell
curl $(minikube service flask-api-service --url)
```

### Conclusions and further considerations
Some changes were made when testing and creating the container image. It was choosen to do not use for the moment a virtual environment within the container as it does not seem necessary, as the container itself provides the necessary level of isolation.

The current base image for the container is ubuntu. A different base image evaluated, as well as other improvements to reduce the image size, for example removing unnecessary files after the image build.

## Python Virtual Environments
One key aspect for more complex Python application is the use of virtual environments. It would be important in these experiments gather information on how to proper configure and use virtual environments in deployments to Kubernetes.

## Environment
This experiment was done on Ubuntu with a minikube Kubernetes cluster.

## Related Alternatives
For simpler requirements a simple python http may suffice.

## References
[1] Welcome to Flask - Flask Documentation. https://flask.palletsprojects.com/en/1.1.x/  
[2] uWSGI - Flask Documentation. https://flask.palletsprojects.com/en/1.1.x/deploying/uwsgi/  
[3] The uWSGI project. https://uwsgi-docs.readthedocs.io/en/latest/  
[4] Quickstart for Python/WSGI applications. https://uwsgi-docs.readthedocs.io/en/latest/WSGIquickstart.html  
[5] Python support - uWSGI documentation. https://uwsgi-docs.readthedocs.io/en/latest/Python.html  
[6] Deploying with Gunicorn. https://flask.palletsprojects.com/en/1.1.x/deploying/wsgi-standalone/#gunicorn