import { useState } from "react";
import { useNavigate } from "react-router";
import gymBg from "../assets/gym.jpg";

export function RegisterPage({ setPage, setUser }) {
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

    setUser({ name: nome, email: email, peso: peso, altura: altura });
    navigate("/home");
  }

  return (
    <div className="min-h-screen bg-[#23262c] flex flex-row items-center justify-center">
      <div className="flex w-full max-w-4xl h-full bg-[#181A1E] border border-gray-600 rounded-md overflow-hidden py-13">
        <div className="hidden md:block w-1/2 relative h-full">
          <img
            src={gymBg}
            alt="Logo ADS"
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
          <h2 className="text-white text-2xl font-semibold text-center mb-6 uppercase tracking-wider">
            Cadastre-se
          </h2>

          <form onSubmit={handleCadastro} className="space-y-4">
            <input
              type="text"
              placeholder="Nome Completo *"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full bg-gray-800 text-white p-2 rounded text-sm focus:outline-none"
            />
            <input
              type="email"
              placeholder="E-mail *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-800 text-white p-2 rounded text-sm focus:outline-none"
            />
            <input
              type="password"
              placeholder="Senha *"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full bg-gray-800 text-white p-2 rounded text-sm focus:outline-none"
            />
            <input
              type="password"
              placeholder="Confirmar Senha *"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              className="w-full bg-gray-800 text-white p-2 rounded text-sm focus:outline-none"
            />
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Peso (kg)"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                className="w-1/2 bg-gray-800 text-white p-2 rounded text-sm focus:outline-none"
              />
              <input
                type="number"
                placeholder="Altura (cm)"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                className="w-1/2 bg-gray-800 text-white p-2 rounded text-sm focus:outline-none"
              />
            </div>

            {erro && <p className="text-red-500 text-xs">{erro}</p>}

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded uppercase transition-colors"
            >
              Cadastrar e Entrar
            </button>

            <button
              onClick={() => navigate("/login")}
              className="w-full border-2 border-transparent [border-image:linear-gradient(to_right,#E31E25,#7D1114)1] font-semibold py-2 rounded uppercase transition-all"
            >
              <span className="bg-linear-to-r from-[#E31E25] to-[#bd2025] bg-clip-text text-transparent">
                Voltar para o Login
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
