import axios from 'axios'

export const register = newUser => {
  return axios
    .post('/user/registercustomer', {
      username: newUser.username,
      email: newUser.email,
      phoneNumber: newUser.phoneNumber,
      password: newUser.password,
      role: newUser.role,
      geometry: newUser.geometry,
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('/user/logincustomer', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getProfile = user => {
  return axios
    .get('/user/nearby', {
      //headers: { Authorization: ` ${this.getToken()}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

