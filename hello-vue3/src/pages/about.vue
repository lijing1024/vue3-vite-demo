<template>
	<div>
		<h1>这是关于页面</h1>
		<Rate v-model="score" @update-rate="update">
			<img src="../assets/logo.png" alt="logo" />
		</Rate>
		<Rate v-model="score" theme="green" @update="update"></Rate>
		<Rate v-model="score" theme="yellow" @update="update"></Rate>
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