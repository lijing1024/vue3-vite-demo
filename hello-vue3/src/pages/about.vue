<template>
	<div>
		<h1>这是关于页面</h1>
		<Rate :value="score" @update-rate="update"></Rate>
		<Rate :value="score" theme="green" @update-rate="update"></Rate>
		<Rate :value="score" theme="yellow" @update-rate="update"></Rate>
	</div>
</template>

<script setup>
	import Rate from '../components/Rate.vue';
	import { ref } from 'vue';
	let score = ref(3.5);
	function update(num) {
		score.value = num;
	}
</script>

<style  scoped>
</style>