<template>
  <div>
    {{ this.primaryGroupId }}

    <div class="gallery">
      <div class="gallery-panel" v-for="subCategory in subGroupObjects"
           v-on:click="redirectToItemsPageWith(subCategory.name)">
        <img :src="subCategory.pictureData">
        <div class="item-grid">
          {{ subCategory.name }}<br>

        </div>
      </div>
    </div>
  </div>
</template>
<style>

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  max-width: 80rem;
  margin: 5rem auto;
  padding: 0 5rem;
}

.gallery-panel img {
  width: 100%;
  height: 22vw;
  object-fit: cover;
  border-radius: 0.75rem;

}
</style>


<script>
export default {
  name: "Subgroups",
  data: function () {
    return {
      primaryGroupId: this.$route.query.id,
      subGroupObjects: {}
    }
  },
  methods: {
    getAllSubGroupsByPrimaryGroupId: function (primaryGroupId) {
      this.$http.get("/get/subgroups/by/primarygroup/id", {
            params: {
              id: primaryGroupId
            }
          }
      ).then(response => {
        this.subGroupObjects = response.data
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    redirectToItemsPageWith: function (subGroupName) {
      this.$router.push({name: 'Itemlist', query: {name: subGroupName}})
    },
  },
  beforeMount() {
    this.getAllSubGroupsByPrimaryGroupId(this.primaryGroupId)
  }
}
</script>

