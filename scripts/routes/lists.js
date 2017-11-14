window.Lists = {
  getAllList () {
    return axios.get(`${baseListURL}`)
  },
  getList (id) {
    return axios.get(`${baseListURL}/${id}`)
  },
  createList (body) {
    return axios.post(`${baseListURL}`, body)
  },
  destroyList (id) {
    return axios.delete(`${baseListURL}/${id}`)
  },
  updateList (id, body) {
    return axios.put(`${baseListURL}/${id}`, body)
  }
}
