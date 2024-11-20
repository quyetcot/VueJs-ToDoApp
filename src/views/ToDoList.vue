<template>
  <Navbar />
  <div class="center-container">
    <h1>TO DO LIST</h1>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Text</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todoList" :key="todo.id" :class="!todo.completed ? 'has-background-danger':'has-background-success' ">
          <td>{{ todo.id }}</td>
          <td>{{ todo.text }}</td>
          <td>{{ todo.completed ? "Đã hoàn thành" : "Chưa hoàn thành" }}</td>
          <td>
            <button @click="updateStatus(todo.id)" class="button">
              {{ !todo.completed ? "Hoàn thành" : "Hủy" }}
            </button>
            <button @click="deleteTodo(todo.id)" class="button is-danger">
              Xóa
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  computed: {
    todoList() {
      return this.$store.getters.getTodoList;
    },
  },
  methods: {
    deleteTodo(id) {
      if (confirm("Bạn có chắc chắn muốn xóa không ???")) {
        this.$store.dispatch("deleteTodo", id);
        alert("Xóa thành công!!!");
      }
    },
    updateStatus(id) {
      this.$store.dispatch("updateStatus", id);
    },
  },
  created() {
    this.$store.dispatch("getTodoList");
  },
};
</script>
<style>
h1 {
  font-size: 2em;
  margin-bottom: 20px;
}
</style>
