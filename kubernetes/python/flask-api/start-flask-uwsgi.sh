#!/bin/bash

uwsgi --http 0.0.0.0:9191 --plugin python --wsgi-file main.py --callable app --processes 1 --threads 1

