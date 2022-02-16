<template>
  <div>
<!--TODO: itemi enda leht (name, price, description, seller, pilt, insert quantity textbox, add to cart button-->
  </div>
</template>

<script>
export default {
  name: "Product",
  data: function () {
    return {
      itemId: this.$route.query.id,
      itemObject: {},
    }
  },
  methods: {
    getItemById: function (itemId) {
      this.$http.get("/some/path", {
            params: {
              id: itemId
            }
          }
      ).then(response => {
        this.itemObject = response.data
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    }
  },
  beforeMount() {
    this.getItemById(this.itemId)
  }
}
</script>

