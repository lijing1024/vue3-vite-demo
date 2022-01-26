<template>
	<div :style="fontstyle">
		{{ rate }}
	</div>
</template>
<script setup>
	import { defineProps, computed } from 'vue';
	let prop = defineProps({
		value: Number,
		theme: { type: String, default: 'orange' },
	});
	let rate = computed(() => {
		return '★★★★★☆☆☆☆☆'.slice(5 - prop.value, 10 - prop.value);
	});
	const themeObj = {
		black: '#00',
		white: '#fff',
		red: '#f5222d',
		orange: '#fa541c',
		yellow: '#fadb14',
		green: '#73d13d',
		blue: '#40a9ff',
	};
	let fontstyle = computed(() => {
		return `color:  ${themeObj[prop.theme]}`;
	});
</script>




