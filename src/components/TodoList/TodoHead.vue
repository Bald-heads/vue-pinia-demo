<script setup lang="ts">
import {ref, Ref} from "vue";
import {nanoid} from "nanoid";
import {ITodo, useListStore} from "@/Store/useListStore";

const userInput: Ref<string> = ref("")
const listStore = useListStore()
const {listState, addTodo} = listStore
const addItem = () => {
    const findResult: number = listState.items.findIndex((item: ITodo) => item.content === userInput.value)
    if (findResult === -1 && userInput.value.length > 0) {
        addTodo({id: nanoid(), content: userInput.value, isCompleted: false})
        return userInput.value = ""
    }
    alert("你还没有输入或事项已存在，请确认后再输入")
    return userInput.value = ""
}
</script>

<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入任务名称,回车确认"
               @keyup.enter="addItem" v-model="userInput">
    </div>
</template>


<style scoped>
.todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
}

.todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>