
import { jurosSimples, jurosCompostos, valorPresente } from "../src/util/financeiro.js";

console.log("=== Demonstração dos Cálculos Financeiros ===\n")

// Exemplo 1: Juros Simples
const js = jurosSimples(1000, 5, 12) // 1000, 5% ao mês, 12 meses
console.log("Juros Simples:")
console.log(`J = ${js.J.toFixed(2)}`)
console.log(`M = ${js.M.toFixed(2)}\n`)

// Exemplo 2: Juros Compostos
const jc = jurosCompostos(1000, 5, 12)
console.log("Juros Compostos:")
console.log(`M = ${jc.M.toFixed(2)}`)
console.log(`J = ${jc.J.toFixed(2)}\n`)

// Exemplo 3: Valor Presente
const vp = valorPresente(2000, 5, 12) // Valor futuro 2000
console.log("Valor Presente:")
console.log(`VP = ${vp.VP.toFixed(2)}`)
