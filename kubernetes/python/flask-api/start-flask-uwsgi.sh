uwsgi --http 127.0.0.1:9191 --plugin python --wsgi-file main.py --callable app -H /usr/lib/python3.6  --processes 4 --threads 2

