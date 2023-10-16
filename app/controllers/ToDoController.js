import { AppState } from "../AppState.js"
import { ToDo } from "../models/ToDo.js"
import { api } from "../services/AxiosService.js"
import { todoService } from "../services/ToDoService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"



function _drawTodos() {
    console.log('drawing todos')
    const todos = AppState.todos
    let content = ''
    todos.forEach(todo => content += todo.TodoTemplate)
    setHTML('todoTemp', content)



    const completedTodos = todos.filter(todo => todo.completed == false)
    setHTML('completed', `Notes: ${completedTodos.length}`)
}






export class ToDoController {
    constructor() {
        console.log('todo controller loaded')
        AppState.on("todos", _drawTodos)
        AppState.on('account', this.GetTodos)
    }



    async createTodo(event) {





        try {
            event.preventDefault()
            console.log('creating todo')
            const form = event.target
            const todoFormData = getFormData(form)
            await todoService.createTodo(todoFormData)
            form.reset()




        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }


    async removeTodo(todoId) {
        try {
            const wantsToDelete = await Pop.confirm('Are you sure you want to delete?')
            if (!wantsToDelete) {
                return
            }

            await todoService.removeTodo(todoId)

        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }


    async GetTodos() {
        try {
            await todoService.getTodo()

        } catch (error) {
            Pop.error(error)
            console.error(error);

        }
    }



    async checkTodo(todoId) {
        try {

            // FIXME send your todoId down to the service for your put request
            await todoService.updateTodo(todoId)

        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }
}
