function fibonacci(n) {
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

function imprimirSerieFibonacci(n) {
  let cont = 2;
  let acumulador = '0 - 1';
  while (cont <= n) {
    acumulador = acumulador + ' - ' + fibonacci(cont);
    cont++;
  }
  console.log(acumulador);
}