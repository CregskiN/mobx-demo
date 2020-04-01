import React, { memo } from 'react';
import { trace } from 'mobx'
import { observer } from 'mobx-react';
import Store from './Store';

interface TodoListFooterProps {
    store: Store;
};

const TodoListFooter: React.FC<TodoListFooterProps> = memo(observer((props) => {
    trace();
    return (
        <footer>{props.store.left} item(s) needs to be done</footer>
    )
}));

export default TodoListFooter;