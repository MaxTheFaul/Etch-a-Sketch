function genDisp(p) {
    const cont = document.querySelector(".container");
    cont.replaceChildren();
    const maxDiv = Math.floor(960 / p);

  for (let y = 0; y < p; y++) {
    const row = document.createElement("div");
    row.setAttribute("id", `row-${y}`);
    row.setAttribute("style", "display: flex; flex-direction: row;");
    for (let x = 0; x < p; x++) {
        const tile = document.createElement("div");
        tile.setAttribute("class", `tile`);
        tile.setAttribute("style", `width: ${maxDiv}px; aspect-ratio: 1/1;`);
        row.appendChild(tile);
    }
    cont.appendChild(row);
  }
  addMouseEvent();
}

function addMouseEvent(){const til = document.querySelectorAll("div.tile");
til.forEach(tile => {
  tile.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "black";
  });
  tile.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "black";
  });
});}
function getNumber(){
    let eingabe = prompt("Bitte eine Zahl eingeben:");
    let zahl = Number(eingabe);
    if (zahl<=100){genDisp(zahl);}
    else {alert("Number too big")}
}
