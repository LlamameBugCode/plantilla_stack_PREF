'use client'; // Indica que este componente usa hooks de React

import { useState } from 'react';
import axios from '@/lib/axios';

export default function GreetPage() {
  const [name, setName] = useState(''); // Estado para el campo de entrada
  const [response, setResponse] = useState(''); // Estado para la respuesta del backend
  const [loading, setLoading] = useState(false); // Estado para manejar el envío

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita que el formulario recargue la página
    setLoading(true);

    try {
      // Envía los datos al backend
      const res = await axios.post('/greet', { name });
      setResponse(res.data.message); // Actualiza la respuesta del backend
    } catch (error) {
      console.error('Error:', error);
      setResponse('Ocurrió un error al enviar el formulario.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-2xl font-bold mb-4">Formulario de Saludo</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
        {/* Campo de entrada */}
        <input
          type="text"
          placeholder="Ingresa tu nombre, cabeza de huevo"
          value={name}
          onChange={(e) => setName(e.target.value)} // Actualiza el estado
          className="p-2 border rounded text-slate-950"
        />
        {/* Botón de envío */}
        <button
          type="submit"
          disabled={loading} // Desactiva el botón mientras se envía
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
      {/* Respuesta del backend */}
      {response && (
        <p className="mt-4 text-gray-900 font-semibold text-5xl">{response}</p>
      )}
    </div>
  );
}