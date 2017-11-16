let userName = localStorage.getItem('username')

if(userName) window.location.replace('./pages/list.html')

document.getElementById('signup').addEventListener('click', (event) => {
  event.preventDefault()
  const body = {}
  body.first_name = document.getElementById('first-name').value
  body.last_name = document.getElementById('last-name').value
  body.email = document.getElementById('email').value
  if(!body.email || !body.first_name || !body.last_name){
    document.getElementById('error').textContent = 'Please fill out all fields to sign up.'
    document.getElementById('error').style.fontWeight = "bold"
  }
  return Users.createUser(body)
    .then(user => {
      userName = user.data.user[0].email
      localStorage.setItem('username', userName)
      window.location.replace('../pages/create.html')
    }).catch(err => {
      document.getElementById('error').textContent = 'user already exists'
    })
})

document.getElementById('login2').addEventListener('click', (event) => {
  window.location.replace('./index2.html')
})
