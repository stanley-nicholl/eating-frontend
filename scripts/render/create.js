let restaurantList = []
let index = 0
let direction = 'right'
let progress = 0
let userRestaurantList = []
let userId
let storedRestaurantList = []
let result = []

function pageLoad(){
  Users.getUser(localStorage.getItem('username'))
    .then(user => {
      userId = user.data.user[0].id
      document.getElementById('user').textContent = user.data.user[0].first_name
      document.getElementById('score').textContent = user.data.user[0].score
      Lists.getList(userId)
        .then(list => {
          list.data.list.forEach(item => {
              storedRestaurantList.push(item)
          })
          updateProgress()
        })
        Restaurants.getAllRestaurant()
          .then(restaurants => {
            restaurantList = restaurants.data.restaurants

            result = restaurantList.filter(({ name }) => {
              return !storedRestaurantList.map(res => res.name).includes(name)
            })


            // for (var i = 0; i < restaurantList.length; i++) {
            //   for (var j = 0; j < storedRestaurantList.length; j++) {
            //     if(restaurantList[i].name === storedRestaurantList[j].name){
            //       restaurantList.splice(i, 1)
            //     }
            //   }
            // }
            document.getElementById('restaurant').innerHTML =  restaurantHeadline(result[index])
            document.getElementById('add').textContent = addButton(result[index])
          })
    })


}

pageLoad()

function topPage(){
  if(direction === 'right'){
    index++
    if(index<restaurantList.length){
      document.getElementById('restaurant').innerHTML = restaurantHeadline(result[index])
      document.getElementById('add').textContent = addButton(result[index])
    }else{
      index = 0
      document.getElementById('restaurant').innerHTML = restaurantHeadline(result[index])
      document.getElementById('add').textContent = addButton(result[index])
    }
  }else{
    if(index !== 0){
      index--
      document.getElementById('restaurant').innerHTML = restaurantHeadline(result[index])
      document.getElementById('add').textContent = addButton(result[index])
    }else{
      index = restaurantList.length-1
      document.getElementById('restaurant').innerHTML = restaurantHeadline(result[index])
      document.getElementById('add').textContent = addButton(result[index])
    }
  }
}

function loadList(){
  let list = ``
  userRestaurantList.forEach(restaurant => {
    list += addRow(restaurant)
  })
  document.getElementById('table-body').innerHTML = list
  addListening()
  if(userRestaurantList.length > 0){
    $('.top-line').removeClass('hidden')
  }else{
    $('.top-line').addClass('hidden')
  }
}

document.getElementById('right').addEventListener('click', () => {
  direction = 'right'
  topPage()
})

document.getElementById('left').addEventListener('click', () => {
  direction = 'left'
  topPage()
})

document.getElementById('add').addEventListener('click', (event) => {
  event.preventDefault()
  document.getElementById('alert').innerHTML = ``
    const newRest = result[index].name
    for (var i = 0; i < userRestaurantList.length; i++) {
      if(userRestaurantList[i].name == newRest){
        document.getElementById('alert').innerHTML = `<p class="font-weight-bold text-center mt-3">that restaurant is already added below...dang, you must really want to go there</p>`
        return null
      }
    }
    for (var i = 0; i < storedRestaurantList.length; i++) {
      if(storedRestaurantList[i].name == newRest){
        document.getElementById('alert').innerHTML = `<p class="font-weight-bold text-center mt-3">that restaurant is already added below...dang, you must really want to go there</p>`
        return null
      }
    }
    userRestaurantList.push(result[index])
    loadList()
    direction = 'right'
    topPage()
    addListening()
    updateProgress()
  })

function updateProgress(){
  const progress = userRestaurantList.length + storedRestaurantList.length
  if(progress === 0){
    document.getElementById('progress1').className = `fa fa-circle-o my-0`
    document.getElementById('progress2').className = `fa fa-circle-o my-0`
    document.getElementById('progress3').className = `fa fa-circle-o my-0`
  }else if (progress === 1) {
    document.getElementById('progress1').className = `fa fa-circle my-0 flashit`
    document.getElementById('progress2').className = `fa fa-circle-o my-0`
    document.getElementById('progress3').className = `fa fa-circle-o my-0`
  }else if (progress === 2) {
    document.getElementById('progress1').className = `fa fa-circle my-0`
    document.getElementById('progress2').className = `fa fa-circle my-0 flashit`
    document.getElementById('progress3').className = `fa fa-circle-o my-0`
    $('#finish').prop('disabled', true)
  }else{
    document.getElementById('progress1').className = `fa fa-circle my-0`
    document.getElementById('progress2').className = `fa fa-circle my-0`
    document.getElementById('progress3').className = `fa fa-circle my-0 flashit`
    $('#finish').prop('disabled', false)
    $('#finish').addClass(`flashit`)
  }
}

function addListening(){
  let btns = document.querySelectorAll('.remove')
  btns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      event.preventDefault()
      const target = event.target.id
      for (var i = 0; i < userRestaurantList.length; i++) {
        if(userRestaurantList[i].id == target){
          userRestaurantList.splice(i, 1)
        }
      }
      updateProgress()
      loadList()
      })
    })
  }

document.getElementById('finish').addEventListener('click', (event) => {
  event.preventDefault()
  let updateList = {lists:[]}
  userRestaurantList.forEach(list => {
    updateList.lists.push({ restaurant_id: list.id, user_id: userId, completed: false })
  })
  Lists.createList(updateList)
  console.log(baseListURL);
  window.location.replace('./list.html')
})
