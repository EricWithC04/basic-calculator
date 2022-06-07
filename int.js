let display = document.getElementById('valor');
let buttons = Array.from(document.getElementsByClassName('btn'));

buttons.map(btn => {
  btn.addEventListener("click", (b) => {cal(b)})
});

function cal(btn) {
  switch (btn.target.textContent) {
    case "C":
      display.innerHTML = ""
    break;
    case "=":
      try {
        display.innerHTML = eval(display.textContent)
      } catch { display.innerHTML = "Syntax Error!"}
    break;
    default:
      display.innerHTML += btn.target.textContent
  }
}
