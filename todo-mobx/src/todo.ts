import { action, computed, observable, reaction, when } from 'mobx';

let runningId = 0

class Todo {
    id: number = runningId++

    @observable
    name: string = '';
    @observable
    isCompleted: boolean = false

    private disposer: () => void;

    constructor(name: string) {
        this.name = name;

        this.disposer = reaction(
            () => this.isCompleted,
            () => {
                console.log(`Todo: ${this.name}, changed to: ${this.isCompleted} ? 'Done' : Incomplete `)
            }
        )
    }

    @action
    updateName(name: string) {
        this.name = name
    }

    @action
    toggleTodo() {
        this.isCompleted = !this.isCompleted
    }

    dispose() {
        this.disposer()
    }
}

class TodoList {
    @observable
    list: Todo[] = [];

    constructor() {
        reaction(
            () => this.list.length,
            () => {
                console.log(
                    `Total: ${this.list.length}, completed: ${this.isCompleted.length}, incompleted: ${this.inCompleted.length}`
                )
            }
        )

        when(
            () => this.list.length > 0 && this.list.every(todo => todo.isCompleted === true),
            () => console.log('Amazing work')
        )
    }

    @action
    addTodo(name: string) {
        this.list.push(new Todo(name))
    }

    @action
    removeTodo(name: string) {
        const todoToRemove = this.list.find(todo => todo.name === name)

        if (todoToRemove) {
            todoToRemove.dispose();
            const todoIndex = this.list.indexOf(todoToRemove)
            this.list.splice(todoIndex, 1)
        }
    }

    @computed
    get isCompleted() {
        return this.list.filter(todo => todo.isCompleted === true)
    }

    @computed
    get inCompleted() {
        return this.list.filter(todo => todo.isCompleted === false)
    }
}

const todoList = new TodoList();

todoList.addTodo('Test')
todoList.addTodo('Test')
todoList.addTodo('Test')
