<template>
  <div class="wrap">
    <div class="user-area">
      <ul>
        <li v-for="(user, i) in userName" v-bind:key="i">
          <userUnit v-bind:userName="userName[i]" v-bind:cssUsable="cssUsable" v-bind:jsUsable="jsUsable"></userUnit>
        </li>
      </ul>
    </div>
    <transition name="fade">
      <div v-if="!cssUsable || !jsUsable">
        <guideArea v-bind:user="user" v-bind:cssName="cssName" v-bind:jsName="jsName"></guideArea>
      </div>
    </transition>
  </div>
</template>

<script>
import guideArea from './components/guideArea.vue'
import userUnit from './components/userUnit.vue'

export default {
  name: 'App',
	data() {
		return {
			userName: [
				{
          name: '박래섭',
          css: false,
          js: false
        },
				{
          name: '김소연',
          css: false,
          js: false
        },
				{
          name: '김도은',
          css: false,
          js: false
        },
				{
          name: '이수현',
          css: false,
          js: false
        },
			],
      cssUsable: true,
      jsUsable: true,
      user: {},
      cssName: null,
      jsName: null,
		}
	},
  components: {
    guideArea,
    userUnit
  },
  mounted() {
    this.emitter.on('css-usable-trigger', (getItem) => {
      this.user = getItem[0];
      this.cssName = getItem[1];
      this.jsName = getItem[2];
      var getIndex = this.userName.findIndex(function(person) {
        return person.name == getItem[0].name;
      });
      this.userName.forEach(function(el, i){
        if (i == getIndex) {
          el.css = !el.css;
        }
      });
      this.cssUsable = !this.cssUsable;
    });
    this.emitter.on('js-usable-trigger', (getItem) => {
      this.user = getItem[0];
      this.jsName = getItem[1];
      this.jsName = getItem[2];
      var getIndex = this.userName.findIndex(function(person) {
        return person.name == getItem[0].name;
      });
      this.userName.forEach(function(el, i){
        if (i == getIndex) {
          el.js = !el.js;
        }
      });
      this.jsUsable = !this.jsUsable;
    });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: table;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.wrap {
  display: table-cell;
  vertical-align: middle;
}
button {
  border: none;
  background: none;
  padding: 0;
  outline: none;
}
.user-area ul {
  padding: 0;
  font-size: 0;
}
.user-area ul li {
  display: inline-block;
  vertical-align: top;
}
.user-area ul li + li {
  margin: 0 0 0 10px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
