<template>
  <div>
    {{ this.subGroupName }}

    <div class="gallery">
      <div class="gallery-panel" v-for="item in itemObjects" role="button"
           v-on:click="redirectToProductPage(item.itemId)">
        <img src="..\assets\logo.png">
        Item id: {{item.itemId}}<br>
        Price: {{ item.itemPrice }}<br>
        Description: {{ item.itemDescription }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemList",
  data: function () {
    return {
      subGroupName: this.$route.query.name,
      itemObjects: {},
      itemId: '',
    }
  },
  methods: {
    getAllItemsBySubGroup: function (subGroupName) {
      this.$http.get("get/items/by/subgroup/name", {
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
      this.$router.push({name: 'Item', query: {id: itemId}})
    },

  },
  beforeMount() {
    this.getAllItemsBySubGroup(this.subGroupName)
  }
}
</script>

<style scoped>

</style>