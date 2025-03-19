from flask import Blueprint, request, jsonify

api_bp = Blueprint('api', __name__)

@api_bp.route('/greet', methods=['POST'])
def greet():
    data = request.get_json()
    name = data.get('name', 'Invitado')  # Si no se proporciona un nombre, usa "Invitado"
    return jsonify({'message': f'¡Hola, {name} , Vengo desde una api de flask!'})


@api_bp.route('/usuario', methods=['POST'])
def devuelve_usuario():
    #obtengo los datos
    response=""
    data = request.get_json()

    nombre = data.get('nombre')
    edad = data.get('edad')

    if nombre =='admi':
        response={'message':"Bienvenido admin, tu edad es :"}
    else:
        response={'message':"Bienvenido usaurio normal"}


    return jsonify(response)
