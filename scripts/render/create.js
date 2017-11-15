let restaurantList
let index = 0
let direction = 'right'
let progress = 0

function topPage(){
  if(direction === 'right'){
    index++
    if(index<restaurantList.length){
      document.getElementById('restaurant').innerHTML = restaurantHeadline(restaurantList[index])
    }else{
      index = 0
      document.getElementById('restaurant').innerHTML = restaurantHeadline(restaurantList[index])
    }
  }else{
    if(index !== 0){
      index--
      document.getElementById('restaurant').innerHTML = restaurantHeadline(restaurantList[index])
    }else{
      document.getElementById('restaurant').innerHTML = restaurantHeadline(restaurantList[index])
    }
  }

}

function pageLoad(){
  Restaurants.getAllRestaurant()
    .then(restaurants => {
      restaurantList = restaurants.data.restaurants
      document.getElementById('restaurant').innerHTML =  restaurantHeadline(restaurantList[index])
    })
}

pageLoad()

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
  document.getElementById('table-body').innerHTML += addRow(restaurantList[index])
  // restaurantList.splice([index])
  updateProgress('plus')
})

function updateProgress(direction){
  if(direction === 'plus'){
    progress++
  }else{
    progress--
  }
if(progress === 0){
  document.getElementById('progress1').className = `fa fa-circle-o my-0`
  document.getElementById('progress2').className = `fa fa-circle-o my-0`
  document.getElementById('progress3').className = `fa fa-circle-o my-0`
}else if (progress === 1) {
  document.getElementById('progress1').className = `fa fa-circle my-0`
  document.getElementById('progress2').className = `fa fa-circle-o my-0`
  document.getElementById('progress3').className = `fa fa-circle-o my-0`
}else if (progress === 2) {
  document.getElementById('progress1').className = `fa fa-circle my-0`
  document.getElementById('progress2').className = `fa fa-circle my-0`
  document.getElementById('progress3').className = `fa fa-circle-o my-0`
  $('#finish').prop('disabled', true)
}else{
  document.getElementById('progress1').className = `fa fa-circle my-0`
  document.getElementById('progress2').className = `fa fa-circle my-0`
  document.getElementById('progress3').className = `fa fa-circle my-0`
  $('#finish').prop('disabled', false)
}

}
