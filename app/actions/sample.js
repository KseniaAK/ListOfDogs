// export const UPDATE_TITLE = 'UPDATE_TITLE';
export const CHANGE_BREEDS = 'CHANGE_BREEDS'

// export const updateTitle = (title) => {
//   return {
//     type: UPDATE_TITLE,
//     title,
//   };
// }

export const changeBreeds = (breeds) => {
  return {
    type: CHANGE_BREEDS,
    breeds,
  };
}