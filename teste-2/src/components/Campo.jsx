
export default function Campo({ rotulo, id, tipo = "number", valor, aoMudar, passo = "any", placeholder }) {
    return (
        <div>
            <label htmlFor={id}>{rotulo}</label>
            <input id={id} type={tipo} step={passo} value={valor} onChange={e => aoMudar(e.target.value)} placeholder={placeholder} />
        </div>
    )
}
