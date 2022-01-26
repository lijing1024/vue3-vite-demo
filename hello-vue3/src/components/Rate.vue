<template>
	<div :style="fontstyle">
		<!-- {{ rate }} -->
		<div class="rate" @mouseout="mouseOut">
			<span @click="onRate(num)" @mouseover="mouseOver(num)" v-for="num in 5" :key="num"
				>☆</span
			>
			<span :style="fontwidth" class="hollow">
				<span @click="onRate(num)" @mouseover="mouseOver(num)" v-for="num in 5" :key="num"
					>★</span
				>
			</span>
		</div>
	</div>
</template>
<script setup>
	import { ref, defineProps, computed, defineEmits } from 'vue';
	let prop = defineProps({
		modelValue: Number,
		theme: { type: String, default: 'orange' },
	});
	// let rate = computed(() => {
	// 	return '★★★★★☆☆☆☆☆'.slice(5 - prop.modelValue, 10 - prop.modelValue);
	// });
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
	// 修改评分
	let width = ref(prop.modelValue);
	function mouseOver(i) {
		width.value = i;
	}
	function mouseOut() {
		width.value = prop.modelValue;
	}
	const fontwidth = computed(() => `width:${width.value}em;`);
	// 通知父组件
	let emits = defineEmits(['update:modelValue']);
	function onRate(num) {
		emits('update:modelValue', num);
	}
</script>
<style scoped>
	.rate {
		position: relative;
		display: inline-block;
	}
	.rate > span {
		cursor: pointer;
	}
	.rate > span.hollow {
		position: absolute;
		display: inline-block;
		top: 0;
		left: 0;
		width: 0;
		overflow: hidden;
	}
</style>




