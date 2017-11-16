function populateRestaurant(lising){
  const { name, description, website, neighborhood, cost, cuisine, street_address, city, state, zip, tags } = listing
  return `
  <div class="overview d-flex flex-column justify-content-between ml-3">
    <h2 id="name" class="mb-5">${name}</h2>
    <p id="description" class="text-white">${description}</p>
  </div>
  <div class="details d-flex flex-column justify-content-between ml-3">
    <a id="website" class="mt-3 font-weight-bold" href="${website}">${website}</a>
    <div>
      <p id="street-address" class="text-white mt-5 mb-0">${street_address}</p>
      <p id="city-state-zip" class="text-white">${city}, ${state} ${zip}</p>
    </div>
  </div>
  <div class="industry d-flex flex-column justify-content-between">
    <div id="tags" class="d-flex flex-wrap mb-3 mt-2">
      <p class="tag px-2 ml-1 mr-3 my-1 text-white">xxx</p>
      <p class="tag px-2 ml-1 mr-3 my-1 text-white">xxx</p>
      <p class="tag px-2 ml-1 mr-3 my-1 text-white">xxx</p>
    </div>
    <div class="d-flex flex-wrap mb-3">
      <div id="cost" class="d-flex">
        ${populatePrice(cost)}
      </div>
    </div>
    <div class="d-flex">
      <p class="text-white mr-2">cuisine:</p>
      <p class="text-white">${cuisine}</p>
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
