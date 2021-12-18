<template>
  <div class="wrapper">
    <h1 class="title">To-Do List</h1>
    <h1 class="title-date">{{ date }}</h1>
    <form @submit.prevent="addNewTodo" class="inputField">
      <input type="text" v-model="newTodo" />
      <button><i class="fas fa-plus"></i></button>
    </form>
    <ul class="todoList">
      <li
        v-for="(todo, index) in todos"
        :key="todo.id"
        @click="toggleDone(todo)"
        :class="{ done: todo.done }"
      >
        {{ todo.content }}
        <span class="icon" @click="removeTodo(index)">
          <i class="fas fa-trash"></i>
        </span>
      </li>
    </ul>
    <div class="footer">
      <button @click="removeAll">Clear All</button>
      <button @click="markAllDone">Mark All Done</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const date = new Date().toLocaleDateString();
    const newTodo = ref("");
    const todosData = JSON.parse(localStorage.getItem("todos"));
    const todos = ref(todosData);

    function saveData() {
      const storageData = JSON.stringify(todos.value);
      localStorage.setItem("todos", storageData);
    }

    function addNewTodo() {
      if (newTodo.value) {
        todos.value.push({
          done: false,
          content: newTodo.value,
        });
        newTodo.value = "";
      }
      saveData();
    }

    function toggleDone(todo) {
      todo.done = !todo.done;
      saveData();
    }

    function removeTodo(index) {
      todos.value.splice(index, 1);
      saveData();
    }

    function removeAll() {
      todos.value = [];
      saveData();
    }

    function markAllDone() {
      todos.value.forEach((todo) => (todo.done = true));
      saveData();
    }

    return {
      date,
      newTodo,
      addNewTodo,
      todos,
      toggleDone,
      removeTodo,
      removeAll,
      markAllDone,
      saveData,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
::selection {
  color: #ffff;
  background: rgb(142, 73, 232);
}
body {
  font-family: sans-serif;
  padding-top: 1em;
  padding-bottom: 1em;
  font-size: 2em;
  width: 60%;
  margin: 0 auto;
  height: 100vh;
  background: linear-gradient(to bottom, #aceede 0%, #2b4b92 100%);
}
.wrapper {
  background: white;
  max-width: 800px;
  width: 100%;
  margin: 120px auto;
  padding: 25px;
  border-radius: 5px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
}
.inputField {
  margin: 20px 0;
  width: 100%;
  display: flex;
  height: 45px;
}
.inputField input {
  width: 95%;
  height: 100%;
  outline: none;
  border-radius: 3px;
  border: 1px solid #ccc;
  font-size: 17px;
  padding-left: 15px;
  transition: all 0.3s ease;
}
.inputField input:focus {
  border-color: #8e49e8;
}
.inputField button {
  width: 50px;
  height: 100%;
  border: none;
  background: #8e49e8;
  margin-left: 5px;
  cursor: pointer;
  color: white;
  font-size: 21px;
  outline: none;
  border-radius: 3px;
  opacity: 0.6;
}
.wrapper .todoList {
  max-height: 250px;
  overflow-y: auto;
}
.todoList li {
  position: relative;
  list-style: none;
  height: 45px;
  line-height: 45px;
  margin-bottom: 8px;
  background: #f2f2f2;
  border-radius: 3px;
  padding: 0 15px;
  cursor: pointer;
  overflow: hidden;
  font-size: 25px;
  font-weight: 500;
}
.todoList li .icon {
  position: absolute;
  right: -45px;
  background: #e74c3c;
  width: 45px;
  text-align: center;
  color: #fff;
  border-radius: 0 3px 3px 0;
  cursor: pointer;
  transition: all 0.2s ease;
}
.todoList li:hover .icon {
  right: 0px;
}
.title {
  text-align: center;
  font-size: 30px;
  font-weight: 600;
}
.title-date {
  text-align: center;
  font-size: 20px;
  font-weight: 600;
}
.wrapper .footer {
  display: flex;
  width: 100%;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
}
.footer button {
  padding: 6px 10px;
  border-radius: 3px;
  border: none;
  outline: none;
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  margin-left: 5px;
  background: #8e49e8;
  cursor: pointer;
  user-select: none;
  opacity: 0.6;
  transition: all 0.3s ease;
}
.footer button.active {
  opacity: 1;
  pointer-events: auto;
}
.done {
  text-decoration: line-through;
  text-decoration-color: black;
  color: rgb(142, 73, 232);
  text-decoration-thickness: 4px;
}
</style>
