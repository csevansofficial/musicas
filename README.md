# C. S. Evans

Site oficial de C. S. Evans, apresentando singles e músicas.

## Instalação

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```

## Desenvolvimento

Para iniciar o servidor de desenvolvimento:
```bash
npm run dev
```

## Build

Para criar a build de produção:
```bash
npm run build
```

## Deploy no Netlify

1. Faça login na sua conta do Netlify
2. Conecte o repositório do GitHub
3. Configure as seguintes configurações de build:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Clique em "Deploy site"

## Estrutura do Projeto

```
├── public/              # Arquivos estáticos
│   ├── imagens/        # Imagens dos singles
│   └── styles.css      # Estilos globais
├── src/                # Código fonte
│   ├── App.vue         # Componente principal
│   └── main.js         # Ponto de entrada
├── index.html          # Template HTML
├── vite.config.js      # Configuração do Vite
└── package.json        # Dependências e scripts
```
