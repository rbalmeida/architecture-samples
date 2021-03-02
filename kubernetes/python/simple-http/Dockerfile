FROM python:3.7

RUN mkdir /app
WORKDIR /app
ADD ./simple_controller.py /app/

EXPOSE 8080
CMD ["python", "/app/simple_controller.py"]