window.onload = () => {
  const botao = document.querySelector('#submit');
  botao.addEventListener('click', () => {
    const senha = document.querySelector('#password');
    const login = document.querySelector('#email');
    const valorSenha = senha.value;
    const valorLogin = login.value;
    const loginCorreto = 'tryber@teste.com';
    const senhaCorreta = '123456';

    if (valorLogin === loginCorreto && valorSenha === senhaCorreta) {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
};

const botao = document.querySelector('#submit-btn');
botao.disabled = true
const agreeInput = document.querySelector('#agreement');
agreeInput.addEventListener('click', () => {
  const agreeValue = agreeInput.value;
  if (agreeValue === 'agree') {
    botao.disabled = false;
  } else {
    botao.disabled = true;
  }
});
