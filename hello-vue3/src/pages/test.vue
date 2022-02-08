<template>
	<div>
		<!-- <div class="box" :style="{ width: width + 'px' }"></div> -->
		<button @click="change">点击</button>
		<transition name="fade">
			<h1 v-if="showTitle">这里是标题</h1>
		</transition>
		<div @click="add">
			{{ count }}
		</div>
	</div>
</template>

<script setup>
	import { computed, ref } from 'vue';
	import { useStore } from 'vuex';

	let store = useStore();
	let count = computed(() => store.state.count);
	function add() {
		store.commit('add');
	}
	let width = ref(100);
	let showTitle = ref(true);
	function change() {
		width.value += 100;
		showTitle.value = !showTitle.value;
	}
</script>

<style scoped>
	.box {
		height: 100px;
		background: red;
		transition: width 1s linear;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s linear;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
</style>