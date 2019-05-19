<template>
  <div class="pizza-ui-wrapper">
    <div class="container">
      <h4>Sizes</h4>
      <div class="button-wrapper">
        <OButton
          id="size"
          v-for="size in sizes"
          :key="size.value"
          :value="size.value"
          :checked="size.checked"
        />
      </div>
    </div>

    <div class="container">
      <h4>Crust</h4>
      <div class="button-wrapper">
        <OButton
          id="flavor"
          v-for="flavor in flavors"
          :key="flavor.value"
          :value="flavor.value"
          :checked="flavor.checked"
        />
      </div>
    </div>

    <div class="container">
      <h4>Toppings</h4>
      <div class="button-wrapper">
        <OButton
          id="topping"
          v-for="topping in toppings"
          :key="topping.value"
          :value="topping.value"
          :checked="topping.checked"
        />
      </div>
    </div>
  </div>
</template>

<script>
import OButton from "./uielements/OButton.vue";

export default {
  name: "Pizza",
  components: {
    OButton
  },
  computed: {
    sizes: function() {
      return this.$store.state.sizes;
    },
    flavors: function() {
      return this.$store.state.flavors;
    },
    toppings: function() {
      return this.$store.state.toppings;
    }
  },
  methods: {}
};
</script>

<style>
h4 {
  margin-top: 0px;
  margin-bottom: 0px;
  background-color: navy;
  color: white;
  padding: 5px;
}

.container {
  border: solid 1px rgb(12, 12, 85);
  border-radius: 5px;
  background-color: palegoldenrod;
  margin: 5px 0px 5px 0px;
}

.button-wrapper {
  display: flex;
  flex-direction: row;
}

.pizza-ui-wrapper {
  padding: 25px;
  text-align: start;
}
</style>
