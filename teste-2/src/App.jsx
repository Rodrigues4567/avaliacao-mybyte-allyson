import { useState } from 'react';
import './App.css'
import { jurosSimples, jurosCompostos, valorPresente } from './util/financeiro.js'
import Campo from './components/Campo.jsx';

// helper rápido: garante número ("" -> 0)
const n = (v) => Number(v || 0);

// formata pra exibir com 2 casas
const fmt = (v) => isFinite(v) ? v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "—";

function App() {

  // Juros Simples
  const [c1, setC1] = useState("")
  const [i1, setI1] = useState("5")  // aceita "5" (5%) ou "0.05"
  const [t1, setT1] = useState("12")

  // Juros Compostos
  const [c2, setC2] = useState("")
  const [i2, setI2] = useState("5")
  const [t2, setT2] = useState("12")

  // Valor Presente
  const [vf3, setVf3] = useState("")
  const [i3, setI3] = useState("5")
  const [t3, setT3] = useState("12")

  const s = jurosSimples(n(c1), n(i1), n(t1))
  const c = jurosCompostos(n(c2), n(i2), n(t2))
  const p = valorPresente(n(vf3), n(i3), n(t3))

  return (
    <>
      <div className='container'>

        <h1>Cálculos Financeiros</h1>

        {/* 1) Juros Simples */}
        <section className="card">
          <h2>1 - Juros Simples</h2>
          <div className="grid">
            <Campo rotulo="Capital (C)" id="c1" valor={c1} aoMudar={setC1} placeholder="ex.: 1000" />
            <Campo rotulo="Taxa (i) % a.m." id="i1" valor={i1} aoMudar={setI1} placeholder="ex.: 5" />
            <Campo rotulo="Tempo (t) em meses" id="t1" valor={t1} aoMudar={setT1} placeholder="ex.: 12" />
          </div>
          <div className="resultado">
            <div><strong>J (juros):</strong> {fmt(s.J)}</div>
            <div><strong>M (montante):</strong> {fmt(s.M)}</div>
          </div>
        </section>

        {/* 2) Juros Compostos */}
        <section className="card">
          <h2>2 - Juros Compostos</h2>
          <div className="grid">
            <Campo rotulo="Capital (C)" id="c2" valor={c2} aoMudar={setC2} placeholder="ex.: 1000" />
            <Campo rotulo="Taxa (i) % a.m." id="i2" valor={i2} aoMudar={setI2} placeholder="ex.: 5" />
            <Campo rotulo="Tempo (t) em meses" id="t2" valor={t2} aoMudar={setT2} placeholder="ex.: 12" />
          </div>
          <div className="resultado">
            <div><strong>M (montante):</strong> {fmt(c.M)}</div>
            <div><strong>J (juros):</strong> {fmt(c.J)}</div>
          </div>
        </section>

        {/* 3) Valor Presente */}
        <section className="card">
          <h2>3 - Valor Presente</h2>
          <div className="grid">
            <Campo rotulo="Valor Futuro (VF)" id="vf3" valor={vf3} aoMudar={setVf3} placeholder="ex.: 2000" />
            <Campo rotulo="Taxa (i) % a.m." id="i3" valor={i3} aoMudar={setI3} placeholder="ex.: 5" />
            <Campo rotulo="Tempo (t) em meses" id="t3" valor={t3} aoMudar={setT3} placeholder="ex.: 12" />
          </div>
          <div className="resultado">
            <div><strong>VP (valor presente):</strong> {fmt(p.VP)}</div>
          </div>
        </section>

      </div>
    </>
  )
}

export default App
