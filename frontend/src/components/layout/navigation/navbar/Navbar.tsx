// src/components/layout/navigation/Navbar.tsx
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 shadow-lg rounded p-4 ">
      <ul className="flex justify-end gap-6 text-gray-300 text-lg font-medium mx-5">
        <li>
          <Link
            href={ROUTES.HOME}
            className="hover:text-white transition duration-300 ease-in-out"
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            href={ROUTES.formulario1}
            className="hover:text-white transition duration-300 ease-in-out"
          >
            Formulario 1
          </Link>
        </li>
        <li>
          <Link
            href={ROUTES.formulario2}
            className="hover:text-white transition duration-300 ease-in-out"
          >
            Formulario 2
          </Link>
        </li>
      </ul>
    </nav>
  );
}