import axios from 'axios'

export const Pickup = newUser => {
  return axios
    .post('/book/{customerId}', {
      customerId: newUser.customerId,
      slot: newUser.slot,
      quantity: newUser.quantity,
      })
    .then(response => {
      console.log("Pickup is processing")
    })
}


export const getProfile = user => {
  return axios
    .get('/user/nearbyshops', {
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

