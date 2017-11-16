const params = window.location.search.split('=')
const id = params[1]
let listing
const inputs = ['date_completed', 'plates', 'comments']
let bumpScore = false
let restId
let userIntel

Users.getUser(localStorage.getItem('username'))
  .then(user => {
    userIntel = user.data.user
    userId = user.data.user[0].id
    document.getElementById('user').textContent = user.data.user[0].first_name
    document.getElementById('score').textContent = user.data.user[0].score
    getData(userId)
  })



function getData(user){
  Lists.getList(user)
    .then(list => {
      list.data.list.forEach(item => {
        if(item.list_id == id){
          listing = item
      }
    })
    restId = listing.restaurant_id
    loadPage(listing)
  })
}

function loadPage(listing) {
  document.getElementById('restaurant').innerHTML = populateRestaurant(listing)
  if(listing.completed === true){
    document.getElementById('form').innerHTML = updateForm(listing)
    fixFieldState()
  }else{
    document.getElementById('form').innerHTML = newForm(listing)
    bumpScore = true
    $('#date_completed').focusin()
  }
  $('.datepicker').pickadate();
  console.log(userIntel[0].email);
  document.getElementById('back').addEventListener('click', (event) => {
    event.preventDefault()
    window.location.replace('./list.html')
  })
  document.getElementById('update').addEventListener('click', (event) => {
    event.preventDefault()
    const date = document.getElementById('date_completed').value
    const recommend = document.getElementById('recommend').checked
    const comment = document.getElementById('comments').value
    const plates = document.getElementById('plates').value
    const updatedList = { user_id: userId, restaurant_id: restId, completed: true, recommend: recommend, date_completed: date, plates_eaten: plates, comment: comment }
    Lists.updateList(id, updatedList)
    if(bumpScore === true){
      let score = userIntel[0].score
      score += 1
      let user = {email: userIntel[0].email, id: userIntel[0].id, first_name: userIntel[0].first_name, last_name: userIntel[0].last_name, score: score}
      Users.updateUser(userIntel[0].email, user)
    }
    window.location.replace('./list.html')
  })
}

function fixFieldState() {
    $('#date_completed').focusin()
    $('#plates').focusin()
    $('#comments').focusin()
}
