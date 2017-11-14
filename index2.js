document.getElementById('signup2').addEventListener('click', (event) => {
  window.location.replace('index.html')
})


document.getElementById('login').addEventListener('click', (event) => {
  event.preventDefault()
  const email = document.getElementById('email').value
  if(!email){
    document.getElementById('error').textContent = 'Please enter an email to login.'
    document.getElementById('error').style.fontWeight = "bold"
  }
  return Users.getUser(email)
    .then(user => {
      if(!user.data.user.length){
        document.getElementById('error').textContent = 'that email does not exist in our records'
      }
      const userName = user.data.user[0].email
      localStorage.setItem('username', userName)
      window.location.replace('../pages/index.html')
    })
})
