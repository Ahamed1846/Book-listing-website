function fetchBooks() {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://reactnd-books-api.udacity.com/books",
        {
          headers: { Authorization: "whatever-you-want" },
        }
      );
      const data = await response.json();
      dispatch({ type: "FETCHING_DATA_SUCCESSFUL", payload: data });
    } catch (error) {
      dispatch({ type: "FETCHING_DATA_FAILED", payload: error.message });
      console.log(error);
    }
  };
}

export { fetchBooks };
