let estrutura = document.getElementById('estrutura');
let body = document.querySelector('body');

estrutura.addEventListener('click',()=>{
    estrutura.classList.toggle('inserir');
    body.classList.toggle('inserir');
  })