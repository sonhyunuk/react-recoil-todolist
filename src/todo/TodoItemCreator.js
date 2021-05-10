import React, { useState } from 'react';
import { todoListState } from '../recoil/todo';
import { useSetRecoilState } from 'recoil';
let id = 0;
const getId = () => id++;

const TodoItemCreator = () => {
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState);

    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: getId(),
                text: inputValue,
                isComplete: false,
            }
        ])
        setInputValue('');

    }
    //(e) => setInputValue(e.target.value) 와 동일
    const onChange = ({ target: { value } }) => {
        setInputValue(value);
      };

    return (
        <div>
            <input type="text" value={inputValue} onChange={onChange}  />
            <button type="button" onClick={addItem}>add</button>
        </div>
    )
}

export default TodoItemCreator;
