// Função que escreve letra por letra como se fosse uma máquina de escrever...
function escreveLetra(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra,i) => {
      setTimeout(
        () => {
          elemento.innerHTML += letra
        }, 75 * i
      )
    });
  }

  const titulo = document.querySelector('h1');
  escreveLetra(titulo);


  // lib ScrollReveal
  window.sr =   ScrollReveal({ reset: true });

  sr.reveal('.text-localizacao', { duration: 6000 })

  sr.reveal('.experiencia-texto', { rotate: { x:1000, y:0, z:0},duration: 3000 })

  sr.reveal('.empresa', { rotate: { x:1000, y:0, z:0},duration: 3000 })

  sr.reveal('.formacao-container', { rotate: { x:1000, y:0, z:0},duration: 5000 })

  sr.reveal('.footer-texto', { rotate: { x:1000, y:0, z:0},duration: 4000 })

  sr.reveal('.contato-footer', { rotate: { x:0, y:50, z:0},duration: 4000 })

  sr.reveal('.icones-footer', { rotate: { x:0, y:100, z:0},duration: 4000 })

  sr.reveal('.introducao img', { rotate: { x:0, y:0, z:20},duration: 2000 })

  