const resultado = document.getElementById("txtresultado");
function mensaje(texto){
    console.log(texto);
    alert(texto);
    const resultado = document.getElementById("txtresultado");
    resultado.textContent = texto;

}
mensaje("klk con klk");

function agragar(palabra){
     resultado.textContent = palabra;
}

function mostrar(palabra){
}

function buscar(palabra){
}

function eliminar(palabra){
}

const btnagragar = document.getElementById("btnagragar");

const btnmostrar = document.getElementById("btnmostrar");

const btnbuscar = document.getElementById("btnbuscar"); 

const btneliminar = document.getElementById("btneliminar");

btnagragar.addEventListener("click", agregar("klk"));
btnmostrar.addEventListener("click", mostrar("klk"));
btnbuscar.addEventListener("click", buscar("klk"));
btneliminar.addEventListener("click", eliminar("klk"));
