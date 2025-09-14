# 📊 Testes de Programação – Formulário e Cálculos Financeiros

Este repositório contém a resolução de **dois testes práticos**:

1. **Teste 1 – Formulário Estilizado (HTML, CSS e JavaScript)**  
2. **Teste 2 – Cálculos Financeiros (JavaScript/React com Vite)**  

---

## 🚀 Teste 1 – Formulário Estilizado

### ✅ Objetivo
Criar um formulário visualmente agradável com os seguintes critérios:

- Fundo da página preto;  
- Campos de texto e botões com cantos arredondados;  
- Fonte clara e contraste apropriado para leitura;  
- Não é necessário envio de dados;  
- Utilizar apenas **HTML, CSS e JavaScript puro**;  
- Código bem estruturado e organizado.  

### 🖼️ Funcionalidades
- Formulário de cadastro com campos **Nome** e **Email**.  
- Botão estilizado com hover.  
- Layout responsivo e simples.  

📂 Arquivos:  
- `formulario/index.html`  
- `formulario/style.css`

---

## 📈 Teste 2 – Cálculos Financeiros

### ✅ Objetivo
Criar funções em **JavaScript/React** que resolvam três cálculos básicos de matemática financeira:

1. **Juros Simples**  
   - Fórmulas:  
     - `J = C × i × t`  
     - `M = C + J`  
   - Onde: C = capital, i = taxa de juros (ao mês), t = tempo (em meses).

2. **Juros Compostos**  
   - Fórmulas:  
     - `M = C × (1 + i)^t`  
     - `J = M − C`

3. **Valor Presente**  
   - Fórmula:  
     - `VP = VF / (1 + i)^t`  
   - Onde: VF = valor futuro.

### 🖼️ Funcionalidades
- **Execução via terminal (Node.js)**:  
  Arquivo `demo.js` demonstra os cálculos diretamente no console.  
  - `jurosSimples(C, i, t)`  
  - `jurosCompostos(C, i, t)`  
  - `valorPresente(VF, i, t)`  
  - A função `normalizarTaxa(i)` garante que `5` seja interpretado como **5%** (0.05).  

- **Interface React simples**:  
  Interface construída com **React + Vite**, exibindo os três cálculos.  
  - Inputs para valores de **capital, taxa e tempo**.  
  - Resultados formatados em reais com 2 casas decimais.  
  - Layout responsivo e estilizado em modo escuro.  

📂 Estrutura principal:  
- `src/util/financeiro.js` → funções de cálculo.  
- `src/components/Campo.jsx` → componente de input reutilizável.  
- `src/App.jsx` → interface principal.  
- `demo.js` → execução via terminal.  

---

## ⚙️ Como executar o projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/Rodrigues4567/avaliacao-mybyte-allyson.git
cd avaliacao-mybyte-allyson
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Executar os cálculos no terminal
```bash
npm run calc:demo
```

### 4. Executar a interface react
```bash
npm run dev
```

## 🛠️ Tecnologias utilizadas

- **HTML, CSS, JavaScript** → formulário estilizado do **Teste 1**.  
- **Node.js** → execução dos cálculos financeiros diretamente no terminal.  
- **React + Vite** → interface simples e funcional do **Teste 2**. 
