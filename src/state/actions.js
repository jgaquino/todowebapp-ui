import { v4 as uuidv4 } from "uuid";

export const CREATE_TODO_ACTION = "CREATE_TODO_ACTION";
export const DELETE_TODO_ACTION = "DELETE_TODO_ACTION";
export const MARK_TODO_COMPLETED_OR_UNCOMPLETED_ACTION =
  "MARK_TODO_COMPLETED_OR_UNCOMPLETED_ACTION";

export const CREATE_TODO = (title) => ({
  type: CREATE_TODO_ACTION,
  data: { title, completed: false, id: uuidv4() },
});
export const DELETE_TODO = (id) => ({
  type: DELETE_TODO_ACTION,
  data: id,
});
export const MARK_TODO_COMPLETED_OR_UNCOMPLETED = (checked, id) => ({
  type: MARK_TODO_COMPLETED_OR_UNCOMPLETED_ACTION,
  data: { checked, id },
});
