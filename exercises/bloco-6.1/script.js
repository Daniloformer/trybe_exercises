// preencher select no html com as options de estados
const select = document.getElementById("estado");
let estados = { sp: "São Paulo", rj: "Rio de Janeiro", mg: "Minas Gerais" };
for (const sigla in estados) {
  const estado = estados[sigla];
  const elementoOption = document.createElement("option");
  select.appendChild(elementoOption);
  elementoOption.value = sigla;
  elementoOption.innerText = estado;
}
