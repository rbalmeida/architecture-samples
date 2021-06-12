import random as rd
import time


with open('/output/messages.txt', 'a') as message_file:
    while True:
        message='Hello. Random int: {}\n'.format(rd.randint(1, 1000))
        message_file.write(message)
        message_file.flush()
        time.sleep(rd.randint(1, 10))
