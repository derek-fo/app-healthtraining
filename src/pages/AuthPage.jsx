import { useState } from "react";
import { useNavigate } from "react-router";
import gymBg from "../assets/gym.jpg";

// ─── Painel de Login ───────────────────────────────────────────────────────────
function PainelLogin({ setUser, onGoToRegister }) {
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
    setUser({ name: "", email });
    navigate("/home");
  }

  return (
    <>
      <h2 className="text-white text-2xl font-semibold text-center mb-6 uppercase tracking-wider">
        Login
      </h2>

      <form onSubmit={handleLogin} className="space-y-4">
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
          onClick={handleLogin}
          className="w-full bg-linear-to-r from-[#E31E25] to-[#7D1114] hover:opacity-90 text-white font-semibold py-2 rounded uppercase transition-all"
        >
          Entrar
        </button>
        <button
          onClick={onGoToRegister}
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
    </>
  );
}

// ─── Painel de Cadastro ────────────────────────────────────────────────────────
function PainelRegistro({ setUser, onGoToLogin }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  function handleCadastro(e) {
    e.preventDefault();
    if (!nome || !email || !senha) {
      setErro("Preencha os campos obrigatórios (Nome, Email e Senha)!");
      return;
    }
    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem!");
      return;
    }
    setUser({ name: nome, email, peso, altura });
    navigate("/home");
  }

  return (
    <>
      <h2 className="text-white text-2xl font-semibold text-center mb-6 uppercase tracking-wider">
        Cadastre-se
      </h2>

      <form onSubmit={handleCadastro} className="space-y-0.75">
        <div>
          <label className="text-gray-400 text-sm block mb-1">Nome Completo *</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700 focus:outline-none focus:border-red-600"
            placeholder="Seu nome completo"
          />
        </div>

        <div>
          <label className="text-gray-400 text-sm block mb-1">E-mail *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700 focus:outline-none focus:border-red-600"
            placeholder="exemplo@email.com"
          />
        </div>

        <div>
          <label className="text-gray-400 text-sm block mb-1">Senha *</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700 focus:outline-none focus:border-red-600"
            placeholder="Sua senha"
          />
        </div>

        <div>
          <label className="text-gray-400 text-sm block mb-1">Confirmar Senha *</label>
          <input
            type="password"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700 focus:outline-none focus:border-red-600"
            placeholder="Repita sua senha"
          />
        </div>

        <div className="flex gap-2">
          <div className="w-1/2">
            <label className="text-gray-400 text-sm block mb-1">Peso (kg)</label>
            <input
              type="number"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700 focus:outline-none focus:border-red-600"
              placeholder="Ex: 75"
            />
          </div>
          <div className="w-1/2">
            <label className="text-gray-400 text-sm block mb-1">Altura (cm)</label>
            <input
              type="number"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700 focus:outline-none focus:border-red-600"
              placeholder="Ex: 175"
            />
          </div>
        </div>

        {erro && <p className="text-red-500 text-xs">{erro}</p>}
      </form>

      <div className="space-y-2 mt-6">
        <button
          onClick={handleCadastro}
          className="w-full bg-linear-to-r from-[#E31E25] to-[#7D1114] hover:opacity-90 text-white font-semibold py-2 rounded uppercase transition-all"
        >
          Cadastrar e Entrar
        </button>
        <button
          onClick={onGoToLogin}
          className="w-full border-2 border-transparent [border-image:linear-gradient(to_right,#E31E25,#7D1114)1] font-semibold py-2 rounded uppercase transition-all"
        >
          <span className="bg-linear-to-r from-[#E31E25] to-[#bd2025] bg-clip-text text-transparent">
            Já tem conta? Faça login
          </span>
        </button>
      </div>
    </>
  );
}

// estrutura fixa
export function AuthPage({ setUser }) {
  const [view, setView] = useState("login"); // "login" | "register"

  return (
    <div className="min-h-screen bg-[#23262c] flex items-center justify-center px-4">
      <div className="flex w-full max-w-4xl bg-[#181A1E] border border-gray-600 rounded-md overflow-hidden">

        <div className="hidden md:block w-1/2 relative">
          <img
            src={gymBg}
            alt="Gym background"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <h1 className="text-white text-4xl font-black uppercase italic leading-tight">
              Transforme seu <span className="text-red-600">Corpo</span>
            </h1>
            <p className="text-gray-300 mt-2 font-medium">
              Acompanhe sua evolução e alcance seus objetivos.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8">
          {view === "login" ? (
            <PainelLogin setUser={setUser} onGoToRegister={() => setView("register")} />
          ) : (
            <PainelRegistro setUser={setUser} onGoToLogin={() => setView("login")} />
          )}
        </div>

      </div>
    </div>
  );
}
