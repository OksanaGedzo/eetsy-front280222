<template>
  <div>
    <div>
      <main>
        <section class="relative w-full h-full py-40 min-h-screen-75">
          <div
              class="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-cover"
              :style="`background-image: url('https://viraito.ee/wp-content/uploads/2019/11/banner01-2048x798.jpg');`"
          ></div>
          <router-view />
          <footer-small absolute />
        </section>
      </main>
    </div>
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <br>
    <br>
    <h1>Shopping cart</h1>
    <br>
    Order №: {{ orderNumber }}
    <br>
    <div v-if="orderItemDtos.length > 0">
      <br>
      <table>
        <tr>
          <th>ITEM ID</th>
          <th>ITEM NAME</th>
          <th>ITEM PRICE</th>
          <th>ITEM QUANTITY</th>
          <th>ITEM SUM</th>
          <th>UPDATE SUM</th>
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
            <button> UPDATE</button>
          </td>
          <td id="deleteButton" v-on:click="deleteOrderItem(index)">
            <button> DELETE</button>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td> </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td> </td>
          <td>SUM: {{ itemsSum }} EUR</td>
          <td></td>
        </tr>
      </table>
    </div>
    <br>
    <select v-model="selectedDeliveryMethod">
      <option disabled value="">Choose delivery method</option>
      <option v-for="row in deliveryMethods" :value="row ">{{ row.name }}, {{ row.price }} eur,
        {{ row.deliveryTime }}
      </option>
    </select>
    <br>
    <span>Delivery method: {{ selectedDeliveryMethod.name }} {{ selectedDeliveryMethod.deliveryTime }} </span>
    <br>
    <br>
    <select v-model="selectedPaymentMethod">
      <option disabled value="">Choose payment method</option>
      <option v-for="row in paymentMethods" :value="row">{{ row.paymentType }}</option>
    </select>
    <br>
    <span>Payment method: {{ selectedPaymentMethod.paymentType }} </span>
    <br>
    <br>
    <br>
    <button v-on:click=" calculateTotalPrice">TOTAL PRICE</button>
    <br>
    <span>Total price: {{ totalPrice }} </span>
    <br>
    <br>
    <button v-on:click="postOrderAndRedirectHome">CONFIRM</button>
    <br>
    <br>

    <br>
    <br>
    <footer class="block py-4">
      <div class="container mx-auto px-4">
        <hr class="mb-4 border-b-1 border-blueGray-200" />
        <div
            class="flex flex-wrap items-center md:justify-between justify-center"
        >
          <div class="w-full md:w-4/12 px-4">
            <div
                class="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left"
            >
              Copyright ©
              <a
                  href="https://github.com/Rairot/eetsy-front"
                  class="text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1"
              >
                    MRO Creative Team
              </a>
            </div>
          </div>
          <div class="w-full md:w-8/12 px-4">
            <ul class="flex flex-wrap list-none md:justify-end justify-center">
              <li>
                <a
                    href="https://github.com/Rairot/eetsy-front"
                    class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                >
                      Creative Team
                </a>
              </li>
              <li>
                <a
                    href="https://github.com/Rairot/eetsy-front"
                    class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                    href="https://github.com/Rairot/eetsy-front"
                    class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                >
                  Blog

                </a>
              </li>
              <li>
                <a
                    href="https://github.com/Rairot/eetsy-front"
                    class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                >
                  MRO License

                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
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

  },


  beforeMount() {

  },
  created() {
    this.getShoppingCart()
  }
}
</script>

<style scoped>

</style>

