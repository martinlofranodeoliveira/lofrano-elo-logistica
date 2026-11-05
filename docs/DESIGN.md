---
name: "Elo"
description: "Sistema visual implementado — Logística & transporte"
colors:
  primary: "#0b4867"
  accent: "#ff9852"
  background: "#f3f5f4"
  text: "#14374a"
  hero: "#073c59"
  surface: "#e4ecee"
  card: "#fff"
  frame-background: "#09090b"
  frame-text: "#f5f5f7"
  focus: "#ff2d60"
typography:
  display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(48px, 5vw, 69px)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-2.8px"
  body:
    fontFamily: "DM Sans, Arial, sans-serif"
    lineHeight: 1.6
---

# Design System: Elo

## Overview

Logística de composição direta: azul profundo, laranja e branco, fotografia operacional e percurso ilustrado. O rastreamento é a principal área de interação.

Registro descritivo do código atual, com autoridade de preservação da [referência pública](https://lofranotecnologia.com.br/modelos/elo). Fontes normativas: [estilos do modelo](../src/demo.css), [base compartilhada](../src/base.css), [componentes da demonstração](../src/Demo.jsx) e [moldura de distribuição](../src/App.jsx). Layout, contraste e overflow visual permanecem não verificados em navegador; valores abaixo são declarações de fonte, não medições de renderização.

## Colors

Azul conduz ações e etapas completas; laranja chama atenção no hero e nos ícones. Cartões brancos destacam rastreamento e seleção de solução. O frontmatter registra cores principais por papel; variações locais permanecem no CSS. A moldura LOFRANO conserva fundo escuro, texto claro e foco rosa. Paleta fixa, sem alternância de tema.

## Typography

Títulos herdam Manrope; corpo e controles usam DM Sans. O título principal passa por (52px) até (1000px) e (54px) até (760px). Manrope e DM Sans são fontes locais de [`assets/`](../assets/); Georgia, Arial e Helvetica dependem das alternativas do sistema. O token display descreve o título principal em desktop. A base define h2 móvel (34px), com espaçamento de letras (-1.3px), até (760px); regras mais específicas do modelo prevalecem.

## Layout

Hero, rastreamento e soluções em duas colunas; etapas em grade de duas colunas. Até (1000px), diminuem lacunas do rastreamento. Até (760px), as seções viram uma coluna, etapas continuam em duas e o campo de código usa (16px).

A moldura organiza autoria e links acima da demonstração, guia abaixo e rodapé final. Cabeçalho e rodapé permitem quebra; até (600px), o guia reduz o padding para (40px 20px).

## Elevation & Depth

A etiqueta da fotografia usa sombra (0 8px 30px #0002); resultado usa sombra discreta (0 10px 30px #153d4a06). Bordas e tons definem as demais áreas.

## Shapes

Cartões e campo de rastreamento são retangulares; marcadores de etapas são circulares (24px). Linha de percurso tracejada e ícones comunicam direção. A imagem conceitual está em [`assets/elo.webp`](../assets/elo.webp); preservar seu recorte definido pelo CSS.

## Components

- Rastreamento: inicia com ELO-DEMO-01; envio normaliza o texto e aceita dois códigos fictícios. Código desconhecido troca o resultado por estado vazio explicativo.
- Etapas: concluídas/atual usam marcadores preenchidos e texto de estado; o resultado é anunciado com `aria-live="polite"`.
- Soluções: três botões com `aria-pressed` trocam conteúdo; seleção usa superfície branca.
- Estados compartilhados: Controles da demonstração usam o foco global rosa (3px), afastado (5px). A moldura inverte o botão de reinício para fundo branco no hover. As interações do modelo usam os estados descritos acima; não há variante de hover adicional declarada para elas. Reiniciar remonta a demonstração e restaura o estado local.
- Movimento: a base usa rolagem suave; a preferência por movimento reduzido troca a rolagem CSS para automática e reduz durações de animação/transição para (0.01ms).

## Do's and Don'ts

- **Do:** Preservar hierarquia entre código, origem/destino e etapas do percurso.
- **Do:** manter avisos de conceito fictício, foco visível e estados de seleção coerentes com os controles.
- **Don't:** Apresentar o resultado como consulta a transportadora ou rastreamento real.
- **Don't:** interpretar a moldura compartilhada como autorização para substituir a identidade visual do modelo.
