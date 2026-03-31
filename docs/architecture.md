# Web - Test Automation Architecture

Descrição da arquitetura de execução de testes automatizados em aplicações web.

> Propósito: Explicar como testes automatizados realmente interagem com o sistema — além da superfície da ferramenta.

---
## Modelo Arquitetural

Testes automatizados web não interagem diretamente com o navegador, mas atravessam múltiplas camadas até sua execução.

```
[Test Code] → [Test Runner] → [Automation Driver] → [Browser Engine] → [Execution Environment (Infra/CI)]
```

Esta modelagem considera o ecossistema JavaScript/TypeScript em ambiente Node.js, cuja execução é single-threaded e assíncrona, baseada em event loop. Isso significa que as operações não acontecem de forma imediata ou linear, sendo mediadas por filas e ciclos de execução.

Na automação web, essa dinâmica se soma ao comportamento do navegador, que possui seu próprio modelo assíncrono e pipeline de renderização. A comunicação entre esses ambientes introduz latência, variação de timing e dependência de estado. Assim, os problemas apresentados nas camadas a seguir devem ser entendidos como propriedades naturais dessa arquitetura, e não apenas limitações das ferramentas.

**Legenda das colunas:**  
Camada (posição na arquitetura) · Responsabilidade (função) · Modelo de execução (como opera) · Canal de comunicação (como a camada se conecta à próxima) · Problemas típicos (falhas recorrentes) · Impacto por ferramenta (variações entre frameworks)

| Camada | Responsabilidade | Modelo de execução | Canal de comunicação | Problemas típicos | Impacto por ferramenta |
|--------|----------------|-------------------|----------------------|----------------------------------------------|------------------------|
| **Test Code** | Define fluxo e validações | Async explícito vs implícito | Chamadas diretas ao framework | Assertions frágeis (você confere cedo demais), dependência de timing (às vezes funciona, às vezes não), falta de await (você não esperou terminar) | Cypress abstrai async (command queue); Playwright exige explícito |
| **Test Runner** | Orquestra execução e ciclo de vida dos testes | Execução paralela/serial + isolamento de contexto | Execução no mesmo runtime (Node) | Race conditions, vazamento de estado entre testes, isolamento inadequado, retries não determinísticos | Cypress: runner acoplado e implícito (facilita o uso, mas pode esconder problemas); Playwright: runner explícito e configurável (oferece mais controle e previsibilidade, mas exige maior responsabilidade).|
| **Automation Driver** | Encaminha ações do teste para o browser | Comunicação entre runtime e browser | WebDriver / CDP / canal interno | Latência, dessincronização de estado, referências obsoletas a elementos | Selenium: WebDriver (mais indireto, maior latência) · Playwright: comunicação mais direta (CDP/WebSocket, menor latência, auto-waiting) · Cypress: camada mais abstraída (menor exposição, menor controle) |
| **Browser Engine** | Executa DOM, JavaScript e renderização da página | Event loop (JS) + pipeline de renderização | Execução interna do engine (DOM, layout e renderização) | Atraso de renderização, reflow excessivo (layout thrashing), diferenças entre engines | Chromium: comportamento mais estável; WebKit: variações em CSS/render; Gecko: diferenças em layout/eventos; problemas também podem vir da aplicação (JS pesado, CSS complexo), exigindo análise com ferramentas de performance |
| **Execution Environment (Infra/CI)** | Fornece o ambiente onde o teste roda (máquina, CI, container) | Execução dependente de recursos (CPU, memória, concorrência) | Sistema operacional e ambiente de execução | Variação de desempenho, execução mais lenta, testes instáveis (flaky) | GitHub Actions: runners compartilhados e variação de performance → usar waits baseados em estado · Jenkins: ambientes menos padronizados → garantir isolamento e limpeza de estado · AWS (CodeBuild/Device Farm): execução distribuída/remota → considerar latência e paralelismo controlado · Ambientes remotos (ex: BrowserStack): adicionam latência de rede e aumentam flakiness |
