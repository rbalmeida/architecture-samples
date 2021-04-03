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
- [ ] Experiment uWSGI alone with Flask
- [ ] Experiment uWSGI alone with Nginx
- [ ] Evaluate proper usage of virtualenvs for these deployment options
- [ ] Evaluate and create the Dockerfile for image build
- [ ] Evaluate and create the Kubernetes deployment configurations

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
./start-flask-uwsgi.sh
````
This script will start a simple Flask app in main.py on port 9191 of the localhost with the Python virtual environment created by the virtual env setup script.

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