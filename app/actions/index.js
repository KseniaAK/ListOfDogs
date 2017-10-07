export const CHANGE_BREEDS = 'CHANGE_BREEDS'

export const changeBreeds = (breeds) => {
  return {
    type: CHANGE_BREEDS,
    breeds,
  }
}