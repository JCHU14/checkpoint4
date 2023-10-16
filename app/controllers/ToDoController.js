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
    setHTML('amount', `Notes: ${todos.length}`)
}

function _drawChecked() {
    console.log('checking todo')
    const todos = AppState.todos
    let content = ''
    todos.find(todo => content += todo.CheckedTemplate)
    setHTML('todoTemp', content)
    setHTML('amount', `Notes: ${todos.length - 1}`)
}



export class ToDoController {
    constructor() {
        console.log('todo controller loaded')
        AppState.on("todos", _drawTodos)
        AppState.on('account', _drawTodos)
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





    async checkTodo() {
        try {
            const wantsToConfirm = await Pop.confirm('Are you sure you want to check?')
            if (!wantsToConfirm) {
                return

            }

            _drawChecked()



        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }
}
