import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-400 gap-2">
      <h1 className="font-bold text-5xl mb-5">Ups!</h1>
      <h3 className="font-semibold text-2xl">Nada por aquí todavía...</h3>
      <p>Pero te podemos ofrecer volver a la página principal</p>
      <Link
        to="/"
        className="border border-black bg-black text-white px-2 py-1 hover:bg-gray-700"
      >
        Volver
      </Link>
    </main>
  );
}

export default NotFound;
