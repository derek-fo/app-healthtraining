import { useState } from "react";

const CATEGORIAS = [
  {
    id: "abdomen",
    nome: "Abdômen",
    qtd: 10,
    exercicios: ["Abdominal Crunch", "Prancha", "Elevação de Pernas"],
  },
  {
    id: "bracos",
    nome: "Braços",
    qtd: 12,
    exercicios: ["Rosca Direta", "Rosca Alternada", "Triceps Testa"],
  },
  {
    id: "costas",
    nome: "Costas",
    qtd: 15,
    exercicios: ["Puxada Frontal", "Remada Curvada", "Remada Unilateral"],
  },
  {
    id: "fullbody",
    nome: "Full-Body",
    qtd: 20,
    exercicios: ["Agachamento Livre", "Supino Reto", "Puxada Frontal"],
  },
  {
    id: "ombro",
    nome: "Ombro",
    qtd: 12,
    exercicios: [
      "Elevação Lateral",
      "Elevação Frontal",
      "Desenvolvimento halter",
    ],
  },
  {
    id: "peito",
    nome: "Peito",
    qtd: 12,
    exercicios: ["Supino Reto", "Supino Inclinado", "Crucifixo"],
  },
  {
    id: "pernas",
    nome: "Pernas",
    qtd: 8,
    exercicios: ["Agachamento Livre", "Leg Press", "Cadeira Extensora"],
  },
];

export function NewWorkoutPage({ setPage, workouts, setWorkouts }) {
  const [nomeTreino, setNomeTreino] = useState("");
  const [buscaEx, setBuscaEx] = useState("");
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [exerciciosSelecionados, setExerciciosSelecionados] = useState([]);

  const [categoriaAtiva, setCategoriaAtiva] = useState(null);
  const [repTemp, setRepTemp] = useState("");
  const [pesoTemp, setPesoTemp] = useState("");

  function handleAdicionarEx(nomeDoExercicio) {
    if (repTemp === "" || pesoTemp === "") {
      alert("Por favor, preencha as Repetições e o Peso antes de adicionar!");
      return;
    }

    const novoCardExercicio = {
      id: Date.now(),
      name: nomeDoExercicio,
      rep: repTemp,
      peso: pesoTemp,
    };

    setExerciciosSelecionados([...exerciciosSelecionados, novoCardExercicio]);

    setRepTemp("");
    setPesoTemp("");

    alert(`${nomeDoExercicio} adicionado com sucesso!`);
  }


  function handleSalvarTreino() {
    if (nomeTreino === "") {
      alert("Dê um nome ao seu treino antes de salvar!");
      return;
    }
    if (exerciciosSelecionados.length === 0) {
      alert("Adicione pelo menos um exercício ao treino!");
      return;
    }

    const treinoPronto = {
      id: Date.now(),
      name: nomeTreino,
      type: "Personalizado",
      duration: exerciciosSelecionados.length * 10,
      exercises: exerciciosSelecionados.length,
    };

    setWorkouts([...workouts, treinoPronto]);
    setPage("home");
  }

  const categoriasFiltradas = CATEGORIAS.filter((cat) =>
    filtroCategoria === "" ? true : cat.id === filtroCategoria,
  );

  return (
    <div className="min-h-screen bg-[#23262c] text-white p-6 space-y-8 pb-32 relative">
      <div className="bg-[#181A1E] border border-gray-600 p-6 rounded-md space-y-4 max-w-xl mx-auto">
        <div className="flex justify-between items-center mb-2">
          <button
            onClick={() => setPage("home")}
            className="text-sm font-semibold text-gray-400 hover:text-white transition-all"
          >
            Voltar
          </button>
          <h2 className="text-white text-2xl font-semibold text-center uppercase tracking-wider">
            Monte seu treino
          </h2>
          <button
            onClick={() => setPage("home")}
            className="text-sm font-semibold text-gray-400 hover:text-white transition-all"
          >
            N
          </button>
        </div>

        <div>
          <label className="text-gray-400 text-sm block mb-1">
            Nome do Treino
          </label>
          <input
            type="text"
            placeholder="Ex: Costas / Pernas / Full-Body"
            value={nomeTreino}
            onChange={(e) => setNomeTreino(e.target.value)}
            className="w-full bg-gray-800 text-white p-2 rounded border border-gray-700 focus:outline-none focus:border-red-600"
          />
        </div>

        <div>
          <p className="text-gray-400 text-sm block mb-2 font-semibold">Tipo de exercício</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <label className="flex items-center gap-1.5 cursor-pointer text-gray-300 hover:text-white transition-colors">
              <input
                type="radio"
                name="filtro"
                checked={filtroCategoria === "abdomen"}
                onChange={() => setFiltroCategoria("abdomen")}
                className="accent-red-600"
              />{" "}
              Abdômem
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer text-gray-300 hover:text-white transition-colors">
              <input
                type="radio"
                name="filtro"
                checked={filtroCategoria === "bracos"}
                onChange={() => setFiltroCategoria("bracos")}
                className="accent-red-600"
              />{" "}
              Braços
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer text-gray-300 hover:text-white transition-colors">
              <input
                type="radio"
                name="filtro"
                checked={filtroCategoria === "costas"}
                onChange={() => setFiltroCategoria("costas")}
                className="accent-red-600"
              />{" "}
              Costas
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer text-gray-300 hover:text-white transition-colors">
              <input
                type="radio"
                name="filtro"
                checked={filtroCategoria === "fullbody"}
                onChange={() => setFiltroCategoria("fullbody")}
                className="accent-red-600"
              />{" "}
              Full-Body
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer text-gray-300 hover:text-white transition-colors">
              <input
                type="radio"
                name="filtro"
                checked={filtroCategoria === "peito"}
                onChange={() => setFiltroCategoria("peito")}
                className="accent-red-600"
              />{" "}
              Peito
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer text-gray-300 hover:text-white transition-colors">
              <input
                type="radio"
                name="filtro"
                checked={filtroCategoria === "pernas"}
                onChange={() => setFiltroCategoria("pernas")}
                className="accent-red-600"
              />{" "}
              Pernas
            </label>
          </div>
        </div>

        {exerciciosSelecionados.length > 0 && (
          <div className="pt-2 space-y-2">
            <p className="text-sm font-semibold text-[#E31E25] uppercase tracking-wider">
              Exercícios no Treino:
            </p>
            <div className="grid grid-cols-1 gap-2">
              {exerciciosSelecionados.map((ex) => (
                <div
                  key={ex.id}
                  className="bg-gray-800 border border-gray-700 p-3 rounded flex justify-between items-center text-sm"
                >
                  <div>
                    <p className="font-semibold text-white">{ex.name}</p>
                    <p className="text-gray-400 text-xs">
                      {ex.rep} Repetições · {ex.peso} kg
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      setExerciciosSelecionados(
                        exerciciosSelecionados.filter((i) => i.id !== ex.id),
                      )
                    }
                    className="text-xs text-[#E31E25] font-semibold hover:underline transition-all"
                  >
                    Remover
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-2 pt-2">
          <p className="text-gray-400 text-sm block mb-1 font-semibold uppercase">Categorias</p>

          {categoriasFiltradas.map((cat) => (
            <div
              key={cat.id}
              className="bg-gray-800 border border-gray-700 p-4 rounded-md flex justify-between items-center"
            >
              <div>
                <p className="font-semibold text-white tracking-wide text-base">
                  {cat.nome}
                </p>
                <p className="text-gray-400 text-xs">{cat.qtd} exercícios</p>
              </div>
              <button
                onClick={() => setCategoriaAtiva(cat)}
                className="bg-linear-to-r from-[#E31E25] to-[#7D1114] hover:opacity-90 text-white font-semibold py-1.5 px-4 rounded text-xs uppercase transition-all"
              >
                Ver
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={handleSalvarTreino}
          className="w-full bg-linear-to-r from-[#E31E25] to-[#7D1114] hover:opacity-90 text-white font-semibold py-2.5 rounded uppercase text-sm tracking-wider transition-all mt-4"
        >
          Salvar Treino Completo
        </button>
      </div>

      {categoriaAtiva && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-[#181A1E] border border-gray-600 p-6 rounded-md space-y-4 w-full max-w-md shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b border-gray-700 pb-2">
              <div>
                <h3 className="text-white text-xl font-semibold uppercase tracking-wider">
                  Escolha os Exercícios
                </h3>
                <p className="text-xs text-gray-400">
                  Categoria:{" "}
                  <span className="text-[#E31E25] font-semibold">
                    {categoriaAtiva.nome}
                  </span>
                </p>
              </div>
              <button
                onClick={() => setCategoriaAtiva(null)}
                className="text-xs bg-gray-800 border border-gray-700 px-2.5 py-1 rounded text-gray-300 hover:text-white transition-all font-semibold uppercase"
              >
                Fechar
              </button>
            </div>

            {/* Listagem dos Exercícios dentro do Modal */}
            <div className="space-y-3">
              {categoriaAtiva.exercicios.map((nomeEx, index) => (
                <div
                  key={index}
                  className="bg-gray-800 border border-gray-700 p-4 rounded-md space-y-3"
                >
                  <p className="font-semibold text-white text-sm">{nomeEx}</p>

                  <div className="flex items-end gap-2 text-xs">
                    <div className="w-1/3">
                      <label className="text-gray-400 block mb-1 text-xs">
                        Repetições
                      </label>
                      <input
                        type="text"
                        placeholder="8-12"
                        value={repTemp}
                        onChange={(e) => setRepTemp(e.target.value)}
                        className="w-full bg-[#181A1E] border border-gray-700 p-1.5 rounded text-white text-center focus:outline-none focus:border-red-600"
                      />
                    </div>

                    <div className="w-1/3">
                      <label className="text-gray-400 block mb-1 text-xs">
                        Peso (kg) / Tempo
                      </label>
                      <input
                        type="text"
                        placeholder="20 ou 1min."
                        value={pesoTemp}
                        onChange={(e) => setPesoTemp(e.target.value)}
                        className="w-full bg-[#181A1E] border border-gray-700 p-1.5 rounded text-white text-center focus:outline-none focus:border-red-600"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => handleAdicionarEx(nomeEx)}
                      className="w-1/3 bg-linear-to-r from-[#E31E25] to-[#7D1114] hover:opacity-90 text-white font-semibold py-1.5 rounded uppercase tracking-wider transition-all"
                    >
                      Adicionar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}