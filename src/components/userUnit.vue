<template>
    <div class="user-unit">
        <div class="user-name">{{ userName }}</div>
        <button type="button" class="btn">common.scss</button>
        <button type="button" class="btn">ui-common.js</button>
    </div>
</template>

<script>
    export default {
        name: 'userUnit',
        data() {
            return {
                userName: '김도은',
                cssState: false,
                jsState: false
            }
        },
        methods: {
            changeState(){

            }
        }
    }
</script>

<style scoped>
.user-unit {
    max-width: 200px;
    margin: 0 auto;
}
.user-name {
    font-weight: 700;
    font-size: 20px;
    line-height: 50px;
}
.btn {
    display: block;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    padding: 0 20px;
    background: #eee;
}
.btn ~ .btn {
    margin: 5px 0 0;
}
</style>