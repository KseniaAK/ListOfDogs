import axios from 'axios'

export const CHANGE_BREEDS = 'CHANGE_BREEDS'
export const SELECT_BREED = 'SELECT_BREED'
export const REQUEST_PICS = 'REQUEST_PICS'
export const RECEIVE_PICS = 'RECEIVE_PICS'
export const RECEIVE_ALL_BREEDS = 'RECEIVE_ALL_BREEDS'
export const REQUEST_ALL_BREEDS = 'REQUEST_ALL_BREEDS'

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

export const fetchPics = (breed) => {
  return (dispatch) => {
    dispatch(requestPics(breed))
    return axios.get(`https://dog.ceo/api/breed/${breed}/images`)
      .then(res => {
        dispatch(receivePics(breed, res.data.message))
      })
  }
}

const requestPics = (breed) => {
  return {
    type: REQUEST_PICS,
    breed
  }
}

const receivePics = (breed, picsList) => {
  return {
    type: RECEIVE_PICS,
    breed,
    pics: picsList,
  }
}

export const fetchAllBreeds = () => {
  return (dispatch) => {
    dispatch(requestAllBreeds())
    return axios.get('https://dog.ceo/api/breeds/list/all')
      .then(res => {
        dispatch(receiveAllBreeds(res.data.message))
      })
  }
}

const requestAllBreeds = () => {
  return {
    type: REQUEST_ALL_BREEDS
  }
}

const receiveAllBreeds = (breeds) => {
  return {
    type: RECEIVE_ALL_BREEDS,
    breeds
  }
}