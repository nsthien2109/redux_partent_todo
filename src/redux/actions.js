export const addTodo = (data) => {
  return {
    type: "TODO_LIST_ADD",
    payload: data,
  };
};

export const searchChange = (text) => {
  return {
    type: "FILTER_SEARCH_CHANGE",
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: "FILTER_STATUS_CHANGE",
    payload: status,
  };
};

export const priorityFilterChange = (priorities) => {
  return {
    type: "FILTER_PRIORITY_CHANGE",
    payload: priorities,
  };
};

export const toggleTodoCompleted = (todoId) => {
  return {
    type: "TODO_TOGGLE_COMPLETED",
    payload: todoId,
  };
};
