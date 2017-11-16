function populateVisitedList(place){
  const { list_id, name, neighborhood, date_completed, rest_id } = place
  let recommend = place.recommend === true ? 'yes' : 'no'
  return `
  <tr id="tr${list_id}">
    <td id="${rest_id}">${name}</td>
    <td>${neighborhood}</td>
    <td>${moment(date_completed).format('MM/DD/YY')}</td>
    <td>${recommend}</td>
    <td align="center"><button type="button" id="${list_id}" class="btn btn-outline-blue waves-effect btn-sm visit">remember how it was</button></td>
  </tr>`
}

function populateNotVisitedList(place){
  const { list_id, name, neighborhood, cuisine, cost, rest_id } = place
  return `
  <tr id="tr${list_id}">
    <td id="${rest_id}">${name}</td>
    <td>${neighborhood}</td>
    <td>${cuisine}</td>
    <td>${loadCost(cost)}</td>
    <td align="center"><button type="button" id="${list_id}" class="btn btn-outline-pink waves-effect btn-sm visit">have you visited?</button></td>
  </tr>
  `
}

function loadCost(cost){
  let result = ``
  for (var i = 0; i < cost.length; i++) {
    result += `<i class="fa fa-dollar mr-2" aria-hidden="true"></i>`
  }
  return result
}
