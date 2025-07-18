from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail
from flask_migrate import Migrate
from flask_cors import CORS

db = SQLAlchemy()
mail = Mail()

def create_app():
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_pyfile('config.py')

    CORS(app)  # Habilita CORS para todas as rotas

    db.init_app(app)
    mail.init_app(app)
    Migrate(app, db)

    from .routes import api  # Importa o blueprint correto
    app.register_blueprint(api, url_prefix='/api')  # Usa o prefixo /api

    return app

from back_end.app import create_app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True)