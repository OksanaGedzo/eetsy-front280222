<template>
  <div>
    <div>
      <main>
        <section class="relative w-full h-full py-40 min-h-screen-75">
          <div
              class="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-cover"
              :style="`background-image: url('https://viraito.ee/wp-content/uploads/2019/11/banner01-2048x798.jpg');`"
          ></div>
          <router-view/>
          <!--          <footer-small absolute />-->
        </section>
      </main>
    </div>

    <section class="pt-20 pb-48">
      <div>
        <div>
          <div>
            <h2 class="text-4xl font-semibold">Here are our favorites</h2>
            <p class="text-lg leading-relaxed m-4 text-blueGray-500">
              Best of best
            </p>
          </div>
        </div>

        <div>
          <div>
            <div class="gallery" v-for="subCategory in subGroupObjects">
              <img
                  alt="..."
                  class="gallery-panel"
                  :src="subCategory.pictureData">
              <div class="pt-6 text-center">
                <h5 class="text-xl font-bold">{{ subCategory.name }}</h5>

                <div class="mt-6">
                  <div class="py-6 px-3 mt-32 sm:mt-0">
                    <button
                        class="bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"

                        v-on:click="redirectToItemsPageWith(subCategory.name)">
                      Shop now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--    {{ this.primaryGroupId }}-->

    <!--    <div class="gallery">-->
    <!--      <div class="gallery-panel" v-for="subCategory in subGroupObjects"-->
    <!--           v-on:click="redirectToItemsPageWith(subCategory.name)">-->
    <!--        <img src="..\assets\logo.png">-->
    <!--        <div class="item-grid">-->
    <!--          {{ subCategory.name }}<br>-->

    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->


    <footer class="block py-4">
      <div class="container mx-auto px-4">
        <hr class="mb-4 border-b-1 border-blueGray-200"/>
        <div
            class="flex flex-wrap items-center md:justify-between justify-center"
        >
          <div class="w-full md:w-4/12 px-4">
            <div
                class="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left"
            >
              Copyright ©
              <a
                  href="https://github.com/Rairot/eetsy-front"
                  class="text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1"
              >
                MRO Creative Team
              </a>
            </div>
          </div>
          <div class="w-full md:w-8/12 px-4">
            <ul class="flex flex-wrap list-none md:justify-end justify-center">
              <li>
                <a
                    href="https://github.com/Rairot/eetsy-front"
                    class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                >
                  Creative Team
                </a>
              </li>
              <li>
                <a
                    href="https://github.com/Rairot/eetsy-front"
                    class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                    href="https://github.com/Rairot/eetsy-front"
                    class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                >
                  Blog

                </a>
              </li>
              <li>
                <a
                    href="https://github.com/Rairot/eetsy-front"
                    class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                >
                  MRO License

                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
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

