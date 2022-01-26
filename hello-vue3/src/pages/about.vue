<template>
	<div>
		<h1>这是关于页面</h1>
		<Rate :value="score"></Rate>
	</div>
</template>

<script setup>
	import Rate from '../components/Rate.vue';
	import { ref } from 'vue';
	let score = ref(3);
</script>

<style  scoped>
</style>