<template>
  <div>

    ITEM TITLE: {{ itemObject.name }} <br>
    ITEM SELLER: {{ itemObject.sellerName }} <br>
    ITEM DESCRIPTION: {{ itemObject.description }} <br>
    ITEM PRICE: {{ itemObject.price }} <br>
    PILT: siia tuleb pilt
    <input type="number" value="1" v-model="itemQuantity">
    <button v-on:click="addOrderItemToDatabase"> ADD TO CART</button>

  </div>

</template>

<script>
export default {
  name: "Item",
  data: function () {
    return {
      itemId: this.$route.query.id,
      itemObject: {},
      itemQuantity: '',
      userIsLoggedIn: false,
      itemObjectRequest: {
        "userId": null,
        "itemId": null,
        "quantity": null,
      }
    }
  },
  methods: {
    getItemById: function (itemId) {
      this.$http.get("/get/product/by/id", {
            params: {
              id: itemId
            }
          }
      ).then(response => {
        this.itemObject = response.data,
            console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    isUserLoggedIn: function () {
      if (localStorage.getItem("UserIdToken") === null) {
        this.userIsLoggedIn = false;
        return false;
      } else {
        this.userIsLoggedIn = true;
        return true;
      }
    }
    ,
    addOrderItemToDatabase: function () {
      if (this.isUserLoggedIn) {
        this.itemObjectRequest.itemId = this.itemId
        this.itemObjectRequest.userId = localStorage.getItem("UserIdToken")
        this.itemObjectRequest.quantity = this.itemQuantity
        this.$http.post("/add/orderitem/to/cart", this.itemObjectRequest
        ).then(response => {
          console.log(response.data)
          alert(response.data.message + "" + response.data.error)
        }).catch(error => {
          console.log(error)
        })
      } else {
        alert("please log in")
      }
    }
  },
// computed: {
//   dataUrl() {
//     return 'data:image/jpeg;base64,' + btoa(
//         new Uint8Array(this.itemObject.seller.logoPicture)
//             .reduce((data, byte) => data + String.fromCharCode(byte), '')
//     );
//   }
// },
  beforeMount() {
    this.getItemById(this.itemId)
  }
}
</script>

