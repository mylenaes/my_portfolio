# Mylena Silva — Portfólio

Portfólio pessoal desenvolvido para apresentar minha trajetória acadêmica, experiências profissionais, projetos, conhecimento na área de desenvolvimento web.

🔗 **Acesse o projeto online:** [my-portfolio-eight-rust-tlw6xr6ayr.vercel.app](https://my-portfolio-eight-rust-tlw6xr6ayr.vercel.app/)

---

## ✨ Funcionalidades

- Página inicial com apresentação pessoal e efeito de digitação no título profissional
- Seção "Sobre mim"
- Timeline com formação acadêmica e experiências
- Seção de hobbies com cards interativos
- Apresentação de projetos e experiências profissionais
- Formulário de contato integrado com EmailJS
- Links para redes sociais
- Layout responsivo para dispositivos móveis
- Animações e efeitos de interação
- Fundo animado interativo com partículas em estilo espacial

---

## 🛠️ Tecnologias

- **React** — Construção da interface e componentes
- **JavaScript (ES6+)** — Lógica e interatividade
- **Vite** — Ambiente de desenvolvimento e build
- **CSS3** — Estilização, animações e responsividade
- **Lucide React** — Biblioteca de ícones vetoriais
- **tsParticles** — Criação do fundo animado de partículas
- **EmailJS** — Envio de mensagens pelo formulário de contato sem a necessidade de um backend

---

## 📁 Estrutura do Projeto

```text
my_portfolio/
├── src/
│   ├── assets/                 # Imagens e arquivos visuais utilizados no projeto
│   ├── components/
│   │   ├── background/         # Componentes relacionados ao fundo animado
│   │   ├── layout/             # Elementos estruturais, como Navbar e Footer
│   │   ├── sections/           # Seções principais do portfólio
│   │   └── ui/                 # Componentes reutilizáveis da interface
│   ├── App.jsx                 # Estrutura principal da aplicação
│   ├── index.css               # Estilos globais
│   └── main.jsx                # Ponto de entrada da aplicação
│
├── .gitignore                  # Arquivos e pastas ignorados pelo Git
├── eslint.config.js            # Configurações do ESLint
├── index.html                  # Página HTML principal
├── package.json                # Dependências e scripts do projeto
├── package-lock.json           # Registro das versões das dependências
├── README.md                   # Documentação do projeto
└── vite.config.js              # Configurações do Vite
```

---

## 🎨 Design & Identidade Visual

O design do portfólio segue uma abordagem minimalista, moderna e inspirada em elementos tecnológicos, espaciais e com um toque de personalidade.

### Paleta de Cores

A identidade visual utiliza uma paleta baseada em tons de azul, cor favorita da desenvolvedora:

- **Azul ciano:** `#05A8BF` — Destaques, títulos, links e elementos de interação
- **Azul:** `#1C58B0` — Elementos secundários, detalhes e componentes da interface
- **Azul profundo:** `#2A1D9E` — Bordas, contrastes e elementos de profundidade
- **Fundos:** Tons escuros utilizados para criar a atmosfera espacial e garantir contraste com os conteúdos

### Tipografia

- **Space Grotesk** — Títulos e elementos de destaque
- **Inter** — Textos de leitura e conteúdos gerais
- **JetBrains Mono** — Trechos de código e detalhes técnicos

### Fundo Animado

O fundo utiliza partículas interconectadas por meio do **tsParticles**, criando uma estética inspirada em constelações e aos Grafos da disciplina de Algoritmos em Grafos, uma das melhores experiências da desenvolvedora na universidade.

As partículas possuem movimentos suaves e interações visuais que complementam a identidade tecnológica do portfólio sem prejudicar a leitura do conteúdo.

---

# 🚀 Como Executar o Projeto

### Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) — versão LTS recomendada
- `npm` — gerenciador de pacotes incluído na instalação do Node.js

### Passo a passo

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/mylenaes/my_portfolio.git
   ```

2. **Acesse a pasta do projeto:**

   ```bash
   cd my_portfolio
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

   O comando `npm install` instala automaticamente todas as dependências necessárias para o funcionamento do projeto, conforme definidas no arquivo `package.json`.

4. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

5. **Acesse o projeto no navegador:**

   Abra o endereço indicado no terminal. Por padrão, o Vite disponibiliza a aplicação em:

   ```text
   http://localhost:5173
   ```

---

## 📦 Build para Produção

Para gerar a versão otimizada do projeto para produção:

```bash
npm run build
```

Após a execução, os arquivos de produção serão gerados na pasta `dist/`.

Para testar a versão de produção localmente:

```bash
npm run preview
```

---

## 📬 Contato

- **GitHub:** [github.com/mylenaes](https://github.com/mylenaes)
- **Deploy:** [my-portfolio-eight-rust-tlw6xr6ayr.vercel.app](https://my-portfolio-eight-rust-tlw6xr6ayr.vercel.app/)

---

Desenvolvido com 💙 por **Mylena Silva**
