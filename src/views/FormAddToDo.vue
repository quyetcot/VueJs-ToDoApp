<template>
  <nav-bar />
  <div class="form-container">
    <h1>Add To Do</h1>
    <form action="" @submit.prevent="addTodo" class="form">
      <div class="field">
        <label class="label">To Do</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Type To Do"
            v-model="newTodo"
          />
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button type="submit" class="button is-link">Submit</button>
        </div>
        <div class="control">
          <button class="button is-link is-light">Cancel</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    "nav-bar": Navbar,
  },
  data() {
    return {
      newTodo: "",
    };
  },
    methods: {
        addTodo() {
        if (this.newTodo) {
            const newTodo = {
            text: this.newTodo,
            completed: false,
            };
            try {
            this.$store.dispatch("postTodo", newTodo);
            alert('Thêm thành công!!')
            this.$router.push("/list");
            } catch (error) {
                alert("Thêm thất bại")
            console.error(error);
            }
        }
        },
    },
  computed: {
    getTodoList() {
      return this.$store.getters.getTodoList;
    },
  },
  created() {
    this.$store.dispatch("getTodoList");
  },
};
</script>
<style scoped>
.form-container {
  display: flex;
  flex-direction: column; /* Chia theo chiều dọc */
  justify-content: center; /* Căn giữa theo chiều dọc */
  align-items: center; /* Căn giữa theo chiều ngang */
}
h1 {
  font-size: 2em;
  margin-bottom: 20px; /* Thêm khoảng cách giữa tiêu đề và form */
}
.form {
  width: 50%; /* Đặt chiều rộng form là 50% */
  padding: 20px; /* Thêm padding cho form để không bị chật */
  background-color: #f9f9f9; /* Tùy chỉnh màu nền */
  border-radius: 8px; /* Thêm bo góc */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Thêm bóng đổ cho form */
}
.toast {
  border-radius: 10px;
  font-weight: bold;
  background-color: #4caf50; /* Màu nền cho thông báo thành công */
}
.toast-error {
  background-color: #f44336; /* Màu nền cho thông báo lỗi */
}
</style>
