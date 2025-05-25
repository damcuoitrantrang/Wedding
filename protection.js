// Disable right-click
document.addEventListener("contextmenu", e => e.preventDefault());

// Block DevTools keys
document.addEventListener("keydown", e => {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && ["I", "J", "C", "U"].includes(e.key)) ||
    (e.ctrlKey && e.key === "U")
  ) {
    e.preventDefault();
  }
});

// Detect DevTools opened (not perfect)
setInterval(() => {
  const before = new Date();
  debugger;
  const after = new Date();
  if (after - before > 100) {
    document.body.innerHTML = "<h1>Developer tools are not allowed 👮‍♂️</h1>";
  }
}, 1000);

// Console warning
console.log("%cStop!", "color: red; font-size: 30px; font-weight: bold;");
console.log("%cThis area is for developers only.", "color: gray; font-size: 16px;");