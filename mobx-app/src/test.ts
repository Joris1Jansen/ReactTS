import { action, autorun, computed, makeObservable, observable, reaction, runInAction, when } from "mobx"

console.log('it works')

let person = observable({
    firstName: 'MobX',
    lastName: 'Course'
})

console.log('Our person', person)


// THIS WON'T WORK
//@ts-ignore
person = {
    firstName: 'New Name'
}

console.log(person)

class Person {
    @observable
    firstName: string;

    @observable
    lastName: string;

    @observable
    age: number = 15;

    @observable
    isAlive: boolean = true;

    @observable
    dollars: number = 10

    constructor(name: string, lastName: string) {
        makeObservable(this);
        this.firstName = name
        this.lastName = lastName

        when(
            () => this.age > 99,
            () => this.bury()
        )
    }

    @action
    bury() {
        this.isAlive = false
    }
    
    @action
    setAge(age: number) {
        this.age = age;
    }

    @action
    updateFirstName(name:string) {
        this.firstName = name;
    }

    @action
    updateLastname(lastName: string) {
        this.lastName = lastName
    }

    @computed
    get euro() {
        return this.dollars * 2
    }

    @action
    withdrawl() {
        this.dollars = this.dollars - 1
    }
}

const newPerson = new Person('Joris', 'Jansen')

autorun(() => {
    console.log('Calculat')
    console.log(newPerson.euro)
})


autorun(() => {
    console.log(`Person name is:${newPerson.age} -- ${newPerson.isAlive} ${newPerson.firstName} ${newPerson.lastName}`)
})

// runInAction(() => {
//     newPerson.firstName = 'MobX Course'
// })

// const updater = action(() => {
//     newPerson.firstName = 'MobX Course 123'
// })

// updater()

runInAction(async () => {
    newPerson.firstName = 'Test';
    newPerson.lastName = 'TestTest';
})

const disposer = reaction(
    () => newPerson.isAlive === false,
    () => console.log('RIP')
)


disposer()

newPerson.setAge(100)

newPerson.updateFirstName('MobX')
newPerson.updateLastname('MobX')
newPerson.withdrawl()
newPerson.withdrawl()
newPerson.withdrawl()
newPerson.withdrawl()

export {};