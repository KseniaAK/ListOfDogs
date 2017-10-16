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
export const DISPLAY_SEARCH_RESULTS = 'DISPLAY_SEARCH_RESULTS'

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
        putInLocalStorage(breeds)
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

export const handleUserSearch = (searchValue) => {
  return (dispatch) => {
    dispatch(readUserInput(searchValue))
    dispatch(displaySearchResults(searchValue))
  }
}

 const readUserInput = (searchValue) => {
  return {
    type: READ_USER_INPUT,
    searchValue
  }
}

 const displaySearchResults = (searchValue) => {
  const filteredBreeds = filterSearchResults(searchValue, getFromLocalStorage())
  console.log('filtered breeds', filteredBreeds)
  return {
    type: DISPLAY_SEARCH_RESULTS,
    breeds: filteredBreeds,
    begin: 0,
    end: NUM_OF_BREEDS
  }
}

const filterSearchResults = (searchValue, breedsToFilter) => {
  const filteredBreeds = {}
  const breeds = Object.keys(breedsToFilter).map((breed) => breed)
  console.log(breeds)
  for (let i = 0; i < breeds.length; i++) {
    if (breeds[i].indexOf(searchValue.toLowerCase()) !== -1) {
      filteredBreeds[breeds[i]] = breedsToFilter[breeds[i]]
    }
    // only need to display max of NUM_OF_BREEDS breeds
    if (filteredBreeds.length === NUM_OF_BREEDS) {
      return filteredBreeds
    }
  }
  return filteredBreeds
}