const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let current = "";

function updateDisplay(value) {
  display.value = value || "0";
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const val = btn.innerText;

    if (val === "AC") {
      current = "";
    }
    else if (val === "±") {
      current = current ? String(-eval(current)) : "";
    }
    else if (val === "%") {
      current = current ? String(eval(current) / 100) : "";
    }
    else if (val === "=") {
      try {
        current = String(eval(current));
      } catch {
        current = "";
        updateDisplay("Error");
        return;
      }
    }
    else if (val === "÷") {
      current += "/";
    }
    else if (val === "×") {
      current += "*";
    }
    else if (val === "−") {
      current += "-";
    }
    else {
      current += val;
    }

    updateDisplay(current);
  });
});

// Keyboard support
document.addEventListener("keydown", e => {
  if (!isNaN(e.key) || "+-*/.".includes(e.key)) {
    current += e.key;
  }
  else if (e.key === "Enter") {
    current = String(eval(current));
  }
  else if (e.key === "Backspace") {
    current = current.slice(0, -1);
  }
  updateDisplay(current);
});
