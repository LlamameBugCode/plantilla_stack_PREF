import GreetPage from './(dashboard)/greet/page';


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 text-white p-4">
      {/* Contenedor principal */}
      <div className="text-center space-y-6">
        {/* Título principal */}
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Bienvenido a tu plantilla
        </h1>

        <GreetPage />

        {/* Subtítulo */}
        <p className="text-base text-gray-200">
          Esta es una plantilla básica para tu proyecto.
        </p>

        {/* Firma discreta */}
        <footer className="mt-8 text-xs text-gray-300">
          Diseñado con ❤️ por{' '}
          <span className="font-medium">Isaac Correa</span>
        </footer>
      </div>
    </main>
  );
}