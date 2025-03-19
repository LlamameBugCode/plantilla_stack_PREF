import axios from '../lib/axios';
import { seendGreetingProps, usuarioBaseProps } from '@/types';


// Función para enviar el saludo al backend
export async function sendGreeting(data: seendGreetingProps) {
  try {
    const response = await axios.post('/greet', data);
    return response.data.message; // Retorna el mensaje del backend
  } catch (error) {
    console.error('Error al enviar el saludo:', error);
    throw new Error('Ocurrió un error al enviar el formulario.');
  }
}


export async function usuarioLog(data:usuarioBaseProps){
try {
  const response = await axios.post('/usuario',data)
  return response.data.message
} catch (error) {
  console.log("el error es: ",error)
  throw new Error('Ocurrió un error al enviar el formulario2.');

}
}

/*
Esta api retorna:

    return jsonify({'message': f'¡Hola, {name} , Vengo desde una api de flask!'})

*/