# 📖 Glossary

> Definições centralizadas dos principais termos utilizados neste projeto.
> Este glossário reúne e contextualiza conceitos relevantes para reduzir ambiguidades e promover entendimento consistente entre diferentes contextos técnicos e de domínio.

---

## 📌 Como usar este glossário

- Os termos estão organizados em ordem alfabética 
- As definições são concisas e funcionais
- Quando aplicável, incluem:
  - Definição
  - Link de referência
  - Contexto
  - Exemplo
  - Termos equivalentes

---

## 🔎 Índice

|   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|
| [A](#-a) | [B](#-b) | [C](#-c) | [D](#-d) | [E](#-e) | [F](#-f) | [G](#-g) |
| [H](#-h) | [I](#-i) | [J](#-j) | [K](#-k) | [L](#-l) | [M](#-m) | [N](#-n) |
| [O](#-o) | [P](#-p) | [Q](#-q) | [R](#-r) | [S](#-s) | [T](#-t) | [U](#-u) |
| [V](#-v) | [W](#-w) | [X](#-x) | [Y](#-y) | [Z](#-z) |   |   |

---

## 🔤 B

### Browser Engine (Motor de Navegador)

**Definição:**  
Componente central de um navegador responsável por executar aplicações web, interpretando HTML/CSS, gerenciando o DOM e coordenando a execução de JavaScript e a renderização.

- https://webkit.org/ 
- https://www.chromium.org/blink/

Arquitetura de Execução:
 - Motores de renderização (Rendering Engine): layout e renderização (Blink, WebKit, Gecko).
 - Motores de JavaScript (JavaScript Engine): execução de scripts (V8, JavaScriptCore, SpiderMonkey).

Modos de Operação e Controle:
 - Headless Mode: execução sem interface gráfica.
 - Automação via Protocolos: Mecanismos de inspeção e controle (Ex: CDP para Chromium) que permitem que ferramentas externas (Playwright, Puppeteer) manipulem o estado do navegador e do DOM.

**Contexto:**  
Base técnica dos navegadores web e ponto de integração para automação E2E por meio dos protocolos expostos pelos motores.

**Exemplos:**  
 - Blink (Chromium-based: Chrome, Edge)
 - WebKit (Safari)
 - Gecko (Firefox)

Playwright (uso de protocolos):
- Chromium → Chrome DevTools Protocol (CDP)  
- WebKit → protocolo de depuração remota do WebKit (via camada de transporte do Playwright)
- Firefox → protocolo de depuração remota do Firefox (adaptado pelo Playwright)

---

## 🔤 C

### Codegen (Geração de Código)

**Definição:**  
Processo de gerar código ou artefatos automaticamente, de forma total ou parcial, a partir de uma entrada estruturada (templates, modelos, contratos ou interações).

- https://zencoder.ai/glossary/code-generation  
- https://tomassetti.me/code-generation/

Classificações comuns:

- Baseada em Templates (Template-based): Geração a partir de modelos fixos e parametrizados.
- Orientada a Modelos (MDD - Model-Driven Development): Geração tendo modelos de domínio como fonte primária de verdade.
- Baseada em IA (AI-based): Geração fundamentada em modelos de aprendizado de máquina (LLMs).
- Baseada em Gravação (Recording-based): Geração a partir da captura de interações (ex: Playwright, Selenium IDE).

**Contexto:**  
Used to accelerate development, standardize structures, and reduce manual effort in repetitive tasks. In end-to-end testing, it is often applied to generate initial scripts from real user interactions.

**Exemplos:**  
 - API: Swagger Codegen, GraphQL Code Generator.
 - Assistência por IA: ChatGPT, GitHub Copilot.
 - Testes E2E: playwright codegen, Cypress Studio.
 - Estrutura: Scaffolding e Boilerplates.

**Termos equivalentes:**  
Automatic code generation • Source Code Generation

---

## 🔤 P

### Page Object Model (POM)

**Definição:** 
É um padrão de projeto usado em automação de testes onde cada página (ou tela) do sistema é representada por uma classe. Essa classe encapsula elementos da interface e ações possíveis nela. Atua como um repositório único para os serviços e operação que a página oferece, em vez serviços espalhados pelo teste. 

 - https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/
 - https://martinfowler.com/bliki/PageObject.html
 - https://playwright.dev/docs/pom

Principais impactos:
 - Reduzir duplicação de código
 - Tornar testes mais legivéis
 - Separar lógica de teste (assert) da lógica de interação com UI (ações)

Limitação:
 - Reuso baixo quando há muitos componentes compartilhados. 

Evoluções do POM:
 - Screenplay Pattern
 - Page Component Object Model

**Contexto:** 
De acordo com o programa de Engenharia de Automação de Testes do ISTQB (2016), uma boa prática é separar o software usado para testes do sistema em teste para minimizar interferências. Ou seja, uma estrutura de automação de teste deve ser projetada e gerenciada como um produto de software independente, com seu próprio ciclo de vida, priorizando a facilidade de manutenção e aprendizado. E a depender do contexto, seu uso pode ser overengineering. 

**Exemplos:**  
 - Normalmente um página é modelada pelas partes:
     - LoginPage
        - Localizadores, para definir componentes da página.
        - Métodos que interagem com esses localizadores.

### Page Component Object Model

**Definição:** 
Representar componentes da UI como objetos independentes, não páginas. Focando também em reutilização e modularidade a nível de componente.

- https://martinfowler.com/articles/micro-frontends.html
- https://playwright.dev/docs/best-practices
- https://gorillalogic.com/test-automation-frameworks-page-object-model-vs-page-component-object-model/

Limitação:
 - Ainda depende da UI
 - Pode ficar fragmentado demais sem disciplina

**Contexto:** 
Devido arquiteturas modernas como micro front-ends, onde há reutilização de partes da UI (botões, tabelas, modais), testes de componentes isolados ou multiplos times mexendo em pedaços diferentes da DOM, o uso puro de POM  começa a quebrar.

**Exemplos:**  
 - LoginPage vira:
     - LoginForm
     - Button
     - InputField

---

## 🔤 S

### Screenplay Pattern

**Definição:** 
Padrão onde o teste é modelado como comportamento de atores, e esse padrão orquestra os outros pardrões.

Principais impactos:
 - reduzir acoplamento com UI
 - aumenta reuso de lógica
 - escala melhor em sistemas complexos
 - cria testes que parecem linguagem de negócio

Estutura:
 - Actor: quem executa
 - Task: objetivo maior
 - Interaction: ação técnica
 - Question: validação

**Contexto:** 
Embora tenha nascido da comunidade  Serenity BDD

**Exemplos:**
João (Actor)
→ faz login (Task)
   → digita usuário (Interaction)
   → digita senha (Interaction)
   → clica botão (Interaction)
→ verifica dashboard (Question)

### Storage State

---

## 🔤 T

### Testing Library Pattern


---
## 📚 References

- [Technical Writing](https://developers.google.com/tech-writing/one/words)

---

## 📝 Contribution Guidelines

- Avoid vague or circular definitions  
- Prefer functional explanations over synonyms  
- Keep definitions consistent with system behavior  