<template>
  <span
    @click="select"
    @change="toggle"
    :class="{active: isChecked, inactive: !isChecked}"
  >{{value}}</span>
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
      //Utilized by toggle found below to manage the style class
      isChecked: this.checked
    };
  },
  computed: {
    itemValues: function() {
      return this.$store.getters.isChecked;
    },
    //Utilize some kind of getter wizardry to update the inactive/ active style class
    toggle: function() {
      if (this.itemValues.indexOf(this.value) == -1) {
        return (this.isChecked = false);
      } else {
        return (this.isChecked = true);
      }
    }
  },
  methods: {
    select: function() {
      //Toggles button style <--now a reactive prop based on state! WOO
      //this.isChecked = !this.isChecked;
      //sends data from props to store to update the item being edited

      this.$store.commit("buildItem", { key: this.id, value: this.value });
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