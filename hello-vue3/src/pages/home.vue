<template>
	<div>
		<h1>这是首页</h1>
		<Todolist />
	</div>
</template>
<script setup>
	import Todolist from '../components/Todolist.vue';
	import * as echarts from 'echarts/core';
	import { BarChart } from 'echarts/charts';
	// import { useMouse } from '../utils/mouse.js';
	// let { x, y } = useMouse();
	// console.log(x.value, y.value);
</script>
<style>
</style>