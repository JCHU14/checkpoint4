export class ToDo {
    constructor(data) {
        this.id = data.id
        this.creatorId = data.creatorId
        this.description = data.description
        this.completed = data.completed
    }


    get TodoTemplate() {

        return `
        <p><form action="/action_page.php">
        <input ${this.completed ? 'checked' : ''} onclick="app.ToDoController.checkTodo('${this.id}')"   type="checkbox" id="checkbox" name="todo" value="todo">
        <label for="todoCheck"></label><br></form>${this.description}<button onclick="app.ToDoController.removeTodo('${this.id}')" class="mdi mdi-delete"></button></p>
       `
    }



}

