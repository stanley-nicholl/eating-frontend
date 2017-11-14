const localhostUserURL = 'http://localhost:3000/users'
const herokuUserURL = 'howl.herokuapp.com/users'
const baseUserURL = window.location.href.includes('127.0.0.1') ? localhostUserURL : herokuUserURL

const localhostListURL = 'http://localhost:3000/lists'
const herokuListURL = 'howl.herokuapp.com/lists'
const baseListURL = window.location.href.includes('127.0.0.1') ? localhostListURL : herokuListURL

const localhostRestaurantURL = 'http://localhost:3000/restaurants'
const herokuRestaurantURL = 'howl.herokuapp.com/restaurants'
const baseRestaurantURL = window.location.href.includes('127.0.0.1') ? localhostRestaurantURL : herokuRestaurantURL
