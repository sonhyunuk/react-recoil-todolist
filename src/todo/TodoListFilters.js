import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../recoil/todo';

const TodoListFilter = () => {
    const [filter, setFilter] = useRecoilState(todoListFilterState);

    const updateFilter = ({ target: { value } }) =>{
        setFilter(value);
    }


    return (
        <>
            Filter :
            <select value={filter} onChange={updateFilter}>
                <option value="전체 보기">전체 보기</option>
                <option value="실행 목록">실행 목록</option>
                <option value="비실행 목록">비실행 목록</option>
            </select>
        </>
    )
}
export default TodoListFilter