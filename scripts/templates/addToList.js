function addRow(restaurant){
  let { name, cost, id } = restaurant
  return `
  <tr id="tr${id}">
    <th scope="row"></th>
    <td class="name">${name}</td>
    <td class="price">${populateListItemPrice(cost)}</td>
    <td align="center"><button type="button" id="${id}" class="btn btn-outline-pink waves-effect btn-sm remove">remove</button></td>
  </tr>
  `
}

function populateListItemPrice(price){
  let response = `Price:  `
  for (var i = 0; i < price.length; i++) {
    response += `<i class="fa fa-dollar text-black mr-1" aria-hidden="true"></i>`
  }
  return response
}
