<template>
    <div class="user-unit">
        <div class="user-name">{{ userName.name }}</div>
        <button type="button" class="btn" @click=changeCssState v-bind:class="{on: cssState}">common.scss</button>
        <button type="button" class="btn" @click=changeJsState v-bind:class="{on: jsState}">ui-common.js</button>
    </div>
</template>

<script>
    export default {
        name: 'userUnit',
        data() {
            return {
                cssState: false,
                jsState: false
            }
        },
        props : {
            userName: Array,
        },
        methods: {
            changeCssState(){
                this.cssState = !this.cssState;
                this.$emit('css-usable-trigger');
            },
            changeJsState(){
                this.jsState = !this.jsState;
                this.$emit('js-usable-trigger');
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
    cursor: pointer;
    transition: all .3s;
}
.btn ~ .btn {
    margin: 5px 0 0;
}
.btn.on {
    background: #0DBC79;
    color: #ffffff;
}
</style>