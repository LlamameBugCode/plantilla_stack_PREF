import { Card1 } from "@/components/common/cards/card1";

export default function Home() {
  return (
    <main className="w-full bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 text-white p-4">
      {/* Contenedor principal */}
      <div className="flex flex-col items-center justify-center min-h-screen">
        {/* Contenido principal */}
        <div className="text-center space-y-6 max-w-md">
          {/* Título principal */}
          <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-lg">
            Bienvenido a tu plantilla
          </h1>

          {/* Descripción */}
         <Card1/>
         

          {/* Botón de llamada a la acción */}
          <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300">
            Comenzar ahora
          </button>
        </div>

        {/* Firma discreta */}
        <footer className="mt-8 text-xs text-gray-300">
          Diseñado con ❤️ por{" "}
          <span className="font-medium">Isaac Correa</span>
        </footer>
      </div>
    </main>
  );
}