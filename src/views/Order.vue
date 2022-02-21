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
      <div class="selDiv">
        <select class="opts">
          <option selected value="DEFAULT">Vali delivery method</option>
          <option value="SEL1">Itella</option>
          <option value="SEL2">Omniva</option>
          <option value="SEL2">StarShip</option>
          <option value="SEL2">Kuller</option>
        </select>
        <br>
        <br>
        <select class="opts">
          <option selected value="DEFAULT">Vali payment method</option>
          <option value="SEL1">Bank</option>
          <option value="SEL2">PayPal</option>
          <option value="SEL2">Sularaha</option>
          <option value="SEL2">MetaMask</option>
        </select>
        <br>
        <br>
        TOTAL PRICE: {{ 'ghh  method  jj' }}
        <br>
        <br>
        <button v-on:click="redirectToConfirmPage(orderId.id)">Confirm the order</button>
        <br>
        <br>
        <br>
      </div>
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

    redirectToConfirmPage: function (orderId) {
      this.$router.push({name: 'Confirm', query: {id: orderId}})
    }

    // }, $(function() {
    //   $('#deliveriorpaymentframe').change(function () {
    //     var valik = $(this).find(':selected').val();
    //     if (valik == 'str1') {
    //       $('.element').text('row 1');
    //     } else if (valik == 'str2') {
    //       $('.element').text('row 2');
    //     } else if (valik == 'str3') {
    //       $('.element').text('row 3');
    //     }
    //   });

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