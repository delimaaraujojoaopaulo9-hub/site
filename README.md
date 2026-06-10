# ATELIÊ — Loja Premium de Moda Masculina

Loja online premium construída com **Next.js 14 (App Router)**, **TypeScript**,
**TailwindCSS**, **Framer Motion** e **Firebase**. Design minimalista e
responsivo (mobile first) em paleta preto / branco / cinza escuro, inspirado
em marcas como Zara, Reserva e Lacoste.

## Stack

- **Next.js 14** — App Router, Server Components
- **React 18** + **TypeScript**
- **TailwindCSS** — estilização utilitária com tema customizado
- **Framer Motion** — animações e transições
- **Firebase / Firestore** — catálogo de produtos e autenticação

## Estrutura

```
app/          → rotas (App Router), layout e estilos globais
components/   → Navbar, Hero, ProductCard, Footer
lib/          → inicialização do Firebase
hooks/        → React hooks reutilizáveis
services/     → acesso a dados (produtos) e tipos
public/       → imagens e assets estáticos
```

## Como rodar

```bash
npm install
cp .env.example .env.local   # preencha as credenciais do Firebase (opcional)
npm run dev
```

Acesse http://localhost:3000.

> Sem credenciais do Firebase, o catálogo usa um conjunto de produtos de
> demonstração definido em `services/productService.ts`.

## Scripts

| Comando         | Descrição                       |
| --------------- | ------------------------------- |
| `npm run dev`   | Ambiente de desenvolvimento     |
| `npm run build` | Build de produção               |
| `npm run start` | Servidor de produção            |
| `npm run lint`  | Análise estática (ESLint)       |
