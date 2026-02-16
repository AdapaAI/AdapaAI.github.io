const terminal = document.getElementById("terminal");

const lines = [
  "Initializing agent interface...",
  "",
  "System online.",
  "",
  "> whoami",
  "Sasank Adapa",
  "Engineering Manager @ Ericsson",
  "AI Systems Architect",
  "Builder of agentic workflows",
  "",
  "> projects",
  "<a href='https://github.com/AdapaAI/ai-agent-systems' target='_blank'>ai-agent-systems (GitHub)</a>",
  "",
  "> Sasank is accessible on following platforms for tech work:",
  "<a href='https://github.com/AdapaAI' target='_blank'>GitHub</a>",
  "<a href='https://www.linkedin.com/in/sasank-adapa-977175b3' target='_blank'>LinkedIn</a>",
  "& through e-mail at sasanksujan.93@gmail.com",
  "",
  "",
  "Have a good day!",
  "Sasank Adapa",
];

let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  if (lineIndex >= lines.length) {
    terminal.innerHTML += `<span class="cursor"></span>`;
    return;
  }

  const currentLine = lines[lineIndex];

  // If line contains HTML (like anchor tags), render instantly
  if (currentLine.includes("<a")) {
    terminal.innerHTML += currentLine + "\n";
    lineIndex++;
    setTimeout(typeLine, 400);
    return;
  }

  // Normal typing animation
  if (charIndex < currentLine.length) {
    terminal.innerHTML += currentLine[charIndex];
    charIndex++;
    setTimeout(typeLine, 40);
  } else {
    terminal.innerHTML += "\n";
    charIndex = 0;
    lineIndex++;
    setTimeout(typeLine, 400);
  }
}

// Spawn a blip at the cursor position
function spawnBlip() {
  const blip = document.createElement("span");
  blip.className = "blip";

  terminal.appendChild(blip);

  // Calculate last character position
  const range = document.createRange();
  const lastNode = terminal.lastChild || terminal;
  const textNode = lastNode.nodeType === 3 ? lastNode : lastNode.firstChild || lastNode;
  range.setStart(textNode, textNode.length);
  range.setEnd(textNode, textNode.length);
  const rect = range.getBoundingClientRect();
  const terminalRect = terminal.getBoundingClientRect();

  blip.style.left = `${rect.right - terminalRect.left}px`;
  blip.style.top  = `${rect.top - terminalRect.top}px`;

  setTimeout(() => blip.remove(), 400);
}

// Start animation
typeLine();
