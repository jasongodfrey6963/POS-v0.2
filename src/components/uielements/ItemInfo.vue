<template>
  <div class="item-wrapper">
    <div class="row">
      <p>{{qty}}</p>
      <p>{{size}}</p>
      <p>{{flavor}}</p>
    </div>
    <div class="column">
      <p v-for="topping in toppings" :key="topping.index">{{topping}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemInfo",
  props: {
    qty: Number,
    size: String,
    flavor: String,
    toppings: Array
  }
};
</script>

<style>
.item-wrapper {
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-weight: bold;
  padding-top: 10px;
  text-align: start;
  margin-left: 10px;
}
.row {
  display: flex;
  flex-direction: row;
}

.row p {
  margin: 5px 5px 5px 0px;
}

.column {
  margin: 5px 5px 0px 0px;
}
</style>
