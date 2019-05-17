<template>
  <span @click="select" :class="{active: isChecked, inactive: !isChecked}">{{value}}</span>
</template>

<script>
export default {
  props: {
    value: String,
    checked: Boolean,
    id: String
  },
  name: "OButton",
  data: function() {
    return {
      //This is used in select function
      isChecked: this.checked
    };
  },
  methods: {
    select: function() {
      //Toggles button style
      this.isChecked = !this.isChecked;
      this.$store.commit("toggleChecked", {
        key: this.id,
        value: this.value
      });
    }
  }
};
</script>

<style>
.inactive {
  margin: 5px;
  position: relative;
  display: inline-block;
  font-size: 10px;
  line-height: 20px;
  text-transform: capitalize;
  background-color: blue;
  border: solid 1px blue;
  border-radius: 5px;
  color: white;
  height: 60px;
  width: 60px;
  cursor: pointer;
}

.active {
  margin: 5px;
  position: relative;
  display: inline-block;
  font-size: 10px;
  line-height: 20px;
  text-transform: capitalize;
  background-color: orangered;
  border: solid 1px orangered;
  border-radius: 5px;
  color: white;
  height: 60px;
  width: 60px;
  cursor: pointer;
}
</style>