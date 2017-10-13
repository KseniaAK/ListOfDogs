import axios from 'axios'

export const SELECT_BREED = 'SELECT_BREED'
export const REQUEST_PICS = 'REQUEST_PICS'
export const RECEIVE_PICS = 'RECEIVE_PICS'
export const RECEIVE_ALL_BREEDS = 'RECEIVE_ALL_BREEDS'
export const REQUEST_ALL_BREEDS = 'REQUEST_ALL_BREEDS'
export const DISPLAY_CHUNK = 'DISPLAY_CHUNK'

const selectBreed = (breedToSelect) => {
  return {
    type: SELECT_BREED,
    breedToSelect
  }
}

export const fetchPics = (breed) => {
  return (dispatch) => {
    dispatch(selectBreed(breed))
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
        const breeds = res.data.message
        dispatch(receiveAllBreeds(breeds))
        dispatch(displayChunk(breeds, 0, 12))
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

const displayChunk = (breeds, begin, end) => {
  return {
    type: DISPLAY_CHUNK,
    breeds,
    begin,
    end
  }
}