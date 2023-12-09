import {defineStore} from "pinia"

interface ICounterState {
    number: number
}

interface ICounterGetters {
    [doubleNumber: string]: (state: ICounterState) => number
}


interface ICounterActions {
    increment: () => void
    decrement: () => void
    asyncIncrement: () => void
    asyncDecrement: () => void
}


export const useCounterStore = defineStore<string, ICounterState, ICounterGetters, ICounterActions>("counter", {
    state: () => {
        return {
            number: 0
        }
    },
    getters: {
        doubleNumber: (state: ICounterState) => state.number * 2
    },
    actions: {
        increment() {
            this.number++
        },
        decrement() {
            this.number--
        },
        async asyncIncrement() {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            this.increment()
        },
        async asyncDecrement() {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            this.decrement()
        }
    }
})
