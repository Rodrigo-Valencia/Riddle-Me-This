const loginHandler = async (event) => {
  event.preventDefault();
  
  const email = document.querySelector('#emailLogin').value.trim();
  const password = document.querySelector('#passwordLogin').value.trim();
  
  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Login Failed!');
    }
  }
};
  
const signUpHandler = async (event) => {
  event.preventDefault();
  
  const username = document.querySelector('#usernameSignUp').value.trim();
  const email = document.querySelector('#emailSignUp').value.trim();
  const password = document.querySelector('#passwordSignUp').value.trim();
  
  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Sign Up Failed');
    }
  }
}
  
document.querySelector('.login-function').addEventListener('submit', loginHandler);
document.querySelector('.signup-function').addEventListener('submit', signUpHandler);