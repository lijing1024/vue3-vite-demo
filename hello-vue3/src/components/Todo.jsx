import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup(props) {
    let title = ref('');
    let todos = ref([
      { title: '学习vue3', done: false },
      { title: '睡觉', done: true },
    ]);
    function addTodo() {
      todos.value.push({
        title: title.value
      })
      title.value = '';
    }
    return () => <div>
      <input type="text" vModel={title.value} />
      <button onClick={addTodo}>新增</button>
      <ul>
        {
          todos.value.length ? todos.value.map((todo) => {
            return <li>{todo.title}</li>
          }) : <li>暂无数据</li>
        }
      </ul>
    </div>
  }
})


