import { v4 as uuidv4 } from "uuid";
import {
  createTodo,
  getTodos,
  deleteTodo,
  markCompleted,
  markUncompleted,
} from "../requests";

export const SET_TODOS_ACTION = "SET_TODOS_ACTION";
export const CREATE_TODO_ACTION = "CREATE_TODO_ACTION";
export const DELETE_TODO_ACTION = "DELETE_TODO_ACTION";
export const MARK_TODO_COMPLETED_OR_UNCOMPLETED_ACTION =
  "MARK_TODO_COMPLETED_OR_UNCOMPLETED_ACTION";

export const SET_TODOS = async () => {
  const allTodos = await getTodos();
  if (!allTodos) return;
  return {
    type: SET_TODOS_ACTION,
    data: allTodos,
  };
};
export const CREATE_TODO = async (title) => {
  const newTodo = { title, completed: false, id: uuidv4() };
  await createTodo(newTodo);
  return {
    type: CREATE_TODO_ACTION,
    data: newTodo,
  };
};
export const DELETE_TODO = async (id) => {
  await deleteTodo(id);
  return {
    type: DELETE_TODO_ACTION,
    data: id,
  };
};
export const MARK_TODO_COMPLETED_OR_UNCOMPLETED = async (checked, id) => {
  checked ? await markCompleted(id) : await markUncompleted(id);
  return {
    type: MARK_TODO_COMPLETED_OR_UNCOMPLETED_ACTION,
    data: { checked, id },
  };
};
