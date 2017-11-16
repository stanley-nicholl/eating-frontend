function updateForm(item){
  const { list_id, name, neighborhood, cuisine, cost, comment, recommend,  date_completed, plates_eaten} = item
  return `
  <p class="h5 break text-center mb-5 pt-2">never again will you say, "remember that one really good restaurant we went to 6 months ago?..."</p>
  <div class="d-flex form-section justify-content-between">
  <div class="d-flex flex-column justify-content-between history">
    <div class="md-form">
      <input placeholder="Selected date" type="text" id="date_completed" class="form-control datepicker" value="${moment(date_completed).format('MM/DD/YY')}">
      <label for="date_completed">when did you go?</label>
    </div>
    <div class="md-form">
      <textarea type="text" id="plates" class="md-textarea">${plates(plates_eaten)}</textarea>
      <label for="plates">plates I ate:</label>
    </div>
  </div>
  <div class="d-flex flex-column justify-content-between future">
    <div class="form-group">
      <input type="checkbox" id="recommend" ${checkBox(recommend)}>
      <label for="recommend">do you recommend</label>
    </div>
    <div class="md-form">
      <textarea type="text" id="comments" class="md-textarea">${comments(comment)}</textarea>
      <label for="comments">your comments:</label>
    </div>
  </div>
  </div>
  `
}

function checkBox(recommend){
  return  recommend = true ? `checked="checked"` :  null
}

function plates(plates){
  return  plates ? plates :  ''
}

function comments(comments){
  return  comments ? comments :  ''
}

function newForm(item){
  return `
  <p class="h5 break text-center mb-5 pt-2">never again will you say, "remember that one really good restaurant we went to 6 months ago?..."</p>
  <div class="d-flex form-section justify-content-between">
  <div class="d-flex flex-column justify-content-between history">
    <div class="md-form">
      <input placeholder="Selected date" type="text" id="date_completed" class="form-control datepicker">
      <label for="date_completed">when did you go?</label>
    </div>
    <div class="md-form">
      <textarea type="text" id="plates" class="md-textarea"></textarea>
      <label for="plates">plates you ate:</label>
    </div>
  </div>
  <div class="d-flex flex-column justify-content-between future">
    <div class="form-group">
      <input type="checkbox" id="recommend" value=true>
      <label for="recommend" class="disabled">do you recommend?</label>
    </div>
    <div class="md-form">
      <textarea type="text" id="comments" class="md-textarea"></textarea>
      <label for="comments">your comments:</label>
    </div>
  </div>
  `
}
