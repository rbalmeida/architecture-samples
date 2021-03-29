uwsgi --http 127.0.0.1:9191 --plugin python --wsgi-file main.py --callable app  -H /tmp/venv/env02/ --processes 4 --threads 2 --no-site
