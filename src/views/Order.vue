<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Shopping cart order</h1>
    Order Number: {{ orderNumber }}
<!--        <ol>-->
<!--          <li v-for=" row in orderItemDtos">-->
<!--            {{ row.itemName }} - -->
<!--            {{ row.itemPrice }} eur- -->
<!--            {{ row.quantity }} tk - -->
<!--            {{ row.sum }} eur-->
<!--          </li>-->
<!--        </ol>-->
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
    <br>
    <br>
    <br>
    <br>
    <div v-if="deliveryMethods.length > 0">
      <table>
        <tr>
          <th>DELIVERY ID</th>
          <th>DELIVERY PRICE</th>
          <th>DELIVERY NAME</th>
          <th>DELIVERY TIME</th>
          <th>NUPP</th>
        </tr>
        <tr v-for="row in deliveryMethods">
          <td>{{ row.id }}</td>
          <td>{{ row.price }}</td>
          <td>{{ row.name }}</td>
          <td>{{ row.deliveryTime }}</td>
          <td>
            <button v-on:click="">Vali mind</button>
          </td>
        </tr>
      </table>
    </div>
    <br>
    <br>
    <br>
    <div v-if="paymentMethods.length > 0">
      <table>
        <tr>
          <th>PAYMENT ID</th>
          <th>PAYMENT TYPE</th>
          <th>NUPP</th>
        </tr>
        <tr v-for="row in paymentMethods">
          <td>{{ row.id }}</td>
          <td>{{ row.paymentType }}</td>
          <td>
            <button v-on:click="">Vali mind</button>
          </td>
        </tr>
      </table>
    </div>
    <br>
    <br>
    <select v-model="selected">
      <option disabled value="">Vali delivery method</option>
      <option v-for="row in deliveryMethods" :value="row.name ">{{row.name}}, {{row.price}} eur, {{row.deliveryTime}} </option>
    </select>
    <br>
    <span>Delivery method: {{selected}} </span>
    <br>
    <br>
    <select v-model="selectedP">
      <option disabled value="">Vali payment method</option>
      <option v-for="row in paymentMethods" :value="row.paymentType ">{{row.paymentType}} </option>
    </select>
    <br>
    <span>Payment method: {{selectedP}} </span>
    <br>
    <br>
    <br>
    <br>
    <select class="opts">
      <option selected value="DEFAULT">Vali payment method</option>
      <option v-for="row in paymentMethods" :value="row.id">{{ row.paymentType }}</option>
    </select>
    <br>
    <br>
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

      selected :"",
      selectedP :""

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
    },



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