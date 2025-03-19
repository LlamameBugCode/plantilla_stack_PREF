from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS  # Importa CORS
import os
from dotenv import load_dotenv
from .routes.api import api_bp

# Cargar variables de entorno
load_dotenv()

app = Flask(__name__)

CORS(app, origins=["http://localhost:3000"])  # Solo permite solicitudes desde el frontend

#blueprints
app.register_blueprint(api_bp, url_prefix='/api')

app.config['SQLALCHEMY_DATABASE_URI'] = (
    f"postgresql://{os.getenv('DB_USER')}:{os.getenv('DB_PASSWORD')}@"
    f"{os.getenv('DB_HOST')}/{os.getenv('DB_NAME')}"
)
#Otra forma de extraer los datos de crear los datos de configuracion
#app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:1234@localhost/prueba_PREF'

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# Inicializar SQLAlchemy y Migrate
db = SQLAlchemy(app)
migrate = Migrate(app, db)

print("DB_USER:", os.getenv('DB_USER'))
print("DB_PASSWORD:", os.getenv('DB_PASSWORD'))
print("DB_HOST:", os.getenv('DB_HOST'))
print("DB_NAME:", os.getenv('DB_NAME'))

@app.route('/test-db')
def test_db():
    try:
        # Intenta realizar una consulta simple
        db.session.execute("SELECT 1")
        return "Conexión a la base de datos exitosa"
    except Exception as e:
        return f"Error al conectar a la base de datos: {str(e)}"

# Definir un modelo de ejemplo
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)


#--------------------------------------------------------------------------------------------------------------------------#
#------------------------------------------     API    --------------------------------------------------------------------#
#--------------------------------------------------------------------------------------------------------------------------#

@app.route('/api/greet', methods=['POST'])
def greet():
    # Obtener datos del cuerpo de la solicitud
    data = request.get_json()
    name = data.get('name', 'Invitado')  # Si no se proporciona un nombre, usa "Invitado"

    # Devolver una respuesta JSON
    return jsonify({'message': f'¡Hola, {name}!'})

@app.route('/')
def home():
    return "<h1>¡Hola, mundoOO, python, ruta principal!</h1>"

if __name__ == '__main__':
    app.run(debug=True)