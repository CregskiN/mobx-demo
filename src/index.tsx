import React, { Component, memo } from 'react';
import ReactDOM from 'react-dom';
import { trace } from 'mobx'
import { observer } from 'mobx-react';
import Store from './Store';
import TodoListFooter from './TodoListFooter';
import TodoListHeader from './TodoListHeader';
import TodoView from './TodoView';
const store = new Store();


interface TodoListProps {
    store: Store;
};

@observer
class TodoList extends Component<TodoListProps> {

    render() {
        trace();
        return (
            <div>
                <TodoListHeader store={this.props.store} />
                <ul>
                    <TodoView store={this.props.store} />
                </ul>
                <TodoListFooter store={this.props.store} />
            </div>
        )
    }
}

ReactDOM.render(<TodoList store={store} />, document.getElementById('root'));