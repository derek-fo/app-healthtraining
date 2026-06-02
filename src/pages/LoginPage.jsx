import { useState } from "react";
import { useNavigate } from "react-router";
import gymBg from "../assets/gym.jpg";

export function LoginPage({ setPage, setUser }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if (email === "" || senha === "") {
      setErro("Por favor, preencha todos os campos.");
      return;
    }

    setUser({ name: "", email: email });
    navigate("/home");
  }

  return (
    <div className="min-h-screen bg-[#23262c] flex flex-row items-center justify-center px-4">
      <div className="flex w-full max-w-4xl bg-[#181A1E] border border-gray-600 rounded-md overflow-hidden">
        <div className="hidden md:block w-1/2">
        <img
          src={gymBg}
          alt="Logo ADS"
          className="w-full h-full object-cover"
        />
        </div>
        <div className="w-full md:w-1/2 p-8">
        <h2 className="text-white text-2xl font-semibold text-center mb-6 uppercase tracking-wider">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4 ">
          <div>
            <label className="text-gray-400 text-sm block mb-1">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700 focus:outline-none focus:border-red-600"
              placeholder="exemplo@email.com"
            />
          </div>

          <div>
            <label className="text-gray-400 text-sm block mb-1">Senha</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700 focus:outline-none focus:border-red-600"
              placeholder="Sua senha"
            />
          </div>

          {erro && <p className="text-red-500 text-xs">{erro}</p>}
        </form>
        
        <div className="space-y-2 mt-6">
          <button
            onClick={() => navigate("/home")}
            type="submit"
            className="w-full bg-linear-to-r from-[#E31E25] to-[#7D1114] hover:opacity-90 text-white font-semibold py-2 rounded uppercase transition-all"
          >
            Entrar
          </button>
          <button
            onClick={() => navigate("/register")}
            className="w-full border-2 border-transparent [border-image:linear-gradient(to_right,#E31E25,#7D1114)1] font-semibold py-2 rounded uppercase transition-all"
          >
            <span className="bg-linear-to-r from-[#E31E25] to-[#bd2025] bg-clip-text text-transparent">
              Não tem conta? Cadastre-se
            </span>
          </button>
        </div>

        <div className="space-y-2 mt-16">
          <button
            onClick={() => navigate("/home")}
            className="w-full bg-linear-to-r from-[#E31E25] to-[#7D1114] hover:opacity-90 text-white font-semibold py-2 rounded uppercase transition-all"
          >
            Entre com sua conta Google
          </button>
          <button
            onClick={() => navigate("/home")}
            className="w-full bg-linear-to-r from-[#E31E25] to-[#7D1114] hover:opacity-90 text-white font-semibold py-2 rounded uppercase transition-all"
          >
            Entre com sua conta Apple
          </button>
          <button
            onClick={() => navigate("/home")}
            className="w-full bg-linear-to-r from-[#E31E25] to-[#7D1114] hover:opacity-90 text-white font-semibold py-2 rounded uppercase transition-all"
          >
            Entre com sua conta Strava
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}
