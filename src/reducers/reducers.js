const categories = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return state;
    case 'VIEW_CATEGORIES':
      return {
        ...state,
        ...action.data,
      };
    case 'EDIT_CATEGORY':
      return state;
    case 'DELETE_CATEGORY':
      return state;
    default:
      return state;
  }
};

export default categories;
