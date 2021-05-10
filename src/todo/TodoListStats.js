import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../recoil/todo';

const TodoListStats = () => {
    const {
        totalNum,
        totalCompletedNum,
        totalUnCompletedNum,
        percentCompleted
    } = useRecoilValue(todoListStatsState);

    let formattedPercentCompleted = Math.round(percentCompleted * 100);

    return(
        <ul>
            <li>전체 목록 : {totalNum}</li>
            <li>실행 목록 : {totalCompletedNum}</li>
            <li>비실행 목록 : {totalUnCompletedNum}</li>
            <li>평균 : {formattedPercentCompleted}</li>
        </ul>
    )
}

export default TodoListStats;