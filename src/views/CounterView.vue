<script lang="ts" setup>
import {ref, Ref} from "vue"
import {storeToRefs} from "pinia"
import {useCounterStore} from "@/Store/useCounterStore";

const newNumberRef: Ref<string> = ref("")
const setHandle = (): void => {
    counterStore.$patch({number: ~~newNumberRef.value})
    newNumberRef.value = ""
}
const counterStore = useCounterStore()
const {number, doubleNumber} = storeToRefs(counterStore)
const {increment, decrement, asyncIncrement, asyncDecrement} = counterStore
</script>

<template>
    <div class="container">
        <p class="counter-title">普通运算</p>
        <div class="counter-body">
            <div class="counter-button">
                <button @click="decrement">-</button>
            </div>
            <div class="counter-number">{{ number }}</div>
            <div class="counter-button">
                <button @click="increment">+</button>
            </div>
        </div>
        <p class="counter-title" style="margin-top: 20px">getter运算</p>
        <div class="counter-body">
            <div class="counter-button">
                <button @click="decrement">-</button>
            </div>
            <div class="counter-number">{{ doubleNumber }}</div>
            <div class="counter-button">
                <button @click="increment">+</button>
            </div>
        </div>
        <p class="counter-title" style="margin-top: 20px">异步action</p>
        <div class="counter-body">
            <div class="counter-button">
                <button @click="asyncDecrement">-</button>
            </div>
            <div class="counter-number">{{ number }}</div>
            <div class="counter-button">
                <button @click="asyncIncrement">+</button>
            </div>
        </div>
        <div style="display: flex;justify-content: space-evenly;margin-top: 30px">
            <button class="storeButton" @click="counterStore.$reset">重制</button>
            <input type="text" class="storeButton" v-model="newNumberRef"
                   placeholder="回车设置" @keyup.enter="setHandle">
        </div>
    </div>
</template>

<style scoped lang="less">
.container {
    .storeButton {
        width: 100px;
        height: 50px;
        font-size: 20px;
    }

    .counter-title {
        font-size: 20px;
    }

    .counter-body {
        display: flex;
        justify-content: space-evenly;

        .counter-number {
            margin-top: 10px;
            font-size: 25px;
        }

        .counter-button {
            width: 50px;
            height: 50px;

            button {
                font-size: 25px;
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>
