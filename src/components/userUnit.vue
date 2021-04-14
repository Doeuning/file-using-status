<template>
    <div class="user-unit">
        <div class="user-name">{{ userName.name }}</div>
        <button type="button" class="btn" @click=changeCssState v-bind:class="{on: cssState}">{{ cssName }}</button>
        <button type="button" class="btn" @click=changeJsState v-bind:class="{on: jsState}">{{ jsName }}</button>
    </div>
</template>

<script>
    export default {
        name: 'userUnit',
        data() {
            return {
                cssName: 'common.scss',
                jsName: 'ui-common.js',
                cssState: false,
                jsState: false,
            }
        },
        props : {
            userName: null,
            cssUsable: null,
            jsUsable: null,
        },
        methods: {
            changeCssState(){
                if (this.userName.css) {
                    this.cssState = false;
                    this.emitter.emit('css-usable-trigger', [this.userName, this.cssName, this.jsName]);
                } else if (this.cssUsable) {
                    this.cssState = !this.cssState;
                    this.emitter.emit('css-usable-trigger', [this.userName, this.cssName, this.jsName]);
                }
            },
            changeJsState(){
                if (this.userName.js) {
                    this.jsState = false;
                    this.emitter.emit('js-usable-trigger', [this.userName, this.jsName, this.jsName]);
                } else if (this.jsUsable) {
                    this.jsState = !this.jsState;
                    this.emitter.emit('js-usable-trigger', [this.userName, this.jsName, this.jsName]);
                }
            },
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