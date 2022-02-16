<template>
  <div>
    {{ this.subGroupName }}

    <div class="gallery">
      <div class="gallery-panel" v-for="item in itemObjects"
           v-on:click="redirectToProductPage(item.id)">
        <img src="..\assets\logo.png">
        Price: {{ item.itemPrice }}<br>
        Description: {{ item.itemDescription }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Items",
  data: function () {
    return {
      subGroupName: this.$route.query.name,
      itemObjects: {},
      itemId: '',
    }
  },
  methods: {
    getAllItemsBySubGroup: function (subGroupName) {
      this.$http.get("get/subgroup/item/response", {
            params: {
              name: subGroupName
            }
          }
      ).then(response => {
        this.itemObjects = response.data
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    redirectToProductPage: function (itemId) {
      this.$router.push({name: 'Product', query: {id: itemId}})
    },

  },
  beforeMount() {
    this.getAllItemsBySubGroup(this.subGroupName)
  }
}
</script>

<style scoped>

</style>