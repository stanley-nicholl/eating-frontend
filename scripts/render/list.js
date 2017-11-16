const userListVisited = []
const userListNotVisited = []
let userId
const notVisitedCoord = []
const visitedCoord = []





Users.getUser(localStorage.getItem('username'))
  .then(user => {
    userId = user.data.user[0].id
    document.getElementById('user').textContent = user.data.user[0].first_name
    document.getElementById('score').textContent = user.data.user[0].score
    getData(userId)
  })


// MUST RETURN FORMAT { NAME: LOST LAKE, neighborhood: CAP HILL, VISITED: NO, LIST_ID: 4, REST_ID: 1}

function getData(user){
  Lists.getList(user)
    .then(list => {
      list.data.list.forEach(item => {
        if(item.completed === true){
          userListVisited.push(item)
        }else{
          userListNotVisited.push(item)
        }
      })
      userListVisited.forEach(item => {
        visitedCoord.push({latitude: item.latitude, logitude: item.longitude})
      })
      userListNotVisited.forEach(item => {
        notVisitedCoord.push({latitude: item.latitude, logitude: item.longitude})
      })
      loadPage()
    })
}


function loadPage(){
  let notVisited = ``
  let visited = ``
  userListNotVisited.forEach(place => {
    notVisited += populateNotVisitedList(place)
  })
  document.getElementById('not-completed-table').innerHTML = notVisited

  userListVisited.forEach(place => {
    visited += populateVisitedList(place)
  })
  document.getElementById('completed-table').innerHTML = visited
  addListening()
}

document.getElementById('addmore').addEventListener('click', (event) => {
  event.preventDefault()
  window.location.replace('./create.html')
})

function addListening(){
  let btns = document.querySelectorAll('.visit')
  btns.forEach(btn => {
    if(btn.id === 'addmore'){
      return null
    }
    btn.addEventListener('click', (event) => {
      event.preventDefault()
      const target = event.target.id
      const destination = `./list-item.html?id=${target}`
      window.location.replace(destination)
      })
    })
  }
