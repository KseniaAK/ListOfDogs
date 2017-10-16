
export const getFromLocalStorage = () => {
  try {
    const serializedBreeds = localStorage.getItem('allBreeds')
    if (serializedBreeds === null) return undefined
    return JSON.parse(serializedBreeds)
  } catch (err) {
    return undefined
  }
}

export const putInLocalStorage = (breeds) => {
  try {
    const serializedBreeds = JSON.stringify(breeds)
    localStorage.setItem('allBreeds', serializedBreeds)
  } catch (err) {
    console.log(err)
  }
}