<template>
	<div class="guide-area">
		<div v-if="cssUser.css">
			현재 <span>{{cssUser.name}}</span>님이 <span>{{cssName}}</span>를 사용중입니다.
		</div>
		<div v-if="jsUser.js">
			현재 <span>{{jsUser.name}}</span>님이 <span>{{jsName}}</span>를 사용중입니다.
		</div>
	</div>
</template>

<script>
export default {
	name: 'guideArea',
	props: {
		cssUser: null,
		jsUser: null,
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
.guide-area span {
	font-weight: 700;
	font-size: 20px;
    color: #0DBC79;
}
</style>