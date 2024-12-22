import { useState } from "react";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  const validate = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password1.trim() || !password2.trim()) {
      setError("Debes completar todos los campos");
      return;
    } else if (password1.length < 6) {
      setError("La contraseña debe poseer un mínimo de 6 caracteres");
      return;
    } else if (password1.trim() !== password2.trim()) {
      setError("Contraseñas no coinciden");
      return;
    } else {
      alert("¡Registrado con éxito!");
    }

    setEmail("");
    setPassword1("");
    setPassword2("");
  };

  return (
    <>
      <div className="h-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-start p-10 w-1/2">
          <h1 className="font-semibold text-3xl">Register</h1>
          <div className="w-full flex justify-center flex-col items-start mt-5 gap-4">
            <div className="w-full">
              <h3>Email</h3>
              <input
                type="text"
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
                  setPassword1(e.target.value);
                }}
              />
            </div>
            <div className="w-full">
              <h3>Confirmar contraseña</h3>
              <input
                type="password"
                className="border border-gray-200 shadow-md w-full p-1"
                onChange={(e) => {
                  setPassword2(e.target.value);
                }}
              />
            </div>
            {error && <div className="text-red-500 mt-2">{error}</div>}
            <button
              className="border border-white bg-blue-500 text-white rounded py-1 px-2 mt-2"
              onClick={validate}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
