import { toJS, spy, observe, observable, action, computed } from 'mobx';

// spy(change => {
//     console.log(change);
// })

export class Todo {
    id = Math.random();
    @observable title = '';
    @observable finish = false;
    constructor(title: string) {
        this.title = title;
    }
    // 切换finish状态
    @action.bound toggle() {
        this.finish = !this.finish;
    }


}

class Store {
    @observable todos: Todo[] = [];

    disposers: any[] = [];

    constructor() {
        observe(this.todos, change => {
            this.disposers.forEach(disposer => disposer());
            this.disposers = [];
            for (let todo of change.object) {
                const disposer = observe(todo, check => {
                    this.save();
                    // console.log(check);
                })
                this.disposers.push(disposer);
            }
            // console.log(change);
            this.save();
        })
    }

    // 需求：存储到localstorage
    save() {
        localStorage.setItem('todos', JSON.stringify(toJS(this.todos)));
    }

    @action.bound createTodo(title: string) {
        this.todos.unshift(new Todo(title))
    }

    @action.bound removeTodo(todo: Todo) {
        (this.todos as any).remove(todo);
    }

    @computed get left() {
        return this.todos.filter((todo) => !todo.finish).length;
    }

}

export default Store;