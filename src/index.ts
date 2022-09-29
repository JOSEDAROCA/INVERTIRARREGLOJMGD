import "./styles.css";

let resultado = document.getElementById("resultado");

//Boton
let btnEnv = document.getElementById("btnEnv");

//Escuchando click del Boton
btnEnv.addEventListener("click", () => {
  //como meter datos de inputs a una variable
  let dimensionArreglo: number = Number(
    prompt(`Ingrese la dimensión del arreglo: `)
  );
//Establezco dimension de un array
  let numerosIngresados: number[] = new Array(dimensionArreglo);

  //El indice es inicializado como la dimension - 1 ya que las posiciones empiezan a contar desde 0 en un array
//Como recorrer de forma inversa un array
    for ( let indice = dimensionArreglo - 1; indice >= 0; indice--) {
      numerosIngresados[indice] = prompt(
        `Ingrese el numero ${indice}: `
      );
    console.log(numerosIngresados[indice], "");
    resultado.innerHTML = `Arreglo invertido: ${numerosIngresados}`;

    }
    }
    
});
