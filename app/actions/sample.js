export const UPDATE_TITLE = 'UPDATE_TITLE';

export const updateTitle = (title) => {
  return {
    type: UPDATE_TITLE,
    title,
  };
}
