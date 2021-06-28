
import {autorun, computed, observable} from "mobx";
import RootStore from "../root-store";

export default class GlobalView {
    private rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore

        autorun(() => {
           console.log(this.stats);
        });
    }

    @computed
    get stats() {
        return `
            User Names: ${this.rootStore.dataStore.usersStore.users.map(user => user.name)},
            Total Todos: ${this.rootStore.dataStore.todoStore.todoList.length}
        `;
    }
}