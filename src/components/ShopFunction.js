import axios from 'axios'

export const Shopregister = newUser => {
  return axios
    .post('/shops/registershop', {
      name: newUser.name,
      email: newUser.email,
      phoneNumber: newUser.phoneNumber,
      password: newUser.password,
      OpeningTime: newUser.OpeningTime,
      ClosingTime: newUser.ClosingTime,
      price: newUser.price,
      image: newUser.image,
      geometry: newUser.geometry,
      role: newUser.role,
      address: newUser.address,
    })
    .then(response => {
      console.log('Registered')
    })
}


export const Shoplogin = user => {
  return axios
    .post('/shops/login', {
      phoneNumber: user.phoneNumber,
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
    .get('/shops/{id}', {
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