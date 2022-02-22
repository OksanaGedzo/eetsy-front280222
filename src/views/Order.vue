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
          <th>/th>
        </tr>
        <tr v-for="row in orderItemDtos">
          <td>{{ row.itemId }}</td>
          <td>{{ row.itemName }}</td>
          <td>{{ row.itemPrice }}</td>
          <td><input style="text-align: center" :value="row.quantity"
                     @input="event => {row.quantity = event.target.value; calculateItemSum()}"></td>
<!--          @input="event => {row.quantity = event.target.value; (document.getElementById('itemButton').style.display = "")}"></td>&ndash;&gt;-->
          <td>{{ row.sum = row.quantity * row.itemPrice }}</td>
          <td id="itemButton" v-on:click="calculateItemSum" style="display: none"><button> confirm</button></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>Sum {{ itemsSum }} eur</td>
        </tr>
      </table>
    </div>


    <br>
    <select v-model="selected">
      <option disabled value="">Vali delivery method</option>
      <option v-for="row in deliveryMethods" :value="row ">{{ row.name }}, {{ row.price }} eur,
        {{ row.deliveryTime }}
      </option>
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
    <button v-on:click=" calculateTotalPrice">ARVUTA...</button>
    <br>
    <br>
    <br>{{orderFinal}}
    <br>
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
      orderFinal: '',

      orderItemDtos: [],
      paymentMethods: [],
      deliveryMethods: [],

      totalPrice: 0,
      price: 0,
      itemsSum: 0,
      select: "",
      // sum: 0,

      selected: "",
      selectedP: ""

    }
  },
  methods: {

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
        this.calculateItemSum()
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    calculateItemSum: function () {
      this.itemsSum = 0;
      this.orderItemDtos.forEach(row => this.itemsSum += row.sum)
      console.log(this.itemsSum)
    },

    Post: function () {
      let orderFinal = {
        orderId: this.orderId,
        userId: this.userId,
        paymentMethods: this.paymentMethods,
        orderNumber: this.orderNumber,
        orderDate: this.data.timestamp,
        orderStatus: this.orderStatus,
        totalPrice: this.totalPrice,
        orderItemsByOrderId: this.orderItemsByOrderId,
        deliveryMethods: this.this.deliveryMethods,

      }
      this.$http.post("/put/order/to/orders/in/progress", orderFinal
      ).then(response => {
        this.order(this.orderId)
        alert("Order educalt kinnitatud!")
        console.log(response.data)
      }).catch(error => {
        alert(error.response.data.message)
        console.log(error)
      })
    },

    redirectToConfirmPage: function (orderId) {
      this.$router.push({name: 'Confirm', query: {id: orderId}})
    },

  },
  beforeMount() {

  },
  created() {
    this.getShoppingCart()
  }
}
</script>

<!--<style scoped>-->

<!--</style>-->