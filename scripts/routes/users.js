window.Users = {
  getAllUser () {
    return axios.get(`${baseUserURL}`)
  },
  getUser (email) {
    return axios.get(`${baseUserURL}/${email}`)
  },
  createUser (body) {
    return axios.post(`${baseUserURL}`, body)
  },
  destroyUser (email) {
    return axios.delete(`${baseUserURL}/${email}`)
  },
  updateUser (email, body) {
    return axios.put(`${baseUserURL}/${email}`, body)
  }
}
