<template>
  <div>
    <cust-info></cust-info>
    <item-info v-bind="item"></item-info>
  </div>
</template>

<script>
import CustomerInfo from "./uielements/CustomerInfo.vue";
import ItemInfo from "./uielements/ItemInfo.vue";
export default {
  name: "OrderInfo",
  components: {
    "cust-info": CustomerInfo,
    "item-info": ItemInfo
  },
  computed: {
    customer: function() {
      return this.$store.state.currentOrder.customer;
    },
    /*orderItems: function() {
      return this.$store.state.currentOrder.orderItems;
    }*/
    item: function() {
      return this.$store.state.item;
    }
  }
};
</script>

<style>
</style>
