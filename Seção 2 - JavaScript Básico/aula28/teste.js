const numero = Number(prompt('Digite um número'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = `${numero}`;

texto.innerHTML = ``;

texto.innerHTML += `<p>A raiz quadrada desse número é ${numero ** 0.5}</p>`
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;

texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;

texto.innerHTML += `<p>Arrendodando para baixo: ${Math.floor(numero)}`;

texto.innerHTML += `<p>Arrendodando para baixo: ${Math.ceil(numero)}`;

texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}`;
