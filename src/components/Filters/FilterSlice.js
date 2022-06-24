const initialState = {
  search: "",
  status: "All",
  priority: [],
};
const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER_SEARCH_CHANGE":
      return {
        ...state,
        search: action.payload,
      };
    case "FILTER_STATUS_CHANGE":
      return {
        ...state,
        status: action.payload,
      };
    case "FILTER_PRIORITY_CHANGE":
      return {
        ...state,
        priority: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
