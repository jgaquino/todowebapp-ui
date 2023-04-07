import {
  CREATE_TODO_ACTION,
  DELETE_TODO_ACTION,
  MARK_TODO_COMPLETED_OR_UNCOMPLETED_ACTION,
} from "./actions";

const reducer = (state, action) => {
  let index, newTodos;

  switch (action.type) {
    case CREATE_TODO_ACTION:
      return { ...state, todos: [...state.todos, action.data] };
    case DELETE_TODO_ACTION:
      index = state.todos.findIndex((todo) => todo.id === action.data);
      newTodos = [...state.todos];
      newTodos.splice(index, 1);
      return { ...state, todos: newTodos };
    case MARK_TODO_COMPLETED_OR_UNCOMPLETED_ACTION:
      index = state.todos.findIndex((todo) => todo.id === action.data.id);
      newTodos = [...state.todos];
      newTodos[index] = { ...newTodos[index], completed: action.data.checked };
      return { ...state, todos: newTodos };
    default:
      return state;
  }
};

export default reducer;
