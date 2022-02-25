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
          <th></th>
          <th></th>
        </tr>
        <tr v-for="(row, index) in orderItemDtos" @key="index">
          <td>{{ row.itemId }}</td>
          <td>{{ row.itemName }}</td>
          <td>{{ row.itemPrice }}</td>
          <td><input style="text-align: center" :value="row.quantity"
                     @input="event => {row.quantity = event.target.value}"></td>

          <td>{{ row.sum = row.quantity * row.itemPrice }}</td>

          <td id="itemButton" v-on:click="calculateItemSum">
            <button> Uuenda valikut</button>
          </td>
          <td id="deleteButton" v-on:click="deleteOrderItem(index)">
            <button> Kustutada item</button>
          </td>
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
    <select v-model="selectedDeliveryMethod">
      <option disabled value="">Vali delivery method</option>
      <option v-for="row in deliveryMethods" :value="row ">{{ row.name }}, {{ row.price }} eur,
        {{ row.deliveryTime }}
      </option>
    </select>
    <br>
    <span>Delivery method: {{ selectedDeliveryMethod.name }} {{ selectedDeliveryMethod.deliveryTime }} </span>
    <br>
    <br>
    <select v-model="selectedPaymentMethod">
      <option disabled value="">Vali payment method</option>
      <option v-for="row in paymentMethods" :value="row">{{ row.paymentType }}</option>
    </select>
    <br>
    <span>Payment method: {{ selectedPaymentMethod.paymentType }} </span>
    <br>
    <br>
    <span>TOTAL PRICE: {{ totalPrice }} </span>
    <br>
    <button v-on:click=" calculateTotalPrice">ARVUTA TOTAL PRICE</button>
    <br>
    <br>
    <br>
    <button v-on:click="postOrderAndRedirectHome">KINNITA ORDERIT JA MINE HOME PAGILE</button>
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

      order: {},

      orderItemSum: '',
      orderItemDtos: [],
      paymentMethods: [],
      deliveryMethods: [],

      totalPrice: 0,
      price: 0,
      itemsSum: 0,

      orderDate: "",
      orderStatus: "",
      selectedDeliveryMethod: "",
      selectedPaymentMethod: ""

    }
  },
  methods: {

    calculateTotalPrice: function () {
      this.totalPrice = 0;
      if (this.selectedDeliveryMethod === "") {
        alert("Please, selected delivery method")
        return
      }
      this.orderItemDtos.forEach(row => this.totalPrice += row.sum)
      this.totalPrice += this.selectedDeliveryMethod.price;
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
    },

    deleteOrderItem: function (index) {
     this.orderItemDtos.splice(index,1)

    },


    postOrderAndRedirectHome: function () {
      let orderConfirmationRequestDto = {
        // order: {
        id: this.orderId,
        userId: this.userId,
        paymentMethodDto: this.selectedPaymentMethod,
        orderNumber: this.orderNumber,
        orderDate: this.orderDate,
        orderStatus: this.orderStatus,
        totalPrice: this.totalPrice,
        // },
        orderItemDto: this.orderItemDtos,
        deliveryMethodDto: this.selectedDeliveryMethod,
      }
      this.$http.post("/post/order/to/orders/in/progress", orderConfirmationRequestDto
      ).then(response => {
        alert("Order educalt kinnitatud!")
        console.log(response.data)
        this.$router.push({name: 'Home'})
      }).catch(error => {
        alert(error.response.data.message)
        console.log(error)
      })
    },


    // redirectToConfirmPage: function (orderId) {
    //   this.$router.push({name: 'Confirm', query: {name: name}})
    // },

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

<!--<input type="checkbox"id="itemButton" v-on:click="calculateItemSum">-->