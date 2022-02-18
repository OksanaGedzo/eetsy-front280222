<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Shopping cart order</h1>
    <div>
      Order Number: {{ orderNumber }}
      <br>
      <div v-for="row in order">
        OrderItemsByOrderId: {{ row.orderItemsByOrderId }}<br>
        ItemName: {{ row.itemName }}<br>
        Picture: {{ row.itemPictureId }}<br>
        Price: {{ row.itemPrice }}<br>
        Quantity: {{ row.orderItemQuantity }}<br>
        Total sum: {{ row.orderItemSum }}<br>
      </div>
      <br>
      TOTAL PRICE: {{ 'ghh  method  jj' }}
      <br>
      <br>
      <button v-on:click="redirectToConfirmPage(orderId.id)">Confirm the order</button>
      <br>
    </div>
  </div>
</template>


<script>
export default {
  name: "Order",
  data: function () {
    return {
      orderId: '',
      orderNumber: '',
      userId: '',
      orderItemsByOrderId: this.$route.query.orderItemId,
      order: {},
      deliveryMethods: '',
      orderItemSum: '',
      paymentMethods: ''
    }
  },
  methods: {
    getDeliveryMethods: function () {
      this.$http.get("/get/all/delivery/methods", {}
      ).then(response => {
        this.deliveryMethods = response.data
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    getPaymentMethods: function () {
      this.$http.get("/get/all/payment/methods", {}
      ).then(response => {
        this.paymentMethods = response.data
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    getOrderItemsByOrderId: function () {
      this.$http.get("/get/order/items/by/order/id")
          .then(response => {
            this.orderItemsByOrderId = response.data
            console.log(response.data)
          }).catch(error => {
        console.log(error)
      })
    },

    getOrderNumber: function (userId) {
      this.$http.get("/get/open/order/by/user/id", {
            params: {
              userId: userId
            }
          }).then(response => {
        this.orderNumber = response.data
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    redirectToConfirmPage: function (orderId) {
      this.$router.push({name: 'Confirm', query: {id: orderId}})
    }

  },
  beforeMount() {
    this.getOrderItemsByOrderId(this.orderItemsByOrderId)
    this.getDeliveryMethods(this.deliveryMethods)
    this.getPaymentMethods(this.paymentMethods)
    this.getOrderNumber(this.orderNumber)
  }
}
</script>

<!--<style scoped>-->

<!--</style>-->