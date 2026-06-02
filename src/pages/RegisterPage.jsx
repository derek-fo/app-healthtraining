import { useState } from "react";
import { useNavigate } from "react-router";

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
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm bg-gray-900 p-6 rounded-md border border-gray-800">
        <h2 className="text-white text-xl font-bold text-center mb-6 uppercase">
          Criar Nova Conta
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
        </form>

        <button
          onClick={() => navigate("/login")}
          className="w-full mt-3 text-gray-500 hover:text-white text-xs uppercase"
        >
          ← Voltar para o Login
        </button>


      </div>
    </div>
  );
}
