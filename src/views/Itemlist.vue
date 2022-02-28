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
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center text-center mb-24">
          <div class="w-full lg:w-6/12 px-4">
            <h2 class="text-4xl font-semibold">Choose your favorite</h2>
            <p class="text-lg leading-relaxed m-4 text-blueGray-500">
              and shop now
            </p>
          </div>
        </div>
            <div class="gallery" v-for="item in itemObjects">
              <img
                  alt="..."
                  class="max-w-full rounded-lg shadow-lg"
                  :src="item.itemPictureData"
              >
              <div class="pt-6 text-center">
                <h5 class="text-xl font-bold">{{ item.itemName }}</h5>
                <p
                    class="mt-1 text-sm text-blueGray-400 uppercase font-semibold"
                >
                  {{ item.itemPrice }} €
                </p>
                <div class="mt-6">
                  <button
                      class="bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"

                      v-on:click="redirectToProductPage(item.itemId)">
                    Shop now

                  </button>
            </div>
          </div>
        </div>
      </div>
    </section>
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
table {
  margin-left: auto;
  margin-right: auto;
}

td {
  padding: 7px;
  border-bottom: solid;
  border-width: 1px;
  border-color: lightgray;
}

th {
  padding: 10px;
  background-color: lightgray;
  border: solid;
  border-width: 1px;
  border-color: lightgray;
}


</style>
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
