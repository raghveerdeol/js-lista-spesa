
// 1 creo un array listaSpesa;
const listaSpesa = ["mele", "banane", "cocomero", "pasta", "pizza", "mandolino", "lanciafiamme"];
// 2 creo un ulElement che seleziona l'elemento ul nel dom;
const ulElement = document.querySelector("ul");
// 3 creo sum = 0;
let sum = 0;
// 4 apro il ciclo while con condizione sum < listaSpesa.length;
while (sum < listaSpesa.length) {
    // 5 creo l'elemento li;
    let liElement = document.createElement("li");
    // 6 definisco li figlio di ul con appendChild;
    ulElement.appendChild(liElement);
    // 7 aggiungo nel elemento li append listaSpesa[sum];
    liElement.append(listaSpesa[sum]);
    // 8 aggiungo sum = sum + 1;
    sum = sum + 1;
}
