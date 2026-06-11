import { useState } from "react";

export function SettingsPage({ setPage }) {
  const [tabAtiva, setTabAtiva] = useState("perfil");

  const [viewMobile, setViewMobile] = useState("menu");

  const [nome, setNome] = useState("Edécio");
  const [email, setEmail] = useState("edecio@ads.com");
  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");

  function handleSalvarNome() {
    if (nome.trim() === "") {
      alert("O nome do perfil não pode estar vazio!");
      return;
    }
    alert(`Nome alterado para: ${nome}`);
  }

  function handleSalvarEmail() {
    if (email.trim() === "") {
      alert("O e-mail não pode estar vazio!");
      return;
    }
    alert(`E-mail alterado para: ${email}`);
  }

  function handleAlterarSenha() {
    if (senhaAtual === "" || novaSenha === "") {
      alert("Preencha a senha atual e a nova senha!");
      return;
    }
    alert("Senha alterada com sucesso!");
    setSenhaAtual("");
    setNovaSenha("");
  }

  function handleLogout() {
    if (window.confirm("Tem certeza que deseja sair da sua conta?")) {
      alert("Você saiu da sua conta.");
      setPage("login");
    }
  }

  function selecionarAba(aba) {
    setTabAtiva(aba);
    setViewMobile("content");
  }

  function handleExcluirConta() {
    const confirmar = window.confirm(
      "Tem certeza absoluta que deseja excluir sua conta? Esta ação não pode ser desfeita.",
    );
    if (confirmar) {
      alert("Conta excluída.");
      setPage("login");
    }
  }

  return (
    <div className="min-h-screen bg-[#23262c] text-white p-4 md:p-8 pb-32">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6">
        <div
          className={`w-full md:w-1/4 bg-[#181A1E] border border-gray-700 p-4 rounded-md h-fit space-y-2 ${
            viewMobile === "menu" ? "block" : "hidden"
          } md:block`}
        >
          <button
            onClick={() => setPage("home")}
            className="text-xs text-gray-400 hover:text-white mb-6 block font-semibold uppercase tracking-wider transition-colors"
          >
            ← Voltar pro Início
          </button>

          <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider px-2 mb-4">
            Configurações
          </h3>

          <nav className="flex flex-col gap-2">
            <button
              onClick={() => selecionarAba("perfil")}
              className={`w-full text-left px-4 py-3 rounded text-sm font-medium transition-all ${
                tabAtiva === "perfil"
                  ? "bg-gray-800 text-white border-l-4 border-[#E31E25]"
                  : "text-gray-400 hover:bg-gray-800/50 hover:text-white"
              }`}
            >
              Perfil e Conta
            </button>
            <button
              onClick={() => selecionarAba("vincularcontas")}
              className={`w-full text-left px-4 py-3 rounded text-sm font-medium transition-all ${
                tabAtiva === "vincularcontas"
                  ? "bg-gray-800 text-white border-l-4 border-[#E31E25]"
                  : "text-gray-400 hover:bg-gray-800/50 hover:text-white"
              }`}
            >
              Vincular contas
            </button>
            <button
              onClick={() => selecionarAba("notificacoes")}
              className={`w-full text-left px-4 py-3 rounded text-sm font-medium transition-all ${
                tabAtiva === "notificacoes"
                  ? "bg-gray-800 text-white border-l-4 border-[#E31E25]"
                  : "text-gray-400 hover:bg-gray-800/50 hover:text-white"
              }`}
            >
              Notificações
            </button>
            <button
              onClick={() => selecionarAba("feedback")}
              className={`w-full text-left px-4 py-3 rounded text-sm font-medium transition-all ${
                tabAtiva === "feedback"
                  ? "bg-gray-800 text-white border-l-4 border-[#E31E25]"
                  : "text-gray-400 hover:bg-gray-800/50 hover:text-white"
              }`}
            >
              Feedback
            </button>
            <button
              onClick={() => selecionarAba("ajudaesuporte")}
              className={`w-full text-left px-4 py-3 rounded text-sm font-medium transition-all ${
                tabAtiva === "ajudaesuporte"
                  ? "bg-gray-800 text-white border-l-4 border-[#E31E25]"
                  : "text-gray-400 hover:bg-gray-800/50 hover:text-white"
              }`}
            >
              Ajuda e Suporte
            </button>
            <button
              onClick={() => selecionarAba("privacidade")}
              className={`w-full text-left px-4 py-3 rounded text-sm font-medium transition-all ${
                tabAtiva === "privacidade"
                  ? "bg-gray-800 text-white border-l-4 border-[#E31E25]"
                  : "text-gray-400 hover:bg-gray-800/50 hover:text-white"
              }`}
            >
              Logout
            </button>
          </nav>
        </div>

        <div
          className={`flex-1 bg-[#181A1E] border border-gray-700 p-6 rounded-md space-y-6 ${
            viewMobile === "content" ? "block" : "hidden"
          } md:block`}
        >
          <button
            onClick={() => setViewMobile("menu")}
            className="md:hidden text-xs text-gray-400 hover:text-white mb-4 block font-semibold uppercase tracking-wider transition-colors"
          >
            ← Voltar para Opções
          </button>

          {tabAtiva === "perfil" && (
            <>
              <div>
                <h2 className="text-white text-xl font-semibold uppercase tracking-wider">
                  Minha Conta
                </h2>
                <p className="text-xs text-gray-400">
                  Gerencie suas informações de perfil, e-mail e credenciais de acesso.
                </p>
              </div>

              <div className="border-t border-gray-800 pt-4 space-y-2">
                <label className="text-gray-400 text-xs block font-semibold uppercase">
                  Nome do Perfil
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="flex-1 bg-gray-800 text-white p-2 rounded border border-gray-700 focus:outline-none focus:border-red-600 text-sm"
                  />
                  <button
                    onClick={handleSalvarNome}
                    className="bg-linear-to-r from-[#E31E25] to-[#7D1114] hover:opacity-90 text-white font-semibold py-2 px-4 rounded text-xs uppercase transition-all sm:w-32 flex-shrink-0"
                  >
                    Salvar
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-4 space-y-2">
                <label className="text-gray-400 text-xs block font-semibold uppercase">
                  Endereço de E-mail
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-gray-800 text-white p-2 rounded border border-gray-700 focus:outline-none focus:border-red-600 text-sm"
                  />
                  <button
                    onClick={handleSalvarEmail}
                    className="bg-linear-to-r from-[#E31E25] to-[#7D1114] hover:opacity-90 text-white font-semibold py-2 px-4 rounded text-xs uppercase transition-all sm:w-32 flex-shrink-0"
                  >
                    Alterar
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-4 space-y-2">
                <label className="text-gray-400 text-xs block font-semibold uppercase">
                  Trocar Senha
                </label>
                <div className="flex flex-col sm:flex-row gap-2 items-end">
                  <div className="flex-1 w-full space-y-2">
                    <input
                      type="password"
                      placeholder="Senha Atual"
                      value={senhaAtual}
                      onChange={(e) => setSenhaAtual(e.target.value)}
                      className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700 focus:outline-none focus:border-red-600 text-sm"
                    />
                    <input
                      type="password"
                      placeholder="Nova Senha"
                      value={novaSenha}
                      onChange={(e) => setNovaSenha(e.target.value)}
                      className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700 focus:outline-none focus:border-red-600 text-sm"
                    />
                  </div>
                  <button
                    onClick={handleAlterarSenha}
                    className="bg-linear-to-r from-[#E31E25] to-[#7D1114] hover:opacity-90 text-white font-semibold py-2 px-4 rounded text-xs uppercase transition-all h-fit sm:w-32 flex-shrink-0"
                  >
                    Atualizar
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-6">
                <div className="bg-red-950/10 border border-red-900/40 p-4 rounded-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-red-500 uppercase">
                      Zona de Perigo
                    </h4>
                    <p className="text-xs text-gray-400">
                      Ao excluir sua conta, todos os seus treinos e históricos
                      salvos serão apagados permanentemente.
                    </p>
                  </div>
                  <button
                    onClick={handleExcluirConta}
                    className="bg-transparent border border-[#E31E25] text-[#E31E25] hover:bg-[#E31E25] hover:text-white font-semibold py-2 px-4 rounded text-xs uppercase tracking-wider transition-all whitespace-nowrap w-full sm:w-auto text-center"
                  >
                    Excluir Conta
                  </button>
                </div>
              </div>
            </>
          )}

          {tabAtiva === "vincularcontas" && (
            <div className="text-center py-12 text-gray-500 text-sm">
              Tela de configurações de Vinculação de Contas (Em desenvolvimento).
            </div>
          )}
          {tabAtiva === "notificacoes" && (
            <div className="text-center py-12 text-gray-500 text-sm">
              Tela de configurações de Notificações (Em desenvolvimento).
            </div>
          )}
          {tabAtiva === "feedback" && (
            <div className="text-center py-12 text-gray-500 text-sm">
              Tela de configurações de Feedback (Em desenvolvimento).
            </div>
          )}
          {tabAtiva === "ajudaesuporte" && (
            <div className="text-center py-12 text-gray-500 text-sm">
              Tela de configurações de Ajuda e Suporte (Em desenvolvimento).
            </div>
          )}
          {tabAtiva === "privacidade" && (
            <div className="border-t border-gray-800 pt-6">
              <div className="bg-red-950/10 border border-red-900/40 p-4 rounded-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h4 className="text-sm font-semibold text-red-500 uppercase">
                    Quer sair da sua conta?
                  </h4>
                  <p className="text-xs text-gray-400">
                    Você pode fazer logout da sua conta para proteger suas informações pessoais. Ao clicar em "Logout", você será desconectado.
                  </p>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-transparent border border-[#E31E25] text-[#E31E25] hover:bg-[#E31E25] hover:text-white font-semibold py-2 px-4 rounded text-xs uppercase tracking-wider transition-all whitespace-nowrap w-full sm:w-auto text-center"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}