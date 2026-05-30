# Comando Auto Center — Site Institucional

Landing page institucional da **Comando Auto Center**, oficina mecânica e auto center em Caldas Novas - GO. O foco do site é **conversão**: apresentar os serviços de forma clara e levar o visitante ao WhatsApp.

🔗 **Produção:** https://comandoautocenter.com/

---

## ✨ Funcionalidades

- **Página única responsiva** (mobile, tablet e desktop)
- **CTAs de WhatsApp** com mensagem pré-preenchida + botão flutuante fixo
- **Carrossel de avaliações** reais do Google (swipe no mobile, setas no desktop)
- **Mapa do Google** com a localização exata da oficina
- **SEO local** otimizado: meta tags, Open Graph/Twitter, JSON-LD (`AutoRepair`)
- **Acessibilidade**: navegação por teclado, foco visível, `aria-labels`, skip link
- **Ícones em SVG inline** (sem dependência de biblioteca externa)

---

## 🛠️ Tecnologias

- HTML5 + [Tailwind CSS](https://tailwindcss.com/) (via CDN)
- JavaScript puro (vanilla) — menu mobile e carrossel
- Sem build, sem framework, sem dependências de instalação

---

## 📁 Estrutura

```
.
├── index.html        # Todo o site (HTML + estilos + scripts)
├── logo.png          # Logo da marca (também usada como favicon)
├── carro.jpg         # Imagem do hero (topo)
├── fachada.jpg       # Foto da fachada (seção "Sobre")
├── og-image.png      # Imagem de compartilhamento 1200×630 (redes sociais)
└── README.md
```

Todo o site está em um único arquivo `index.html`. Os recursos externos (Tailwind, fonte e mapa) são carregados por CDN/iframe.

---

## 🚀 Rodando localmente

Por ser um site estático, basta abrir o `index.html` no navegador.

Para um servidor local (recomendado, evita restrições de alguns recursos):

```bash
# Python
python -m http.server 8000

# ou Node
npx serve
```

Depois acesse `http://localhost:8000`.

---

## ☁️ Deploy na Vercel

O projeto é detectado automaticamente como site estático (sem build).

1. Suba o projeto para um repositório no GitHub.
2. Em [vercel.com](https://vercel.com) → **Add New → Project** → importe o repositório.
3. Mantenha as configurações padrão → **Deploy**.

> **Importante:** as tags `canonical`, `og:url` e `og:image` apontam para
> `https://comandoautocenter.com`. Conecte esse domínio ao projeto em
> **Settings → Domains** para que o cartão de compartilhamento e o SEO funcionem
> corretamente.

---

## ⚙️ Personalização

Os principais pontos editáveis no `index.html`:

| O que | Onde |
|---|---|
| Número de WhatsApp | Links `https://wa.me/5564992071136?...` |
| Horário de funcionamento | Rodapé e bloco JSON-LD (`openingHoursSpecification`) |
| Endereço / coordenadas | Seção "Localização", iframe do mapa e JSON-LD (`geo`) |
| Avaliações | Seção `#depoimentos` (carrossel) |
| Serviços | Seção `#servicos` (cards) |
| Cores da marca | `tailwind.config` no `<head>` (`comandoRed`, `comandoYellow`) |
| Google Analytics | Bloco comentado no `<head>` (trocar `G-XXXXXXXXXX`) |

---

## 📌 Observações

- **Tailwind via CDN** é ótimo para testar, mas não é o ideal para produção
  (carrega o compilador no navegador). Para um site final mais rápido,
  considere gerar um CSS estático do Tailwind.
- A `og-image.png` exibe o telefone **64 3453-7818** (presente na logo), que é
  diferente do WhatsApp usado no site (**64 99207-1136**). Verifique se os dois
  números estão corretos.

---

## 📞 Contato

- **WhatsApp:** +55 64 99207-1136
- **Endereço:** Jardim dos Turistas, Caldas Novas - GO, 75690-000
- **Instagram:** [@comandoautocenter10](https://www.instagram.com/comandoautocenter10/)
- **Horário:** Segunda a sexta 08h–18h · Sábado 08h–12h
