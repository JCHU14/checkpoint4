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
        <input onclick="app.ToDoController.checkTodo()"  type="checkbox" id="${this.id}" name="todo" value="todo">
        <label for="todoCheck"></label><br></form>${this.description}<button onclick="app.ToDoController.removeTodo('${this.id}')" class="mdi mdi-delete"></button></p>
       `
    }
    get CheckedTemplate() {
        return `
        <marquee class="fs-5 bg-danger text-light text-center" behavior="scroll" direction="right">REMOVE TO CONFIRM</marquee>
        <p><form action="/action_page.php">
        <input checked onclick="app.ToDoController.checkTodo(Object.isFrozen)"  type="checkbox" id="${this.id}" name="todo" value="todo">
        <label for="todoCheck"></label><br></form><p class="checked">${this.description}<p><button onclick="app.ToDoController.removeTodo('${this.id}')" class="mdi mdi-delete"></button></p>
       `
    }



}

