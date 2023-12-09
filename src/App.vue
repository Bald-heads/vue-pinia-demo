<template>
    <div style="width: 100%;height: 100%">
        <div class="title">
            <h1>Pinia案例</h1>
            <div>
                <div>
                    <router-link to="/" class="routerLink">计数器</router-link>
                </div>
                <div>
                    <router-link to="/todo" class="routerLink">待办事项</router-link>
                </div>
            </div>
        </div>
        <div class="compount">
            <router-view/>
        </div>
    </div>
</template>

<style scoped lang="less">
.title {
    color: skyblue;
    text-align: center;

    div {
        margin-top: 20px;
        display: flex;
        justify-content: space-evenly;

        .routerLink {
            color: dodgerblue;
            text-decoration: none;
        }
    }
}

.compount {
    margin-top: 50px;
    text-align: center;
}
</style>
