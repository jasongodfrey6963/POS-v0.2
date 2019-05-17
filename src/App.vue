<template>
  <div id="app">
    <UIWrapper/>
  </div>
</template>

<script>
import UIWrapper from "./components/UIWrapper.vue";

export default {
  name: "app",
  components: { UIWrapper }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
