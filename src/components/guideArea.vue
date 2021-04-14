<template>
	<div class="guide-area">
		현재 {{user.name}}님이 <span v-if="user.css">{{cssName}}</span> <span v-if="user.js">{{jsName}}</span>를 사용중입니다.
	</div>
</template>

<script>
export default {
	name: 'guideArea',
	props: {
		user: null,
		cssName: null,
		jsName: null,
	},
}
</script>

<style scoped>
.guide-area {
	margin: 50px 0 0;
	font-size: 16px;
	text-align: center;
}
</style>