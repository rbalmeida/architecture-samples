FROM ubuntu

RUN mkdir /app
WORKDIR /app

RUN apt-get update && apt-get -y install python3.7 pip python3-dev

ADD ./requirements.txt .
ADD ./main.py .
ADD ./start-flask-uwsgi.sh .
RUN chmod +x ./start-flask-uwsgi.sh

RUN pip install -r requirements.txt

EXPOSE 9191

ENTRYPOINT ["/app/start-flask-uwsgi.sh"]