import {defineStore} from "pinia";
import {reactive} from "vue";

export interface ITodo {
    id: string,
    content: string
    isCompleted: boolean
}

interface IListState {
    items: Array<ITodo>
}

export const useListStore = defineStore("todoList", () => {
    const listState = reactive<IListState>({
        items: [
            {id: "001", content: "学习", isCompleted: true},
            {id: "002", content: "做饭", isCompleted: false},
            {id: "003", content: "打扫", isCompleted: true}
        ]
    })
    const addTodo = (item: ITodo): void => {
        listState.items.unshift(item)
    }
    const removeTodo = (id: string): void => {
        const userInput: boolean = window.confirm("确认要删除吗？")
        if (userInput) {
            listState.items = listState.items.filter((item: ITodo) => item.id !== id)
        }
    }
    const changeAllIsCompleted = (status: boolean): void => {
        listState.items.forEach((item: ITodo) => item.isCompleted = status)
    }
    const removeSuccessTodo = (): void => {
        listState.items = listState.items.filter((item: ITodo) => !item.isCompleted)
    }
    const changeIsCompleted = (id: string): void => {
        listState.items.forEach((item: ITodo) => {
            if (item.id === id) {
                item.isCompleted = !item.isCompleted
            }
        })
    }
    return {
        listState, addTodo, removeTodo, changeIsCompleted, removeSuccessTodo, changeAllIsCompleted
    }
}, {persist: true})