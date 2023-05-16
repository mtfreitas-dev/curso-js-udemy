let temperaturaF = document.querySelector('#temperaturaF');

function tempertura() {
      let temperaturaAtual = Number(temperaturaF.value);
      let temperaturaC = 0.5556 * (temperaturaAtual - 32);

      const resultado = document.querySelector('#resultado');
      resultado.innerHTML = `${temperaturaC}`;
  }
