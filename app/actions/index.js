import axios from 'axios'
import {
  getFromLocalStorage,
  putInLocalStorage
} from './helperFunctions/localStorageActions'

export const SELECT_BREED = 'SELECT_BREED'
export const REQUEST_PICS = 'REQUEST_PICS'
export const RECEIVE_PICS = 'RECEIVE_PICS'
export const RECEIVE_ALL_BREEDS = 'RECEIVE_ALL_BREEDS'
export const REQUEST_ALL_BREEDS = 'REQUEST_ALL_BREEDS'
export const DISPLAY_CHUNK = 'DISPLAY_CHUNK'
export const READ_USER_INPUT = 'READ_USER_INPUT'

const NUM_OF_BREEDS = 12

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
        putInLocalStorage(Object.keys(breeds).map((breed) => breed))
        dispatch(receiveAllBreeds(breeds))
        dispatch(displayChunk(breeds, 0, NUM_OF_BREEDS))
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

export const readUserInput = (searchValue) => {
  return {
    type: READ_USER_INPUT,
    searchValue
  }
}