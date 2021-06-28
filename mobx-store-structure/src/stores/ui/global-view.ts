import { autorun, observable } from "mobx";
import RootStore from "../RootStore";

export default class GlobalView {
    @observable
    themeColor: string = 'blue';

    constructor(rootStore: RootStore) {
        autorun(() => {
            console.log(rootStore.dataStore.todoStore.list.length)
        })
    }
}