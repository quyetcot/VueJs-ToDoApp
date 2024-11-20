<template>
  <div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>

<style>
.center-container {
  display: flex;
  justify-content: center;
  flex-direction: column; /* Căn giữa theo chiều ngang */
  align-items: center; /* Căn giữa theo chiều dọc */
}

/* h1 {
  margin: 0;
} */

</style>
