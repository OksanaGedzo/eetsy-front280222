<template>
  <div class="home">

    {{this.primaryGroupObjects.length}}

    <div v-for="category in primaryGroupObjects" class="row">
      <div class="column"></div>
    </div>

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
      primaryGroupObjects: {}
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
    }
  },
  beforeMount() {
    this.getAllPrimaryGroups()
  }
}
</script>
