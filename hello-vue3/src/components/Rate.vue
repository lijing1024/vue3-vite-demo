<template>
	<div>
		{{ rate }}
	</div>
</template>
<script setup>
	import { defineProps, computed } from 'vue';
	let prop = defineProps({
		value: Number,
	});
	let rate = computed(() => {
		return '★★★★★☆☆☆☆☆'.slice(5 - prop.value, 10 - prop.value);
	});
</script>




