<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Shopping cart order</h1>
    Order Number: {{ orderNumber }}
    <div v-if="orderItemDtos.length > 0">
      <table>
        <tr>
          <th>ITEM ID</th>
          <th>ITEM NAME</th>
          <th>ITEM PRICE</th>
          <th>ITEM QUANTITY</th>
          <th>ITEM SUM</th>
        </tr>
        <tr v-for="row in orderItemDtos">
          <td>{{ row.itemId }}</td>
          <td>{{ row.itemName }}</td>
          <td>{{ row.itemPrice }}</td>
          <td>{{ row.quantity }}</td>
          <td>{{ row.sum }}</td>
        </tr>
      </table>
    </div>
<!--    <button v-on:click=" calculateOrderItemsTotalSum">Arvuta itemide sum</button>-->



<!--&lt;!&ndash;    <div>&ndash;&gt;-->
<!--&lt;!&ndash;      <ul v-model="select">&ndash;&gt;-->
<!--&lt;!&ndash;      <option v-for="row in orderItemDtos" :value="row"> {{ row.sum }}</option>&ndash;&gt;-->
<!--&lt;!&ndash;      </ul>&ndash;&gt;-->
<!--&lt;!&ndash;      <span>ITEMIDE SUM: {{ select.sum }} </span>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--&lt;!&ndash;    <br>&ndash;&gt;-->

<!--&lt;!&ndash;    &ndash;&gt;-->
    <br>
    <select v-model="selected">
      <option disabled value="">Vali delivery method</option>
      <option v-for="row in deliveryMethods" :value="row ">{{ row.name }}, {{ row.price }} eur,
        {{ row.deliveryTime }}</option>
    </select>
    <br>
    <span>Delivery method: {{ selected.name }} {{ selected.deliveryTime }} </span>
    <br>




    <br>
    <select v-model="selectedP">
      <option disabled value="">Vali payment method</option>
      <option v-for="row in paymentMethods" :value="row.paymentType ">{{ row.paymentType }}</option>
    </select>
    <br>
    <span>Payment method: {{ selectedP }} </span>
    <br>




    <br>
    <span>TOTAL PRICE: {{ totalPrice }} </span>
    <br>
    <button v-on:click=" calculateTotalPrice">KINNITA JA GO...</button>
  </div>
</template>


<style>
table {
  margin-left: auto;
  margin-right: auto;
}

td {
  padding: 7px;
  border-bottom: solid;
  border-width: 1px;
  border-color: lightgray;
}

th {
  padding: 10px;
  background-color: lightgray;
  border: solid;
  border-width: 1px;
  border-color: lightgray;
}
</style>
<script>
export default {
  name: "Order",
  data: function () {
    return {
      orderId: '',
      orderNumber: '',
      userId: sessionStorage.getItem("UserIdToken"),
      orderItemsByOrderId: this.$route.query.orderItemId,
      order: {},

      orderItemSum: '',

      orderItemDtos: [],
      paymentMethods: [],
      deliveryMethods: [],

      totalPrice: 0,
      price: 0,
      totalSum: 0,
      select: "",
      sum: 0,

      selected: "",
      selectedP: ""

    }
  },
  methods: {

    calculateOrderItemsTotalSum: function () {
      this.totalSum = 0;
      this.orderItemDtos.forEach(row => this.totalSum += row.sum)
      this.totalSum += this.select.sum;
    },

    calculateTotalPrice: function () {
      this.totalPrice = 0;
      this.orderItemDtos.forEach(row => this.totalPrice += row.sum)
      this.totalPrice += this.selected.price;
    },


    getShoppingCart: function () {
      this.$http.get("/get/shopping/cart", {
            params: {
              userId: this.userId
            }
          }
      ).then(response => {
        this.paymentMethods = response.data.paymentMethodDtos;
        this.deliveryMethods = response.data.deliveryMethodDtos;
        this.orderItemDtos = response.data.orderItemDtos;
        this.orderId = response.data.orderId;
        this.orderNumber = response.data.orderNumber;
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    // postTotalPrice: function () {
    //   this.$http.post("/post/total/price", this.totalPrice
    //   ).then(response => {
    //     console.log(response.data)
    //   }).catch(error => {
    //     console.log(error)
    //   })
    // },


    redirectToConfirmPage: function (orderId) {
      this.$router.push({name: 'Confirm', query: {id: orderId}})
    },

  },


  beforeMount() {
    this.getShoppingCart()
  }
}
</script>

<!--<style scoped>-->

<!--</style>-->