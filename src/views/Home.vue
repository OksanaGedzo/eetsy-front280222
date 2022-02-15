<template>
  <div class="home">

<!--    {{this.primaryGroupObjects.length}}-->
<!--    {{this.primaryGroupObjects}}-->

    <div  class="gallery">
      <div class="gallery-panel" v-for="category in primaryGroupObjects">

<!--          <img @click="toSubGroup(category.id)" src="..\assets\logo.png">-->

        <router-link :to="{path:'/about'+'?id='+category.id}">

          <img src="..\assets\logo.png">

        </router-link>

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
      chunkedPrimaryGroup: {},
    }
  },
  methods: {
    getAllPrimaryGroups: function () {
      this.$http.get("/getallprimarygroups/")
          .then(response => {

            this.primaryGroupObjects = response.data

            console.log(response.data)
          }).catch(error => {
        console.log(error)
      })
    },

    // toSubGroup: function (idCodeParam) {
    //   this.$http.get("/about", {
    //         params: {
    //           id: idCodeParam
    //         }
    //       }
    //   ).then(response => {
    //
    //     console.log(this.id)
    //   }).catch(error => {
    //     console.log(error)
    //   })
    // }

  },
  beforeMount() {
    this.getAllPrimaryGroups()
  }
}
</script>
