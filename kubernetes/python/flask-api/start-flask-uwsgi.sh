source ./venv//bin/activate
uwsgi --http 127.0.0.1:9191 --plugin python --wsgi-file main.py --callable app --processes 4 --threads 2 -H ./venv

