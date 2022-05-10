const loginHandler = async (event) => {
  event.preventDefault();
  console.log("Test login")
  
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
  console.log(event);
  event.preventDefault();
  console.log("test sign up")
  
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
  
document.querySelector('#loginForm').addEventListener('click',(e) => {
  loginHandler (e);
});
document.querySelector('#signupForm').addEventListener('submit', signUpHandler);

