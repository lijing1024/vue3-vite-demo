<template>
	<div>
		<h1>这是关于页面</h1>
		<Rate v-model="score" @update-rate="update">
			<img src="../assets/logo.png" alt="logo" />
		</Rate>
		<Rate v-model="score" theme="green" @update="update"></Rate>
		<Rate v-model="score" theme="yellow" @update="update"></Rate>
		<Heading :level="1">hello, 这里是一级标题</Heading>
		<Heading :level="3">hello, 这里是三级标题</Heading>
	</div>
</template>

<script setup>
	import Rate from '../components/Rate.vue';
	import Heading from '../components/Heading.jsx';
	console.log(Heading);
	import { ref } from 'vue';
	let score = ref(3.5);
	function update(num) {
		score.value = num;
	}
</script>

<style  scoped>
</style>