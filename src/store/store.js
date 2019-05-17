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
      qty: "",
      size: "",
      flavor: "",
      toppings: []
    }
  },

  mutations: {
    toggleChecked: function(state) {
      if (state.currentOrder.orderItems.length === 0) {
        state.currentOrder.orderItems.push(state.item);
        console.log(...state.currentOrder.orderItems);
      }
    },
    createPizza: function(state, payload) {
      state.currentOrder.orderItems.push(state.item);
    }
  },
  actions: {}
});
