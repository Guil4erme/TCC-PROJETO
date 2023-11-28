const TOTAL = document.querySelector('.TOTAL');

function togglePaymentOptions() {
    const paymentMethod = document.getElementById('payment-method').value;
    const cardOptions = document.getElementById('card-options');
    const boletoOptions = document.getElementById('boleto-options');
    const pixOptions = document.getElementById('pix-options');
   
    cardOptions.style.display = paymentMethod === 'card' ? 'block' : 'none';
    boletoOptions.style.display = paymentMethod === 'boleto' ? 'block' : 'none';
    pixOptions.style.display = paymentMethod === 'pix' ? 'block' : 'none';
}

const form = document.getElementById('payment-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Implemente a lógica de pagamento aqui, considerando o método escolhido
    console.log('Implemente a lógica de pagamento no lado do servidor.');
});


    
    if (localStorage.guardarNome) {
    
      TOTAL.innerHTML = "TOTAL :" + localStorage.guardarNome; 
    }

// css login

function validateLogin() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    if (email === '' || password === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    // Lógica de autenticação aqui
    alert('Autenticação bem-sucedida! Redirecionando...');
    // Você pode redirecionar o usuário para a página de dashboard, por exemplo
    // window.location.href = 'dashboard.html';
  }
  
//   cadastro

function validateSignup() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
  
    if (name === '' || phone === '' || email === '' || password === '' || confirmPassword === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    if (password !== confirmPassword) {
      alert('Os campos de senha não coincidem.');
      return;
    }
  
    // Lógica de cadastro aqui
    alert('Cadastro bem-sucedido! Redirecionando para a página de login...');
    // Você pode redirecionar o usuário para a página de login
    window.location.href = 'index.html';
  }
  
