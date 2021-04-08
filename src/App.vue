<template>
  <div class="wrap">
    <div class="user-area">
      <ul>
        <li>
          <userUnit></userUnit>
        </li>
      </ul>
    </div>
    <guideArea></guideArea>
  </div>
</template>

<script>
import guideArea from './components/guideArea.vue'
import userUnit from './components/userUnit.vue'

export default {
  name: 'App',
  components: {
    guideArea,
    userUnit
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
</style>
