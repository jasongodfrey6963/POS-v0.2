<template>
  <div class="item-wrapper">
    <div class="row">
      <p>1</p>
      <p>12"</p>
      <p>Handtossed</p>
    </div>
    <p class="column">Pepperoni</p>
    <p class="column">Ham</p>
    <p class="column">Bacon</p>
  </div>
</template>

<script>
export default {
  name: "ItemInfo",
  props: {
    qty: String,
    size: String,
    flavor: String,
    toppings: String
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
