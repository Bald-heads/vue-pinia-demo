<script setup lang="ts">
import TodoHead from "@/components/TodoList/TodoHead.vue"
import TodoBody from "@/components/TodoList/TodoBody.vue"
import TodoFooter from "@/components/TodoList/TodoFooter.vue"
</script>

<template>
    <div class="todo-container" style="background-color: skyblue">
        <div class="todo-wrap">
            <TodoHead/>
            <TodoBody/>
            <TodoFooter/>
        </div>
    </div>
</template>

<style scoped lang="less">
body {
    background-color: #fff;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.03);
    border-radius: 4px;
}

.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}

.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}

.btn:focus {
    outline: none;
}

.todo-container {
    width: 600px;
    margin: 0 auto;

    .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
}

</style>
