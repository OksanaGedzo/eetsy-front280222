<template>
  <div>
    <div>
      <main>
        <section class="relative w-full h-full py-40 min-h-screen-75">
          <div
              class="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-cover"
              :style="`background-image: url('https://viraito.ee/wp-content/uploads/2019/11/banner01-2048x798.jpg');`"
          ></div>
          <router-view />
<!--          <footer-small absolute />-->
        </section>
      </main>
    </div>
    <section class="pt-20 pb-48" >
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center text-center mb-24">
          <div class="w-full lg:w-6/12 px-4" >
            <h2 class="text-4xl font-semibold">Here are our heroes</h2>
            <p class="text-lg leading-relaxed m-4 text-blueGray-500">
              According to the National Oceanic and Atmospheric
              Administration, Ted, Scambos, NSIDClead scentist, puts the
              potentially record maximum.
            </p>
          </div>
        </div>
        <div class="flex flex-wrap"  >
          <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" >
            <div class="px-6" v-for="item in itemObjects">
              <img
                  alt="..."
                  class="max-w-full rounded-lg shadow-lg"
                  src="https://lh3.googleusercontent.com/5rWgBQiz1hhEIFs4z0ThpkQwZzmOE6gQCKAVB7jNnjIV-uMs7tZHnGe_J2vYkUkqKo_o49Ep47M38KPM8kV4OkzhzebQmmOPMzO6AdW92yQ_SCmxM2zd3TXMkro8XphVa-GSEO7I1tcq1c-qHjjsOBI3TlO3_xbfDiq7fR7OD6_BnQzl_SpmXlXqgwo_oydfnOBXKray_QfrPpWfm-vDdzXeCM629heI2Fp9elJ9U2fLByxU0GJEmU8gxLM7PxmntDV3oKSBIHM7yjoI4KFGXwgnDDuu1N51t_qLzQpH6E8KlLUWkGx67wv0UR22Or2t-V_0tHFRWAT3uUYualH8_GMNZsOyc9rBStB1UN7SAx3AB7UVdnuax9ElIxMG133OC4igaAySlPxWQlMTzk6YKinRqtDjzxA8ZSM6g1PbTg3QMPzicweXH1VnGJlXNAd98A1OM63Kowiqsxp1t4SGpxO_Hl5CEbnsK4z0zg-tsmf-wSe8Q2NKVQOClywcKcyoDqvAOneNEF_3JP5x6jivH-K_XSOC5JLnwj3AHBhouk9xnQ2enGpAYKACj1bC5oDrVLFMMO-ZOLKr9boNVRzuzRAfEgcVQLGk0z_fBg7b66L9Inmnxe3C6PsmhmS5STKOvnHz1IX1ZbP38MgqPTcsUN3UMi48bmWcjVDVMjJCfadjuU26c3Z6wXriyFvTaRohG-1bpb6JoE5WlBVkRgXiP2Zo=s903-no?authuser=0"

              />
              <div class="pt-6 text-center"  >
                <h5 class="text-xl font-bold" >National woolen hat</h5>
                <p
                    class="mt-1 text-sm text-blueGray-400 uppercase font-semibold"
                >
                  10 euro
                </p>
                <!--                {{ this.userId }}-->
                <!--                <div class="gallery">-->
                <!--                  <div class="gallery-panel" v-for="category in primaryGroupObjects"-->
                <!--                       v-on:click="redirectToSubgroupPageWith(category.id)">-->
                <!--                    <img src="..\assets\logo.png">-->
                <!--                    {{ category.name }}-->
                <!--                  </div>-->
                <!--                </div>-->
                <div class="mt-6" >
                  <div class="py-6 px-3 mt-32 sm:mt-0" >
                    <button class="bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"

                            v-on:click="redirectToProductPage(item.itemId)">
                      <!--                      {{ category.name }}-->
                      <!--&lt;!&ndash;                        type="button"&ndash;&gt;-->
                      <!--                    >-->
                      Shop now

                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div class="px-6">
              <img
                  alt="..."
                  class="max-w-full rounded-lg shadow-lg"
                  src="https://lh3.googleusercontent.com/pw/AM-JKLUfH9yAmXjTt8TeRzjII5iBGxOpAnsUUXJPuamH0gezQBhQVgUuuDeJNOsEGE4EAiK7wnX5Sdme1HTk2fntR5D9_xJBXazT0a4ixqnsI7jm9y_0jKtSszKUbfm1y5H5cfWsCk6cK9iPeK6OtJMKQ3nC=w766-h767-no?authuser=0"

              />
              <div class="pt-6 text-center">
                <h5 class="text-xl font-bold">Fur hat with tassel</h5>
                <p
                    class="mt-1 text-sm text-blueGray-400 uppercase font-semibold"
                >
                  59 euro
                </p>
                <div class="mt-6">
                  <div class="py-6 px-3 mt-32 sm:mt-0">
                    <button
                        class="bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                    >
                      Shop now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div class="px-6">
              <img
                  alt="..."
                  class="max-w-full rounded-lg shadow-lg"
                  src="https://lh3.googleusercontent.com/pw/AM-JKLXhSoP-OzST7n0m656bQjnbPJpWJ7g7dyZxCjtXfeMI0qnVncLnxVuFzPOSxl3aGJ4Nmae-jmDKix6ExUw7Q7Ybf0wzy5njLp_cIxKvessL3Gi_5bNSTr9ZlF0x1IxO-xnPzL4PGErvS-rDW3PyQPpb=w904-h903-no?authuser=0"

              />
              <div class="pt-6 text-center">
                <h5 class="text-xl font-bold">Long hat with a scarf, national pattern</h5>
                <p
                    class="mt-1 text-sm text-blueGray-400 uppercase font-semibold"
                >
                  69 euro
                </p>
                <div class="mt-6">
                  <div class="py-6 px-3 mt-32 sm:mt-0">
                    <button
                        class="bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                    >
                      Shop now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div class="px-6">
              <img
                  alt="..."
                  class="max-w-full rounded-lg shadow-lg"
                  src="https://lh3.googleusercontent.com/pw/AM-JKLV_aoZ05j9Prvg_H4ayzUX-IbX0_c-omZXlFSLwiBktqUHzqLkq9J9HvKRbhGpMtstnLnpxQ8SvH-vmBReLKU7TS_Qv0s9FUCPEmGTiJO3ipujs_mw8ub5hGrVfVVMrLJqC_dBya7Q6NgjzrmgTcXYt=s903-no?authuser=0"

              />
              <div class="pt-6 text-center">
                <h5 class="text-xl font-bold">Men'n national woolen hat</h5>
                <p
                    class="mt-1 text-sm text-blueGray-400 uppercase font-semibold"
                >
                  59 euro
                </p>
                <div class="mt-6">
                  <div class="py-6 px-3 mt-32 sm:mt-0">
                    <button
                        class="bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                    >
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
<!--    {{ this.subGroupName }}-->

<!--    <div class="gallery">-->
<!--      <div class="gallery-panel" v-for="item in itemObjects" role="button"-->
<!--           v-on:click="redirectToProductPage(item.itemId)">-->
<!--        <img src="..\assets\logo.png">-->
<!--        Item id: {{item.itemId}}<br>-->
<!--        Price: {{ item.itemPrice }}<br>-->
<!--        Description: {{ item.itemDescription }}-->
<!--      </div>-->
<!--    </div>-->
    <footer class="block py-4">
      <div class="container mx-auto px-4">
        <hr class="mb-4 border-b-1 border-blueGray-200" />
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

<!--<style scoped>-->

<!--</style>-->