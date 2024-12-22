import { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validate = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Debes completar todos los campos");
      return;
    } else if (password.length < 6) {
      setError("La contraseña debe poseer un mínimo de 6 caracteres");
      return;
    } else {
      alert("¡Ingresaste con éxito!");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="h-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-start p-10 w-1/2">
          <h1 className="font-semibold text-3xl">Login</h1>
          <div className="w-full flex justify-center flex-col items-start mt-5 gap-4">
            <div className="w-full">
              <h3>Email</h3>
              <input
                type="email"
                className="border border-gray-200 shadow-md w-full p-1"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="w-full">
              <h3>Contraseña</h3>
              <input
                type="password"
                className="border border-gray-200 shadow-md w-full p-1"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            {error && <div className="text-red-500 mt-2">{error}</div>}
            <button
              className="border border-white bg-blue-500 text-white rounded py-1 px-2 mt-2"
              onClick={validate}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
