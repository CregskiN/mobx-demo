import React, { useState } from 'react';
import { trace } from 'mobx'
import { observer } from 'mobx-react';
import Store from './Store';

interface TodoHeaderProps {
    store: Store;
};

const TodoListHeader: React.FC<TodoHeaderProps> = observer((props) => {
    trace()
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { createTodo } = props.store;
        createTodo(inputValue); // 在此处使用action需添加@action.bound不然其内的this报异常
        setInputValue(() => (''))
    }
    const handleChange = (e: React.ChangeEvent<any>) => {
        const inputValue = e.target.value;
        setInputValue(() => (
            inputValue
        ))
    }

    return (
        <header>
            <form onSubmit={handleSubmit}>
                <input className='input' onChange={handleChange} value={inputValue} placeholder='What needs to be finished?' />
            </form>
        </header>
    )
})

export default TodoListHeader;