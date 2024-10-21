import { create } from "zustand";
import { TodoList } from "../types/todoList";
import { TODO } from "../db/todo";

interface Todo {
    todoList: TodoList[];
    addTask(todo: TodoList): void;
    removeTask(id: number): void;
}

export const useTodoStore = create<Todo>((set) => {
    return {
        todoList: TODO,

        addTask(todo: TodoList) {
            set((state) => ({
                todoList: [...state.todoList, todo],
            }));
        },
        removeTask(id: number) {
            set((state) => ({
                todoList: state.todoList.filter((todo) => todo.id !== id),
            }));
        }
    };
});
