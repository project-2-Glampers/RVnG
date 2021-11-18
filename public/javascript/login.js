async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    //check out the response status
    if(response.ok) {
      console.log('success');
    } else {
      alert(response.statusText);
    }
  }
}

async function loginFormHandler(event) {
  event.preventDefault();
  console.log("hello world")

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      
      document.querySelector('.form-hide').style.display = 'none';
    } else {
      alert(response.statusText);
    }
  }
}

async function loginHide (event) {
  event.preventDefault();

  document.querySelector('.form-hide').style.display = 'none';
    
}



  
  document.querySelector('.login-form').addEventListener('click', loginFormHandler);
  // document.querySelector('.login-form').addEventListener('click', loginHide);

  //document.getElementById(".signup-form").addEventListener("submit", signupFormHandler);