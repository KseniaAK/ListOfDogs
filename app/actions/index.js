import axios from 'axios'

export const CHANGE_BREEDS = 'CHANGE_BREEDS'
export const SELECT_BREED = 'SELECT_BREED'
export const REQUEST_PICS = 'REQUEST_PICS'
export const RECEIVE_PICS = 'RECEIVE_PICS'

export const changeBreeds = (breeds) => {
  return {
    type: CHANGE_BREEDS,
    breeds,
  }
}

export const selectBreed = (breed) => {
  return {
    type: SELECT_BREED,
    breed
  }
}

export const requestPics = (breed) => {
  return {
    type: REQUEST_PICS,
    breed
  }
}

export const receivePics = (breed, picsList) => {
  return {
    type: RECEIVE_PICS,
    breed,
    pics: picsList,
  }
}

export const fetchPics = (breed) => {
  return (dispatch) => {
    dispatch(requestPics(breed))
    return axios.get(`https://dog.ceo/api/breed/${breed}/images`)
      .then(res => {
        console.log(res.data.message)
        dispatch(receivePics(breed, res.data.message))
      })
  }
}