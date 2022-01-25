<template>
	<div>
		<h1 @click="add">{{ count }}</h1>
		<input type="text" v-model="title" @keydown.enter="addTodo" />
		<button v-if="active < all" @click="clear">清空</button>
		<ul v-if="todos.length">
			<li v-for="(todo, index) in todos" :key="index">
				<input type="checkbox" v-model="todo.done" />
				<span :class="{ done: todo.done }">{{ todo.title }}</span>
			</li>
		</ul>
		<div v-else>暂无数据</div>
		<div>
			全选<input type="checkbox" v-model="allDone" /> <span>{{ active }}/{{ all }}</span>
		</div>
	</div>
</template>

<script setup>
	import { ref, computed } from 'vue';
	// 累加
	let count = ref(1);
	function add() {
		count.value++;
	}
	let { title, todos, addTodo, clear, active, all, allDone } = useTodos();
	// todo
	function useTodos() {
		let title = ref('');
		let todos = ref([
			{
				title: '学习vue3',
				done: true,
			},
		]);
		function addTodo() {
			todos.value.push({
				title: title.value,
				done: false,
			});
		}
		function clear() {
			todos.value = todos.value.filter((v) => !v.done);
		}
		let all = computed(() => {
			return todos.value.length;
		});

		let active = computed(() => {
			return todos.value.filter((v) => v.done).length;
		});
		let allDone = computed({
			get: function () {
				return active.value === todos.value.length;
			},
			set: function (value) {
				todos.value.forEach((v) => {
					v.done = value;
				});
			},
		});
		return { title, todos, addTodo, clear, active, all, allDone };
	}
</script>
<style>
	h1 {
		color: red;
	}
	.done {
		color: grey;
		text-decoration: line-through;
	}
</style>

