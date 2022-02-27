<template>
  <div class="home">

    <!--    {{this.primaryGroupObjects.length}}-->
    <!--    {{this.primaryGroupObjects}}-->
{{this.userId}}
    <div class="gallery">
      <div class="gallery-panel" v-for="category in primaryGroupObjects"
           v-on:click="redirectToSubgroupPageWith(category.id)">
        <img :src="category.pictureData">
        {{ category.name }}
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

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data: function () {
    return {
      primaryGroupObjects: {},
      userId: this.$route.query.userId,
    }
  },
  methods: {
    getAllPrimaryGroups: function () {
      this.$http.get("/get/all/primarygroups/")
          .then(response => {

            this.primaryGroupObjects = response.data

            console.log(response.data)
          }).catch(error => {
        console.log(error)
      })
    },

    redirectToSubgroupPageWith: function (primaryGroupId) {
      this.$router.push({name: 'Subgroups', query: {id: primaryGroupId}})
    },
  },
  beforeMount() {
    this.getAllPrimaryGroups()
  }
}
</script>
