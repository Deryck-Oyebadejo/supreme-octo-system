let currentStory = null;

const output = document.getElementById("output");
const input = document.getElementById("commandInput");

function writeToTerminal(text) {
  output.innerHTML += `> ${text}\n`;
  output.scrollTop = output.scrollHeight;
}

function handleCommand(cmd) {
  cmd = cmd.trim().toLowerCase();

  switch (cmd) {
    case 'help':
      writeToTerminal("Commands:\n - story.memory.wolfang\n - story.shadowguardian\n - story.coma.dream\n - story.echo.log\n - option.1\n - option.2\n - complete\n - play.lofi\n - stop.lofi\n - clear");
      break;

    case 'clear':
      output.innerHTML = "";
      break;

    case 'play.lofi':
      document.getElementById("lofiPlayer").volume = 0.4;
      document.getElementById("lofiPlayer").play();
      writeToTerminal("🎧 Lofi mode activated.");
      break;

    case 'stop.lofi':
      document.getElementById("lofiPlayer").pause();
      writeToTerminal("🛑 Lofi mode deactivated.");
      break;

    case 'story.memory.wolfang':
      writeToTerminal("You remember Wolfang. Loyal. Brave. Gone.");
      writeToTerminal("Do you:\noption.1 - Let go\noption.2 - Avenge him");
      currentStory = "wolfang";
      break;

    case 'story.shadowguardian':
      writeToTerminal("A scream echoes. The alley is dark. Alex sprints.\nHe sees a girl, bleeding. Drowning.");
      writeToTerminal("Do you:\noption.1 - Save her\noption.2 - Wait");
      currentStory = "alex";
      break;

    case 'story.coma.dream':
      writeToTerminal("Maya floats in a sea of fire and memory. In the distance: Alex’s voice.");
      writeToTerminal("Do you:\noption.1 - Wake up\noption.2 - Stay");
      currentStory = "maya";
      break;

    case 'story.echo.log':
      writeToTerminal("Ashley logs: 'Something’s not right. Maya’s powers… they’re evolving in the coma.'");
      writeToTerminal("Do you:\noption.1 - Run tests\noption.2 - Keep it secret");
      currentStory = "ashley";
      break;

    case 'option.1':
      handleOption(1);
      break;

    case 'option.2':
      handleOption(2);
      break;

    case 'complete':
      writeToTerminal("Session closed. Story memory wiped.");
      currentStory = null;
      break;

    default:
      writeToTerminal("Unknown command. Type 'help' for options.");
  }
}

function handleOption(choice) {
  if (!currentStory) {
    writeToTerminal("No active story. Type 'help' to begin.");
    return;
  }

  if (currentStory === "wolfang") {
    choice === 1
      ? writeToTerminal("You bury the past. But it howls inside.")
      : writeToTerminal("You sharpen your blade. Tonight, the undead fall.");
  }

  if (currentStory === "alex") {
    choice === 1
      ? writeToTerminal("You leap. The water is cold. She’s fading. You grab her.")
      : writeToTerminal("You wait... but someone else appears. Watching.");
  }

  if (currentStory === "maya") {
    choice === 1
      ? writeToTerminal("She gasps. Eyes wide. 'Where am I?'")
      : writeToTerminal("She drifts deeper. A voice whispers: 'Not yet.'");
  }

  if (currentStory === "ashley") {
    choice === 1
      ? writeToTerminal("Ashley starts analyzing. The results… are beyond human.")
      : writeToTerminal("She closes the file. Some truths are too dangerous.");
  }
}

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cmd = input.value;
    writeToTerminal(cmd);
    handleCommand(cmd);
    input.value = "";
  }
});
