<template>
  <div>
    <button @click="toggle">开启全屏</button>
    <p ref="el">
      这里是全屏内容这里是全屏内容这里是全屏内容这里是全屏内容这里是全屏内容这里是全屏内容这里是全屏内容这里是全屏内容这里是全屏内容这里是全屏内容这里是全屏内容这里是全屏内容这里是全屏内容这里是全屏内容这里是全屏内容这里是全屏内容这里是全屏内容这里是全屏内容
    </p>
    <h1 @click="add">{{ count }}</h1>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button v-if="active < all" @click="clear">清空</button>
    <ul v-if="todos.length">
      <transition-group name="flip-list">
        <li v-for="(todo, index) in todos" :key="index">
          <input type="checkbox" v-model="todo.done" />
          <span :class="{ done: todo.done }">{{ todo.title }}</span>
        </li>
      </transition-group>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选<input type="checkbox" v-model="allDone" />
      <span>{{ active }}/{{ all }}</span>
    </div>
    <transition name="modal">
      <div class="info-wrapper" v-if="showModal">
        <div class="info">亲，你啥都没有输入！</div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { useStorage } from "../utils/storage.js";
import { ref, computed, reactive, watchEffect } from "vue";
import { useFullscreen } from "@vueuse/core";
const el = ref(null);
const { toggle, isFullscreen } = useFullscreen(el);
// 累加
let count = ref(1);
let color = ref(1);
function add() {
  count.value++;
  color.value = Math.random() > 0.5 ? "red" : "blue";
}
let { title, todos, addTodo, clear, active, all, allDone } = useTodos();
// todo
let showModal = ref(false);
function useTodos() {
  let title = ref("");
  // let todos = ref(JSON.parse(localStorage.getItem('todos') || '[]'));
  // watchEffect(() => {
  // 	localStorage.setItem('todos', JSON.stringify(todos.value));
  // });
  let todos = useStorage("todos");
  function addTodo() {
    if (!title.value) {
      showModal.value = true;
      setTimeout(() => {
        showModal.value = false;
      }, 3000);
      return;
    }
    todos.value.push({
      title: title.value,
      done: false,
    });
    title.value = "";
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
// 使用reactive
let obj = reactive({
  count: 1,
});
let double = computed(() => obj.count * 2);
obj.count = 2;

watchEffect(() => {
  console.log("数据被修改了", obj.count, double.value);
});
</script>
<style scoped>
/* 在scoped中使用:global来设置全局css */
/* :global(h1) {
	      color: red;
	    } */
h1 {
  color: v-bind(color);
}
.done {
  color: grey;
  text-decoration: line-through;
}
.info-wrapper {
  position: fixed;
  top: 20px;
  width: 200px;
}
.info {
  padding: 20px;
  color: white;
  background: #d88986;
}
.modal-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-enter-active {
  transition: all 1s ease;
}
.modal-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-leave-active {
  transition: all 0.5 ease;
}
.flip-list-move {
  transition: transform 0.8s ease;
}
.flip-list-enter-active,
.flip-list-leave-active {
  transition: all 1s ease;
}
.flip-list-enter-from,
.flip-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>

