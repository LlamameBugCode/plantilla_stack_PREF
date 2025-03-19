'use client'; // Indica que este componente usa hooks de React
import { useState } from 'react';
import { sendGreeting } from '@/services/greetService';
import { GreetingFormState } from '@/types';

export default function GreetPage() {
  // Estado inicial como objeto, con un nombre más descriptivo
  const [formState, setFormState] = useState<GreetingFormState>({ userName: '' });
  const [responseMessage, setResponseMessage] = useState<string>(''); // Respuesta del backend
  const [isLoading, setIsLoading] = useState<boolean>(false); // Estado de carga

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita que el formulario recargue la página
    setIsLoading(true);

    try {
      // Mapea el estado del formulario para que coincida con el tipo esperado por el backend
      const requestData = { name: formState.userName };

      console.log("Datos enviados al backend:", requestData);
      // Usa el servicio para enviar el saludo
      const message = await sendGreeting(requestData);
      setResponseMessage(message); // Actualiza la respuesta del backend
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setResponseMessage('Ocurrió un error al enviar el formulario.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col my-10 items-center  min-h-screen gap-y-20 ">
        <h1 className='text-2xl p-5' >El formulario</h1>
       {/* Primer elemento */}
        <div className='w-1/2 bg-slate-300 p-5' >
          <p className='text-lg font-mono' >Con este formulario pordras enviar un mensaje a la api y esa te dovolvera cierto valor</p>
        </div>

        {/* Segundo elemento */}
        <div className='bg-slate-300 p-3 rounded-md h-96 flex flex-col  justify-center gap-1  '>
            <h2 className="text-2xl font-bold mb-10 ">Formulario de Saludo</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
                {/* Campo de entrada */}
                <input
                  type="text"
                  placeholder="Ingresa tu nombre"
                  value={formState.userName} // Accede a la propiedad `userName` del estado
                  onChange={(e) =>
                    setFormState({ ...formState, userName: e.target.value }) // Actualiza solo la propiedad `userName`
                  }
                  className="p-2 border rounded text-slate-950"
                />
                {/* Botón de envío */}
                <button
                  type="submit"
                  disabled={isLoading} // Desactiva el botón mientras se envía
                  className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
                >
                  {isLoading ? 'Enviando...' : 'Enviar'}
                </button>
              </form>

              {responseMessage && (
              <p className="mt-4 text-gray-900 font-semibold text-5xl">{responseMessage}</p>
                )}
        </div>


      {/* Respuesta del backend */}

    </div>
  );
}