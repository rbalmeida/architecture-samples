import pika
import random as rd
import time

connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
channel = connection.channel()

channel.queue_declare(queue='hello')
try:
    while True:
        channel.basic_publish(exchange='',
                              routing_key='hello',
                              body='Hello. Random int: {}'.format(rd.randint(1, 1000)))
        time.sleep(rd.randint(1, 10))
finally:
    connection.close()

# Ref: https://www.rabbitmq.com/tutorials/tutorial-one-python.html
