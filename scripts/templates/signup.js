function signupForm() {
  return `
  <div class="row d-flex justify-content-center">
    <div class="form-group col-lg-4 col-sm-8">
      <input type="text" class="form-control" id="first-name" placeholder="first name">
    </div>
    <div class="form-group col-lg-4 col-sm-8">
      <input type="text" class="form-control" id="last-name" placeholder="last name">
    </div>
  </div>
  <div class="row d-flex justify-content-center">
    <div class="form-group col-lg-8 col-sm-8">
      <input type="email" class="form-control" id="email" rows="4" placeholder="email"></input>
    </div>
  </div>
  <div class="row d-flex flex-column align-items-center mx-lg-2">
    <button type="button" id="signup" class="btn signup btn-pink">sign up</button>
    <h6 class="text-center desc">craft your own journey through the seattle food scene with real recommendations, from people who know good food</h6>
  </div>
  `
}
