//Iteración #1: Usa includes

const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];

for(x = 0; x < products.length; x++){

    var objeto = products[x].includes('Camiseta');
    if(objeto == true){
        console.log(products[x])
    }else{
        continue
    }

}
