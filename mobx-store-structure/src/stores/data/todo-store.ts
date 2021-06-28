import { observable } from "mobx";
import RootStore from "../RootStore";

class Todo {}

export default class TodoStore {
    @observable
    list: Todo[] = [];

    private rootStore: RootStore

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
    }
}