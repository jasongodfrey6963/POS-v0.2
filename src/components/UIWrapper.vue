<template>
  <div class="grid">
    <div class="info">
      <OrderInfo/>
    </div>
    <div class="pizza">
      <Pizza/>
    </div>
    <div class="select">
      <ScreenSelect/>
    </div>
  </div>
</template>

<script>
import OrderInfo from "./OrderInfo.vue";
import Pizza from "./Pizza.vue";
import ScreenSelect from "./ScreenSelect.vue";
export default {
  name: "UIWrapper",
  components: { OrderInfo, Pizza, ScreenSelect }
};
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: 15% 70% 15%;
  grid-gap: 0px;
  grid-template-rows: auto;
  height: 100%;
  align-items: stretch;
}

.info {
  background-color: #f0f4c3;
}

.pizza {
  background-color: #bbdefb;
}

.select {
  background-color: #f0f4c3;
}
</style>
