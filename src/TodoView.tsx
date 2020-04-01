import React, { memo } from 'react';
import { trace } from 'mobx'
import { observer } from 'mobx-react';
import Store, { Todo } from './Store';

interface TodoItemProps {
    todo: Todo
};

const TodoItem: React.FC<TodoItemProps> = memo(observer((props) => {
    const { todo } = props;
    return (
        <>
            <input className='item-toggle' type='checkbox' checked={todo.finish} onChange={todo.toggle} />
            <span className='item-title' >{todo.title}</span>
        </>
    )
}))


interface TodoViewProps {
    store: Store;
};

const TodoView: React.FC<TodoViewProps> = memo(observer((props) => {
    trace();
    const { todos, removeTodo } = props.store;
    return (
        <>
            {
                todos.map((todo) => (
                    <li className='todo-item' key={todo.id}>
                        <TodoItem todo={todo} />
                        <span className='item-remove' onClick={() => removeTodo(todo)}>x</span>
                    </li>

                ))
            }
        </>
    )
}))

export default TodoView;