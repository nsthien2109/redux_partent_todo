const initialState = [
  { id: 1, name: "Learn Flutter", priority: "High", completed: true },
  { id: 2, name: "Learn React", priority: "Medium", completed: false },
  { id: 3, name: "Learn Redux", priority: "Low", completed: false },
  { id: 4, name: "Learn NodeJs", priority: "Medium", completed: false },
];
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TODO_LIST_ADD":
      return [...state, action.payload];
    case "TODO_TOGGLE_COMPLETED":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

export default todoReducer;
