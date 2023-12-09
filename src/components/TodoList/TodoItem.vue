<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps<{
    id: string,
    content: string,
    isCompleted: boolean,
    removeTodo: (id: string) => void
    changeIsCompleted: (id: string) => void
}>()
</script>

<template>
    <div>
        <li>
            <label>
                <input type="checkbox" :checked="isCompleted===true" @change="changeIsCompleted(props.id)"/>
                <span style="margin-left: 10px">{{ props.content }}</span>
            </label>
            <button class="btn btn-danger" @click="removeTodo(props.id)">删除</button>
        </li>
    </div>
</template>


<style scoped lang="less">
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;

    .btn-danger {
        width: 50px;
        height: 30px;
        font-size: 20px;
        background-color: indianred;
    }

    button {
        float: right;
        display: none;
        margin-top: 3px;
    }

    label {
        float: left;
        cursor: pointer;

        li input {
            vertical-align: middle;
            margin-right: 6px;
            position: relative;
            top: -1px;
        }
    }
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

li:hover {
    background-color: dodgerblue;
}

li:hover button {
    display: block;
}
</style>