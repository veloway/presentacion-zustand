import { create } from "zustand";
import { TODO } from '../db/todo';
import { TodoList } from '../types/todoList';

interface Todo {
    toDoList: TodoList[]
    addTask(todo: TodoList): void
    removeTask (id: number): void
}


export const useToDoStore = create<Todo>((set) => {
    return  {
        toDoList: TODO,

        addTask(todo: TodoList){
            set((state) => ({
                toDoList: { ...state.toDoList, todo}
            }))
        },

        removeTask(id: number){
            set((state) => ({
                toDoList: state.toDoList.filter((todo) => todo.id !== id),
            }));
        }
    };

});