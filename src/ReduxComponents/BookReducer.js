const initialState = {
  Books: [],
  error: null,
};

function bookReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCHING_DATA_SUCCESSFUL":
      return {
        ...state,
        Books: action.payload,
        error: null,
      };
    case "FETCHING_DATA_FAILED":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default bookReducer;
