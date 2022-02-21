<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Shopping cart order</h1>
    Order Number: {{ orderNumber }}
    <!--    <div>-->
    <!--      Order Number: {{ orderNumber }}-->
    <!--      <br>-->
    <!--      <div v-for="row in order">-->
    <!--        OrderItemsByOrderId: {{ row.orderItemsByOrderId }}<br>-->
    <!--        ItemName: {{ row.itemName }}<br>-->
    <!--        Picture: {{ row.itemPictureId }}<br>-->
    <!--        Price: {{ row.itemPrice }}<br>-->
    <!--        Quantity: {{ row.orderItemQuantity }}<br>-->
    <!--        Total sum: {{ row.orderItemSum }}<br>-->
    <!--      </div>-->
    <br>
    <!--      <div class="selDiv">-->
    <!--        <select class="opts">-->
    <!--          <option selected value="DEFAULT">Vali delivery method</option>-->
    <!--          <option value="SEL1">Itella</option>-->
    <!--          <option value="SEL2">Omniva</option>-->
    <!--          <option value="SEL2">StarShip</option>-->
    <!--          <option value="SEL2">Kuller</option>-->
    <!--        </select>-->
    <br>
    <br>
    <ol>
      <li v-for=" row in orderItemDtos" > {{row.itemName}} - {{row.itemPrice}} eur- {{row.quantity}} tk - {{row.sum}} eur</li>
    </ol>
    <select class="opts">
      <option selected value="DEFAULT">Vali payment method</option>
      <option v-for="row in paymentMethods" :value="row.id">{{ row.paymentType }}</option>
    </select>
    <select class="opts">
      <option selected value="DEFAULT">Vali delivery method</option>
      <option v-for="row in deliveryMethods" :value="row.id">{{ row.name }}</option>
    </select>
    <!--        TOTAL PRICE: {{ 'ghh  method  jj' }}-->
    <!--        <button v-on:click="redirectToConfirmPage(orderId.id)">Confirm the order</button>-->
    <!--      </div>
        </div>-->
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
    this.getShoppingCart()
  }
}
</script>

<!--<style scoped>-->

<!--</style>-->