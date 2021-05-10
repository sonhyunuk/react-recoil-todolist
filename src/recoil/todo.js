import { atom, selector } from 'recoil';

export const todoListState = atom({
    key: 'todoListState',
    default: [],
});

export const todoListFilterState = atom({
    key: "todoListFilterState",
    default: "전체 보기"
})

//필터 관련 셀렉터
export const filteredTodoListState = selector({
    key: 'filteredTodoListState',

    get: ({ get }) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState);

        switch (filter) {
            case '실행 목록':
                return list.filter((item) => item.isComplete);
            case '비실행 목록':
                return list.filter((item) => !item.isComplete);
            default:
                return list;
        };
    },
});
// 상태계산 selector
export const todoListStatsState = selector({
    key: 'todoListStatsState',

    get: ({ get }) => {
        const todoList = get(filteredTodoListState);
        const totalNum = todoList.length;
        const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
        const totalUnCompletedNum = todoList.filter((item) => !item.isComplete).length;
        const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

        return {
            totalNum,
            totalCompletedNum,
            totalUnCompletedNum,
            percentCompleted
        }

    }
})
