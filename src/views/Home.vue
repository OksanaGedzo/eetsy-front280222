<template>
  <div class="home">

<!--    {{this.primaryGroupObjects.length}}-->
<!--    {{this.primaryGroupObjects}}-->

    <div v-for="category in primaryGroupObjects" class="row">
      <div class="column"> <img @click="toSubGroup(category.id)" src="..\assets\logo.png"> </div>
    </div>
    
<!--    <img @click="toSubGroup" src="..\assets\logo.png">-->

  </div>
</template>

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

    toSubGroup: function (idCodeParam) {
      this.$http.get("/about", {
            params: {
              id: idCodeParam
            }
          }
      ).then(response => {
        console.log(this.id)
      }).catch(error => {
        console.log(error)
      })
    }

  },
  beforeMount() {
    this.getAllPrimaryGroups()
  }
}
</script>
