import { observable } from "mobx";
import RootStore from "../RootStore";

class User {}

export default class UserStore {
    @observable
    list: User[] = []

    private rootStore: RootStore

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
    }
}