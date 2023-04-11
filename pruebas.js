function agregarPropiedad(objeto, propiedad) {
    // Recibirás un objeto por parámetro.
    // Debes agregarle una propiedad con el nombre recibido por parámetro.
    // Esta propiedad será igual al valor `null`.
    // Retornar el objeto.
    // Tu código:
    objeto.propiedad = null;
    return objeto;
 }

 objeto = {
    nombre : "LUIS",
    edad : 10,
 }
var propiedad = "dato";
agregarPropiedad(objeto, propiedad);
console.log (objeto);

// ---------------------------------------------------

//function agregarStringInvertida() {
   // Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
   // El método debe llamarse "reverse".
   // [PISTA]: necesitarás utilizar el objeto "this".
//String.prototype.reverse = function () {
      var str = "hELLO";
      console.log("STR ---> " + str);
      var arregloTemp = [];
      arregloTemp = str.split('');
      console.log(arregloTemp);
      arregloTemp = arregloTemp.reverse();
      //arregloTemp = arregloTemp.join("");
      console.log("ARREGLO:   " + arregloTemp.join(""));

   

