# 📖 Glossary

> Centralized definitions of key terms used in this project.  
> This glossary standardizes terminology to reduce ambiguity, support onboarding, and ensure consistent understanding across technical and domain contexts.

---

## 📌 How to Use This Glossary

- Terms are organized alphabetically  
- Definitions are concise and functional  
- When applicable, include:
  - Context
  - Example
  - Also known as

---

## 🔎 Index

|   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|
| [A](#-a) | [B](#-b) | [C](#-c) | [D](#-d) | [E](#-e) | [F](#-f) | [G](#-g) |
| [H](#-h) | [I](#-i) | [J](#-j) | [K](#-k) | [L](#-l) | [M](#-m) | [N](#-n) |
| [O](#-o) | [P](#-p) | [Q](#-q) | [R](#-r) | [S](#-s) | [T](#-t) | [U](#-u) |
| [V](#-v) | [W](#-w) | [X](#-x) | [Y](#-y) | [Z](#-z) |   |   |

---

## 🔤 B

### Browser Engines

**Definition:**  
Core component of a browser that executes web applications by parsing HTML/CSS, managing the DOM, and coordinating JavaScript execution and rendering.

- https://webkit.org/ 
- https://www.chromium.org/blink/

Common classifications:

 - Rendering engines: layout and rendering (Blink, WebKit, Gecko)
 - JavaScript engines: script execution (V8, JavaScriptCore, SpiderMonkey)
 - Headless: execution without a graphical interface
 - Automation protocols: control interfaces used by testing tools

**Context:**  
Technical foundation of web browsers and integration point for E2E automation via protocols exposed by the engines.

**Example:**  
 - Blink (Chromium-based: Chrome, Edge)
 - WebKit (Safari)
 - Gecko (Firefox)

Playwright (protocol usage):
- Chromium → Chrome DevTools Protocol (CDP)  
- WebKit → WebKit remote debugging protocol (via Playwright transport layer)  
- Firefox → Firefox remote debugging protocol (adapted by Playwright, not CDP)

**Also known as:**  
Rendering Engine • Layout Engine

---

## 🔤 C

### Codegen

**Definition:**  
Process of automatically generating code or artifacts, fully or partially, from a structured input (templates, models, contracts, or interactions).

- https://zencoder.ai/glossary/code-generation  
- https://tomassetti.me/code-generation/

Common classifications:

- Template-based: generation from fixed, parameterized templates
- Model-driven (MDD): generation from domain models as the primary source
- AI-based: generation based on machine learning models
- Recording-based: generation from captured interactions (e.g., Playwright)

**Context:**  
Used to accelerate development, standardize structures, and reduce manual effort in repetitive tasks. In end-to-end testing, it is often applied to generate initial scripts from real user interactions.

**Example:**  
 - API: Swagger Codegen, GraphQL Code Generator
 - AI-assisted: ChatGPT, GitHub Copilot
 - E2E testing: Playwright codegen, Cypress Studio
 - Structure: scaffolding and boilerplates

**Also known as:**  
Automatic code generation • Source Code Generation

---

## 📚 References

- [Technical Writing](https://developers.google.com/tech-writing/one/words)

---

## 📝 Contribution Guidelines

- Avoid vague or circular definitions  
- Prefer functional explanations over synonyms  
- Keep definitions consistent with system behavior  