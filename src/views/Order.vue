<template>
  <div >
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Shopping cart order</h1>
    <div>
      <div v-for="row in order">
        OrderId: {{ row.orderId }}<br>
        OrderItemId: {{ row.orderItemId }}<br>
        ItemName: {{ row.itemName }}<br>
        Picture: {{ row.pictureItemId }}<br>
        Price: {{ row.itemPrice }}<br>
        SubTotal: {{ row.orderItemSum }}<br>
        Quantity: {{ row.orderItemQuantity }}<br>
        Delivery methods :{{ row.deliveryMethods() }}<br>
        Total sum: {{ row.orderItemSum }}<br>
        Payment methods :{{ row.paymentMethods }}<br>
      </div>
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
      orderItemByOrderId: this.$route.query.orderItemId,
      order: {},
      deliveryMethods: '',
      orderIdQuantity: '',
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

    getOrderItemByOrderId: function () {
      this.$http.get("/get/order/items/by/order/id")
          .then(response => {
            this.orderItemByOrderId = response.data
            console.log(response.data)
          }).catch(error => {
        console.log(error)
      })
    },

    getOrderId: function (id) {
      this.$http.get("get/order/id", {
            params: {
              orderId: id
            }
          }
      ).then(response => {
        this.orderId = response.data
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
    this.getOrderItemByOrderId(this.orderItemByOrderId)
    this.getDeliveryMethods(this.deliveryMethods)
    this.getPaymentMethods(this.paymentMethods)
    this.getOrderId(this.orderId)
  }
}
</script>

<!--<style scoped>-->

<!--</style>-->