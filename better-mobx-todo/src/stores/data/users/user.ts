import {computed, observable} from "mobx";
import RootStore from "../../root-store";

let runningId = 0;

export default class User {
    id: number;

    @observable
    name: string;

    private rootStore: RootStore;

    constructor(name: string, rootStore: RootStore) {
        this.id = runningId++;
        this.name = name;
        this.rootStore = rootStore;

        rootStore.dataStore.todoStore.addTodo('Finish The Course!', this.id);
    }

    @computed
    get todos() {
        return this.rootStore.dataStore.todoStore.getUserTodos(this.id);
    }
}