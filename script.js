window.onload = function () {
  const botao = document.querySelector('#submit');
  botao.addEventListener('click', function() {
    const senha = document.querySelector('#password');
    const login = document.querySelector('#email');
    const valorSenha = senha.value;
    const valorLogin = login.value;
    const loginCorreto = 'tryber@teste.com';
    const senhaCorreta = '123456';

    if (valorLogin === loginCorreto & valorSenha === senhaCorreta){
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  })
}
