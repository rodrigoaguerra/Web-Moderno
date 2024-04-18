const fabircates = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

fabircates.forEach(imprimir);
fabircates.forEach((fabricate) => console.log(fabricate));