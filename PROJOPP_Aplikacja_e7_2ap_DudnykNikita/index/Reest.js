document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  
  var messageElement = document.getElementById('message');
  messageElement.textContent = 'Rejestracja pomyślna dla użytkownika: ' + username;
  
  document.getElementById('registrationForm').reset();
});
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  
  var messageElement = document.getElementById('message');
  messageElement.textContent = 'Rejestracja pomyślna dla użytkownika: ' + username;
  
  setTimeout(function() {
    window.location.href = "2048game.html";
  }, 2000);
  
  document.getElementById('registrationForm').reset();
});

