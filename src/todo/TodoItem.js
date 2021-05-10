import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../recoil/todo';


const TodoItem = ({ item }) => {
    const [todoList, setTodoList] = useRecoilState(todoListState);

    //등록된 todoitem 수정시
    const editItemText = ({ target: { value } }) => {
        const newList = todoList.map((listItem) => (
            listItem.id === item.id ? { ...listItem, text: value } : listItem
        ));
        console.log('수정');
        setTodoList(newList);
    }
    //해당 id값 찾고 삭제
    const deleteItem = () => {
        const newList = todoList.filter((listItem) =>(listItem.id !== item.id));
        setTodoList(newList);        
    };

    //체크박스 체크 
    const toggleItemCompletion = () => {
        const newList = todoList.map((listItem) => (
            // id값 비교 후 같으면 isComplete값을 반대로, 다르면 그대로 배열에 넣엏준다.
            listItem.id === item.id
                ? { ...listItem, isComplete: !item.isComplete }
                : listItem
        ));
        console.log('체크')
        setTodoList(newList);
    };




    return (
        <div>
            <input type="text" value={item.text} onChange={editItemText} />
            <input type="checkbox" checked={item.isComplete} onChange={toggleItemCompletion} />
            <button type="button" onClick={deleteItem}>X</button>
        </div>
    );
};
export default TodoItem;