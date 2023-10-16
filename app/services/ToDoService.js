import { AppState } from "../AppState.js";
import { ToDo } from "../models/ToDo.js";
import { api } from "./AxiosService.js";




class TodoService {
    async getTodo() {
        const res = await api.get('api/todos')
        console.log('get todos', res.data)
        const newTodos = res.data.map(todoPOJO => new ToDo(todoPOJO))
        AppState.todos = newTodos
    }


    async createTodo(todoFormData) {
        const res = await api.post('api/todos', todoFormData)
        console.log('creating todo', res.data)
        const newTodo = new ToDo(res.data)
        AppState.todos.push(newTodo)
        AppState.emit('todos')
    }

    async removeTodo(todoId) {
        const res = await api.delete(`api/todos/${todoId}`)
        console.log('removing todo', res.data)
        const todoIndex = AppState.todos.findIndex(todo => todo.id == todoId)
        if (todoIndex == -1) {
            return
        }
        AppState.todos.splice(todoIndex, 1)
        AppState.emit('todos')
    }

    async updateTodo(todoId) {
        const todoIndex = AppState.todos.findIndex(todo => todo.id == todoId)
        const foundTodo = AppState.todos[todoIndex]

        const todoData = {
            completed: !foundTodo.completed
        }

        const res = await api.put(`api/todos/${todoId}`, todoData)
        console.log('updated todo', res.data);
        const newTodo = new ToDo(res.data)

        AppState.todos.splice(todoIndex, 1, newTodo)
        AppState.emit('todos')



    }
}



export const todoService = new TodoService();