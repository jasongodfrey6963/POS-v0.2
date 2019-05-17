<template>
  <div class="customer-info">
    <p class="info-1">Jason</p>
    <p class="info-2">1600 Rice Rd</p>
    <p class="info-3">Apt 1016</p>
    <p class="info-4">Carryout</p>
  </div>
</template>

<script>
export default {
  name: "CustomerInfo",
  data: function() {
    return {
      name: "",
      address: "",
      suite: "",
      zipcode: "",
      orderType: ""
    };
  }
};
</script>

<style>
.customer-info {
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 12px;
  text-align: start;
  padding-top: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid gray;
}

.customer-info p {
  margin: 5px 0px 5px 10px;
}

.info-2 .info-3 {
  flex-basis: 50%;
}
</style>
