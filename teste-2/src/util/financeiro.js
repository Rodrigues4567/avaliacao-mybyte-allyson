
// Normaliza a taxa: se i > 1, converte para porcentagem
function normalizarTaxa(i) {
    return i > 1 ? i / 100 : i;
}

// 1 - Juros simples
export function jurosSimples(C, i, t) {
    i = normalizarTaxa(i)
    const J = C * i * t
    const M = C + J
    return { J, M }
}

// 2 - Juros compostos
export function jurosCompostos(C, i, t) {
    i = normalizarTaxa(i)
    const M = C * Math.pow(1 + i, t)
    const J = M - C
    return { J, M }
}

// 3 - Valor presente
export function valorPresente(VF, i, t) {
    i = normalizarTaxa(i)
    const VP = VF / Math.pow(1 + i, t)
    return { VP }
}
