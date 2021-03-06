import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sizes: {
      small: {
        value: '10"',
        checked: false
      },
      medium: {
        value: '12"',
        checked: false
      },
      large: {
        value: '14"',
        checked: false
      },
      xLarge: {
        value: '16"',
        checked: false
      }
    },
    flavors: {
      HT: { value: "Handtossed", checked: false },
      TC: {
        value: "Thin Crust",
        checked: false
      },
      PAN: { value: "Buttery Pan", checked: false },
      BRKLYN: { value: "Brooklyn", checked: false }
    },
    toppings: {
      PizzaSauce: {
        value: "Pizza Sauce",
        checked: false
      },
      PizzaCheese: {
        value: "Pizza Cheese",
        checked: false
      },
      Pepperoni: { value: "Pepperoni", checked: false },
      Ham: {
        value: "Ham",
        checked: false
      }
    },
    //for order info
    currentOrder: {
      customer: {
        name: "",
        address: "",
        suite: "",
        city: "",
        state: "",
        zipcode: ""
      },
      orderItems: []
    },
    item: {
      current: true,
      qty: 1,
      size: "",
      flavor: "",
      toppings: [""]
    }
  },

  mutations: {
    buildItem: function(state, payload) {
      switch (payload.key) {
        case "size":
          if (state.item.size != payload.value) {
            state.item.size = payload.value;
          } else {
            state.item.size = "";
          }
          break;
        case "flavor":
          if (state.item.flavor != payload.value) {
            state.item.flavor = payload.value;
          } else {
            state.item.flavor = "";
          }
          break;
        case "topping":
          if (state.item.toppings.indexOf(payload.value) == -1) {
            state.item.toppings.push(payload.value);
          } else {
            let index = state.item.toppings.indexOf(payload.value);
            state.item.toppings.splice(index, 1);
            break;
          }
      }
    },
    newItem: function(state) {
      state.currentOrder.orderItems.push(state.item);
    }
  },
  getters: {
    //This right here is some kinda magic.  This allows the active/inactive class of an order button "OButton.vue" to be managed by the state of item.
    isChecked: function(state) {
      let currentItemVals = Object.values(state.item) + [state.item.toppings];
      return currentItemVals;
    },
    currentItem: function(state) {
      //TODO: Chain this with isChecked to update an item based on the truthiness of the current key
      return state.currentOrder.orderItems.filter(
        item => (item.current = true)
      );
    }
  },
  actions: {}
});
