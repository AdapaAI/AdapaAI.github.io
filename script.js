const terminal = document.getElementById("terminal");

const lines = [
  "booting AdapaAI portfolio...",
  "Hello",
  "This is personal website of Sasank Adapa",

  "",
  "> whoami",
  "Engineering Manager | AI Agent Systems",
  "",
  "> focus",
  "- AI Agents",
  "- Automation Workflows",
  "- Orchestrator AD (WIP)",
  "",
  "> projects",
  "1. <a href='https://github.com/AdapaAI/ai-agent-systems' target='_blank'>ai-agent-systems (GitHub)</a>",
  "",
  "> contact",
  "<a href='https://github.com/AdapaAI' target='_blank'>GitHub</a>",
  "<a href='https://www.linkedin.com/in/sasank-adapa-977175b3' target='_blank'>LinkedIn</a>",
  "",
  "> ready"
];

let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  if (lineIndex >= lines.length) {
    terminal.innerHTML += `<span class="cursor"></span>`;
    return;
  }

  if (charIndex < lines[lineIndex].length) {
    terminal.innerHTML += lines[lineIndex].[charIndex];
    charIndex++;
    setTimeout(typeLine, 40);
  } else {
    terminal.innerHTML += "\n";
    charIndex = 0;
    lineIndex++;
    setTimeout(typeLine, 400);
  }
}

typeLine();
