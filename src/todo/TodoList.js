import React from 'react';
import TodoItem from './TodoItem';
import TodoListStats from './TodoListStats';
import TodoListFilters from './TodoListFilters';
import TodoItemCreator from './TodoItemCreator';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from '../recoil/todo';

const TodoList = () => {
    //필터된 state
    const todoList = useRecoilValue(filteredTodoListState);
    //const todoList = useRecoilValue(todoListState)
    return (
        <>
            <TodoListStats/>
            <TodoListFilters/>
            <TodoItemCreator />
            {todoList.map((todoItem) => (
                <TodoItem key={todoItem.id} item={todoItem} />
            ))}
        </>
    )
}

export default TodoList;