<template>
	<div class="guide-area">
		현재 {{user.name}}님이 {{}}를 사용중입니다.
	</div>
</template>

<script>
export default {
	name: 'guideArea',
	props: {
		user: null
	}
}
</script>

<style scoped>
.guide-area {
	margin: 50px 0 0;
	font-size: 16px;
	text-align: center;
}
</style>