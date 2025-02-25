from flask import Blueprint, request, jsonify

api_bp = Blueprint('api', __name__)

@api_bp.route('/greet', methods=['POST'])
def greet():
    data = request.get_json()
    name = data.get('name', 'Invitado')  # Si no se proporciona un nombre, usa "Invitado"
    return jsonify({'message': f'¡Hola, {name} , Vengo desde una api de flask!'})