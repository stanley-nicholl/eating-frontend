window.Restaurants = {
  getAllRestaurant () {
    return axios.get(`${baseRestaurantURL}`)
  },
  getRestaurant (id) {
    return axios.get(`${baseRestaurantURL}/${id}`)
  },
  createRestaurant (body) {
    return axios.post(`${baseRestaurantURL}`, body)
  },
  destroyRestaurant (id) {
    return axios.delete(`${baseRestaurantURL}/${id}`)
  },
  updateRestaurant (id, body) {
    return axios.put(`${baseRestaurantURL}/${id}`, body)
  }
}
