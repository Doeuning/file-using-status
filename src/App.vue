<template>
  <div class="wrap">
    <div class="user-area">
      <ul>
        <li v-for="(user, i) in userName" v-bind:key="i">
          <userUnit v-bind:userName="userName[i]" v-bind:cssUsable="cssUsable"></userUnit>
        </li>
      </ul>
    </div>
    <guideArea v-bind:user="user"></guideArea>
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
		}
	},
  components: {
    guideArea,
    userUnit
  },
  mounted() { 
    this.emitter.on('css-usable-trigger', getItem => {
      this.user = getItem;
      var getIndex = this.userName.findIndex(function(person) {
        return person.name == getItem.name;
      });
      this.userName.forEach(function(el, i){
        if (i == getIndex) {
          el.css = !el.css;
        }
      });
      this.cssUsable = !this.cssUsable;
      // console.log(this.cssUsable);
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
</style>
