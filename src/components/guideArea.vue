<template>
	<div class="guide-area">
		현재 {{}}님이 {{}}를 사용중입니다.
	</div>
</template>

<script>
export default {
	name: 'guideArea',
	props: {
		msg: String
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