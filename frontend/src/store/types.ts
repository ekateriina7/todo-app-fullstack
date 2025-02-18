export type Todo = {
  id: string;
  completed: boolean;
  title: string;
};

export enum FilterFields {
  All = 'All',
  Active = 'Active',
  Completed = 'Completed',
}

export type TodoState = {
  todos: Todo[];
  filter: FilterFields;
};

export enum ActionTypes {
  ADD_TODO = 'ADD_TODO',
  EDIT_TODO = 'EDIT_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
  DELETE_TODO = 'DELETE_TODO',
  SET_FILTER = 'SET_FILTER ',
  CLEAR_COMPLETED = 'CLEAR_COMPLETED',
  TOGGLE_ALL_TODOS = 'TOGGLE_ALL_TODOS',
  SET_TODOS = 'SET_TODOS'
}

export type Action =
  | { type: ActionTypes.ADD_TODO; payload: Todo }
  | { type: ActionTypes.EDIT_TODO; payload: { id: string; title: string } }
  | { type: ActionTypes.TOGGLE_TODO; payload: Todo }
  | { type: ActionTypes.DELETE_TODO; payload: string }
  | { type: ActionTypes.SET_FILTER; payload: FilterFields }
  | { type: ActionTypes.CLEAR_COMPLETED }
  | { type: ActionTypes.TOGGLE_ALL_TODOS }
  | { type: ActionTypes.SET_TODOS; payload: Todo[] };
