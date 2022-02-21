<template>
  <div>

    ITEM TITLE: {{ itemObject.name }} <br>
    ITEM SELLER: {{ itemObject.sellerName}} <br>
    ITEM DESCRIPTION: {{ itemObject.description }} <br>
    ITEM PRICE: {{ itemObject.price }} <br>
    PILT: siia tuleb pilt
    <input type="number" value="1" v-model="itemQuantity">
    <button v-on:click=""> ADD TO CART</button>


  </div>

</template>

<script>
export default {
  name: "Item",
  data: function () {
    return {
      itemId: this.$route.query.id,
      itemObject: {},
      itemQuantity: ''
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
    //TODO VAATA ÜLE PUSHITAVAD PARAMID JA ÜHENDA ÄRA
    redirectToShoppingCartPage: function () {
      this.$router.push({name: 'Order', query: {itemId: this.itemId, itemQuantity: this.itemQuantity}})
    },
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

