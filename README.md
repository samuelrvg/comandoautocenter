# Comando Auto Center — Site Institucional

Landing page institucional da **Comando Auto Center**, oficina mecânica e auto center em Caldas Novas - GO. O foco do site é **conversão**: apresentar os serviços de forma clara e levar o visitante ao WhatsApp.

🔗 **Produção:** https://www.comandoautocenter.com/

---

## ✨ Funcionalidades

- **Página única responsiva** (mobile, tablet e desktop)
- **CTAs de WhatsApp** com mensagem pré-preenchida + botão flutuante fixo
- **Carrossel de avaliações** reais do Google (swipe no mobile, setas no desktop)
- **Mapa do Google** com a localização exata da oficina
- **SEO local** otimizado: meta tags, Open Graph/Twitter, JSON-LD (`AutoRepair` com
  `AggregateRating` + avaliações), `canonical`, `robots.txt` e `sitemap.xml`
- **Performance**: CSS compilado (sem CDN) e imagens em WebP para carregamento rápido
- **Acessibilidade**: navegação por teclado, foco visível, `aria-labels`, skip link
- **Ícones em SVG inline** (sem dependência de biblioteca externa)

---

## 🛠️ Tecnologias

- HTML5 + [Tailwind CSS](https://tailwindcss.com/) compilado via **Tailwind CLI** (CSS estático, sem CDN)
- JavaScript puro (vanilla) — menu mobile e carrossel
- Imagens otimizadas em **WebP** (com fallback JPG via `<picture>`)
- Build leve só para o CSS — sem framework nem bundler

---

## 📁 Estrutura

```
.
├── index.html          # Todo o site (HTML + scripts)
├── styles.css          # CSS compilado do Tailwind (GERADO — vai pro deploy)
├── tailwind.config.js  # Config do Tailwind (cores da marca, content)
├── package.json        # Scripts de build do CSS
├── src/
│   └── input.css       # Fonte do CSS: diretivas Tailwind + estilos customizados
├── robots.txt          # Indexação para buscadores
├── sitemap.xml         # Mapa do site
├── logo.png            # Logo da marca (também usada como favicon)
├── carro.jpg/.webp     # Imagem do hero (topo)
├── fachada.jpg/.webp   # Foto da fachada (seção "Sobre")
├── og-image.png        # Imagem de compartilhamento 1200×630 (redes sociais)
└── README.md
```

O HTML e os scripts ficam no `index.html`. O estilo é gerado pelo Tailwind CLI a
partir de `src/input.css` → `styles.css`. O mapa é carregado por iframe.

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

## 🎨 Build do CSS (Tailwind)

O `styles.css` é **gerado** pelo Tailwind CLI a partir de `src/input.css`. As classes
do HTML são lidas de `index.html` (ver `content` no `tailwind.config.js`) e só o CSS
realmente usado entra no arquivo final (~15 KB minificado).

Primeiro, instale as dependências (uma vez):

```bash
npm install
```

Depois, sempre que **alterar classes do Tailwind no `index.html`** ou os estilos em
`src/input.css`, recompile:

```bash
npm run build:css      # gera/atualiza o styles.css (minificado)
```

Durante o desenvolvimento, deixe o watcher recompilando a cada salvamento:

```bash
npm run watch:css      # recompila automaticamente ao salvar
```

> ⚠️ **Se esquecer de recompilar**, o site continua usando o `styles.css` antigo e
> suas mudanças de estilo **não aparecem**. O `styles.css` é versionado e vai junto
> no deploy; `node_modules/` e `src/` **não** precisam ser publicados.

---

## ☁️ Deploy na Vercel

O projeto é detectado automaticamente como site estático (sem build).

1. Suba o projeto para um repositório no GitHub.
2. Em [vercel.com](https://vercel.com) → **Add New → Project** → importe o repositório.
3. Mantenha as configurações padrão → **Deploy**.

> **Importante:** as tags `canonical`, `og:url` e `og:image` apontam para
> `https://www.comandoautocenter.com` (versão **com www**, que é o domínio primário
> e para onde a versão sem www redireciona). Mantenha `www` como domínio primário em
> **Settings → Domains** para que canonical, compartilhamento e SEO fiquem consistentes.

> **CSS no deploy:** o `vercel.json` já define o build (`npm run build:css`) e o
> output (`.`), então a Vercel **gera o `styles.css` automaticamente** a cada deploy
> — não é preciso configurar nada no painel nem lembrar de recompilar antes do push.

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
| Cores da marca | `tailwind.config.js` (`comandoRed`, `comandoYellow`) — recompilar após mudar |
| Estilos customizados | `src/input.css` (`.stripe`, `.card-border` etc.) — recompilar após mudar |
| Google Analytics | Bloco `gtag.js` ativo no `<head>` (ID `G-J5CT6CFRXP`) |

---

## 📌 Observações

- O **CSS é compilado** pelo Tailwind CLI (`styles.css`) — não há mais Tailwind via
  CDN. Lembre de rodar `npm run build:css` após mexer em classes/estilos.
- A `og-image.png` é mantida em **PNG** de propósito: WhatsApp e Facebook não
  renderizam WebP de forma confiável no preview de link. As demais fotos usam WebP.
- A `og-image.png` exibe o telefone **64 3453-7818** (presente na logo), que é
  diferente do WhatsApp usado no site (**64 99207-1136**). Verifique se os dois
  números estão corretos.

---

## 📞 Contato

- **WhatsApp:** +55 64 99207-1136
- **Endereço:** Jardim dos Turistas, Caldas Novas - GO, 75690-000
- **Instagram:** [@comandoautocenter10](https://www.instagram.com/comandoautocenter10/)
- **Horário:** Segunda a sexta 08h–18h · Sábado 08h–12h
