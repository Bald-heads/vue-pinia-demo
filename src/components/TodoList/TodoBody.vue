<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useListStore} from "@/Store/useListStore";
import TodoItem from "./TodoItem.vue"

const listStore = useListStore()
const {listState} = storeToRefs(listStore)
const {removeTodo, changeIsCompleted} = listStore
</script>

<template>
    <div class="todo-main">
        <TransitionGroup appear name="todo">
            <TodoItem v-for="listObject in listState.items" :key="listObject.id"
                      :content="listObject.content" :isCompleted="listObject.isCompleted"
                      :removeTodo="removeTodo" :id="listObject.id"
                      :changeIsCompleted="changeIsCompleted"/>
        </TransitionGroup>
    </div>
</template>


<style scoped lang="less">
.todo-main {
    margin-left: 0;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0;
}

.todo-enter-active {
    animation: todo 0.5s linear;
}

.todo-leave-active {
    animation: todo 0.5s linear reverse;
}

@keyframes todo {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>