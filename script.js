const terminal = document.getElementById("terminal");

const lines = [
  "booting AdapaAI portfolio...",
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
  "1. ai-agent-systems (GitHub)",
  "2. Jarvis-style daily assistant (WIP)",
  "",
  "> contact",
  "LinkedIn: https://www.linkedin.com/in/sasank-adapa-977175b3",
  "GitHub: https://github.com/AdapaAI",
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
    terminal.innerHTML += lines[lineIndex].charAt(charIndex);
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
