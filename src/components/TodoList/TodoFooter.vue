<script setup lang="ts">
import {ref, Ref, computed, ComputedRef} from "vue";
import {storeToRefs} from "pinia";
import {ITodo, useListStore} from "@/Store/useListStore";

const listStore = useListStore()
const status: Ref<boolean> = ref(true)
const {listState} = storeToRefs(listStore)
const {removeSuccessTodo, changeAllIsCompleted} = listStore
const accomplishTodo: ComputedRef<number> = computed(() => listState.value.items.reduce((pre: number, curr: ITodo) => curr.isCompleted ? pre + 1 : pre, 0))
const allChecked: ComputedRef<boolean> = computed(() => {
    const success: number = listState.value.items.reduce((pre: number, curr: ITodo) => curr.isCompleted ? pre + 1 : pre, 0)
    return success === listState.value.items.length
})
const changeIsCompleted = () => {
    changeAllIsCompleted(status.value)
    status.value = !status.value
}
</script>

<template>
    <div class="todo-footer">
        <label>
            <input type="checkbox" @change="changeIsCompleted" :checked="allChecked">
        </label>
        <span>
            <span>已完成{{ accomplishTodo }}</span>  /全部{{ listState.items.length }}
        </span>
        <button class="btn btn-danger" @click="removeSuccessTodo">清除已完成任务</button>
    </div>
</template>


<style scoped lang="less">
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    cursor: pointer;

    .btn-danger {
        height: 40px;
        width: 100px;
        background-color: lightcoral;
    }

    button {
        float: right;
        margin-top: 5px;
    }

    label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;

        input {
            position: relative;
            top: -1px;
            vertical-align: middle;
            margin-right: 5px;
        }
    }
}
</style>