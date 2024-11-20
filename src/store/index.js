import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state: {
    todoList: {},
  },
  getters: {
    getTodoList(state){
        return state.todoList;
    }
  },
  mutations: {
    SET_TODOLIST(state, payload) {
      state.todoList = payload;
    },
    ADD_TODO(state, payload){
      state.todoList.push(payload)
    },
    DELETE_TODO(state, id){
      state.todoList = state.todoList.filter(todo => todo.id !== id)
    },
    UPDATE_STATUS(state,id){
      state.todoList.forEach(todo => {
        if(todo.id == id){
          todo.completed =!todo.completed ;
        }
      });
    }
  },
  actions: {
    async getTodoList({ commit }) {
        try {
          const response = await axios.get('http://localhost:5000/api/todos');
        commit('SET_TODOLIST',response.data);
        } catch (error) {
          console.log(error);
        }
    },
    async postTodo({commit},newTodo){
       try {
        const response = await axios.post('http://localhost:5000/api/todos',newTodo);
        commit('ADD_TODO',response.data);
       } catch (error) {
        console.log(error);
       }
    },
    async updateStatus({commit},id){
      await axios.put(`http://localhost:5000/api/todos/${id}`);
      commit('UPDATE_STATUS', id);
    },
    async deleteTodo({commit},id){
      console.log(id);
    const response = await axios.delete(`http://localhost:5000/api/todos/${id}`);
    console.log('Todo đã xóa:', response);
     commit('DELETE_TODO',id)
    }
  },
});
export default store;
