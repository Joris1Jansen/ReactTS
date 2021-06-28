
import RootStore from "./stores/root-store";

const rootStore = new RootStore();

// create 4 users
rootStore.dataStore.usersStore.addUser('Georgy');
rootStore.dataStore.usersStore.addUser('Student 1');
rootStore.dataStore.usersStore.addUser('Student 2');
rootStore.dataStore.usersStore.addUser('Student 3');

// lets take the user so we can do actions on him
const newUser = rootStore.dataStore.usersStore.getUser('Georgy');

// let's add some todos to the user
rootStore.dataStore.todoStore.addTodo('Finish The Exercise', newUser.id);
rootStore.dataStore.todoStore.addTodo('Learn MobX!', newUser.id);

console.log(`${newUser.name} Todos: ${newUser.todos.map(todo => todo.name)}`);

// now we remove him
rootStore.dataStore.usersStore.removeUser('Georgy');