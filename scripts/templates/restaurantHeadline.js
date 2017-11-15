function restaurantHeadline(restaurant){
  let { name, cuisine, neighborhood, categories, cost } = restaurant
  return `
  <div class="d-flex rest1 flex-column justify-content-between mx-3 my-2">
    <h2 id="name" class="mt-1">${name}</h2>
    <div class="d-flex mb-2">
      <p class="text-white mr-2">cuisine:</p>
      <p id="cuisine" class="text-white">${cuisine}</p>
    </div>
    <div class="d-flex mb-2">
      <p class="text-white mr-2">neighborhood:</p>
      <p id="neighborhood" class="text-white">${neighborhood}</p>
    </div>
  </div>
  <div class="d-flex rest2 flex-column justify-content-between mt-2 mb-0">
    <div class="d-flex flex-wrap justify-content-start">
      ${populateTags(categories)}
    </div>
    <div class="d-flex px-2 mt-3">
      <p class="mr-2 text-white">price:</p>
      ${populatePrice(cost)}
    </div>
  </div>
  `
}

function populateTags(tags){
  let response = ``
  tags.forEach(tag => {
    response += `<p class="tag px-2 ml-1 mr-3 my-1 text-white">${tag.name}</p>`
  })
  return response
}

function populatePrice(price){
  let response = ``
  for (var i = 0; i < price.length; i++) {
    response += `<i class="fa fa-dollar text-white mr-2" aria-hidden="true"></i>`
  }
  return response
}
