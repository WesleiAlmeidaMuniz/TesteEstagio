function fibonacci(resp){
  
  var respUsuario = resp
  var penultimo = 0;
  var ultimo= 1;
  var numero = 0;

  for (let termo = 0; numero < respUsuario; termo++) {
      numero= ultimo + penultimo;
      penultimo = ultimo;
      ultimo=numero;
  }

  if(numero === respUsuario){
    return `O numero ${respUsuario} pertence sequência de Fibonacci`
  } else {
    return `O numero ${respUsuario} não pertence a sequência de Fibonacci`
  }
  
}

console.log(fibonacci(60));