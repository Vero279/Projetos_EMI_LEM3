# Projetos EMI — LEM 3

**Edições Multimédia Interativas · LEM 3 · ISTEC Porto · 2025/2026**

Portal de navegação para todos os projetos desenvolvidos na unidade curricular de Edições Multimédia Interativas, explorando p5.js, Unity e ferramentas de AR/VR para web.

🔗 [Visualizar portal](https://vero279.github.io/Projetos_EMI_LEM3/)

---

## 🖥️ Sobre o portal

O portal foi concebido para proporcionar uma navegação fluida e sem distrações.  
**Novidade:** Os projetos alojados no GitHub Pages (`*.github.io`) são agora abertos num **visualizador integrado (iframe)** diretamente no portal, sem necessidade de abrir uma nova aba.  
- O projeto é carregado dentro da mesma janela, mantendo o contexto de navegação.  
- Sempre disponível um botão **"Voltar à página principal"** para fechar o visualizador e regressar à grelha de projetos.  
- Caso prefira, também pode abrir o projeto numa nova aba através do botão **"Abrir em nova aba"** dentro do modal.  

Projetos externos (itch.io, Base44, etc.) continuam a abrir em nova aba por questões de compatibilidade.

---

## Projetos

### Projeto 1 — p5.js: Exploração Criativa

Três exercícios progressivos de programação criativa com a biblioteca p5.js, desenvolvidos ao longo das aulas.

---

#### 🌸 Visualizar Projetos — *View My Projects*

Portal de navegação construído em p5.js que apresenta os dois primeiros exercícios (*RedCircle* e *BlueSquare*) em cartões interativos com pré-visualização. Inclui barra de pesquisa para filtrar projetos.

| | |
|---|---|
| 🔗 Demo | [vero279.github.io/ViewMyProjects](https://vero279.github.io/ViewMyProjects/) |
| 💻 Repositório | [github.com/Vero279/ViewMyProjects](https://github.com/Vero279/ViewMyProjects/) |
| Tecnologias | p5.js · HTML5 · CSS3 · JavaScript |

---

#### 💧 Brush — *Editor de Imagem*

Editor de imagem interativo no browser com múltiplas ferramentas de brush baseadas em manipulação de píxeis com p5.js. O utilizador carrega uma fotografia e aplica efeitos em tempo real.

**Ferramentas disponíveis:** Blur · Color Adjustment (matiz, saturação, exposição, contraste) · Filtros (inversão, sépia, preto & branco) · Flower Brush · Noise · Eraser · Reset · Guardar imagem

| | |
|---|---|
| 🔗 Demo | [vero279.github.io/EditorBrush](https://vero279.github.io/EditorBrush/) |
| 💻 Repositório | [github.com/Vero279/EditorBrush](https://github.com/Vero279/EditorBrush/) |
| Tecnologias | p5.js · HTML5 · CSS3 · JavaScript |

---

#### 🌹 Letras — *Floating Letters & Rose Garden*

Experiência generativa que combina reconhecimento de voz com arte de partículas. O utilizador fala para o microfone e as letras surgem a flutuar no canvas; ao clicar ou arrastar, rosas animadas aparecem. As letras e rosas respondem à gravidade ao acionar *Drop Letters*.

**Interações:** Microfone (Web Speech API) · Clique/arrasto para rosas · Drop Letters · Clear All

| | |
|---|---|
| 🔗 Demo | [vero279.github.io/FloatingLetters](https://vero279.github.io/FloatingLetters/) |
| 💻 Repositório | [github.com/Vero279/FloatingLetters](https://github.com/Vero279/FloatingLetters/) |
| Tecnologias | p5.js · p5.sound · Web Speech API · HTML5 · CSS3 |

---

### Projeto 2 — Unity: Cinemachine Interativo

#### 🎮 Unity Cinemachine — *CinemachineInteractive*

Protótipo desenvolvido em Unity que explora câmaras Cinemachine com Dolly Splines e controlos de UI interativos. Os personagens foram importados do Mixamo com as respetivas animações, e a câmara percorre um trilho (*Dolly Track*) controlado em tempo real pelo utilizador através de Toggles e Sliders de UI.

**Destaques técnicos:**
- Assets de personagens e animações via **Mixamo**
- Sistema de câmaras **Cinemachine** com **Dolly Spline** para movimento cinematográfico ao longo de um trilho
- **UI Interativa:** Toggles para alternar câmaras/estados e Slider para controlar a posição da câmara no trilho
- Publicado como HTML5 e jogável diretamente no browser via itch.io

| | |
|---|---|
| 🔗 Demo | [vcmc.itch.io/cinemachineinteractive](https://vcmc.itch.io/cinemachineinteractive) |
| Plataforma | HTML5 (browser) via itch.io |
| Tecnologias | Unity · Cinemachine · Mixamo · C# |
| Estado | Protótipo |

---

### Projeto 3 — APIs e Dados Externos

Dois projetos que consomem APIs públicas e apresentam os dados de forma visualmente criativa com p5.js.

---

#### 🌍 Meteo — *European Weather Dashboard*

Dashboard de dados meteorológicos em tempo real para 7 cidades europeias, visualizado como arte de dados com cubos 3D rotativos. Cada cubo codifica temperatura, qualidade do ar, humidade e vento para uma previsão de 7 dias. Dados fornecidos pela API Open-Meteo (gratuita, sem chave).

| | |
|---|---|
| 🔗 Demo | [vero279.github.io/Weather-API](https://vero279.github.io/Weather-API/) |
| 💻 Repositório | [github.com/Vero279/Weather-API](https://github.com/Vero279/Weather-API/) |
| API | [Open-Meteo](https://open-meteo.com/) (gratuita) |
| Tecnologias | p5.js · Fetch API · HTML5 · CSS3 |

---

#### 🎬 Filmes — *Creative Film Poster Editor*

Browser de filmes que combina pesquisa via API (TMDB/Gist) com edição criativa de posters em tempo real. Após pesquisar um filme por título e ano, o utilizador aplica filtros e distorções diretamente sobre o poster com ferramentas de brush baseadas em manipulação de píxeis.

**Ferramentas de edição:** Blur · Pixelate · Glitch · Noise · Color Filter · Edges · Warp · Erase · Reset · Guardar

| | |
|---|---|
| 🔗 Demo | [vero279.github.io/Films-JSON](https://vero279.github.io/Films-JSON/) |
| 💻 Repositório | [github.com/Vero279/Films-JSON](https://github.com/Vero279/Films-JSON/) |
| API | TMDB via Gist |
| Tecnologias | p5.js · Fetch API · HTML5 · CSS3 |

---

### Projeto 4 — AR/VR para Web

#### 📚 Dive into Lore — *BiblioVR*

Biblioteca interativa imersiva para web criada com a plataforma **Base44**, sem necessidade de hardware dedicado de VR. O utilizador pode explorar corredores realistas de uma biblioteca virtual e interagir com uma vasta coleção de livros como se estivesse fisicamente no espaço. A aplicação funciona diretamente no browser e inclui sistema de autenticação (registo e login).

**Destaques:**
- Ambiente 3D imersivo de biblioteca navegável no browser
- Interação com livros e exploração livre do espaço virtual
- Sistema de utilizadores com registo, login e recuperação de palavra-passe
- Desenvolvido inteiramente com **Base44**, ferramenta de criação de apps web com AR/VR

| | |
|---|---|
| 🔗 Demo | [dive-into-lore.base44.app](https://dive-into-lore.base44.app) |
| Plataforma | Web (browser), sem hardware adicional |
| Tecnologias | Base44 · AR/VR Web |

---

## Resumo dos Projetos

| # | Nome | Tecnologia Principal | Demo |
|---|---|---|---|
| 1 | View My Projects | p5.js | [🔗](https://vero279.github.io/ViewMyProjects/) |
| 1 | EditorBrush | p5.js | [🔗](https://vero279.github.io/EditorBrush/) |
| 1 | FloatingLetters | p5.js + Web Speech API | [🔗](https://vero279.github.io/FloatingLetters/) |
| 2 | Unity Cinemachine | Unity + Cinemachine + Mixamo | [🔗](https://vcmc.itch.io/cinemachineinteractive) |
| 3 | Weather API | p5.js + Open-Meteo | [🔗](https://vero279.github.io/Weather-API/) |
| 3 | Films JSON | p5.js + TMDB API | [🔗](https://vero279.github.io/Films-JSON/) |
| 4 | Dive into Lore (AR/VR) | Base44 | [🔗](https://dive-into-lore.base44.app) |

---

## Autora

**Verónica Couto**  
veronica.couto.2022279@my.istec.pt  
ISTEC Porto · 2025/2026
