<template>
  <div class="home">
    <div>
      <main>
        <section class="relative w-full h-full py-40 min-h-screen-75">
          <div
              class="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-cover"
              :style="`background-image: url('https://viraito.ee/wp-content/uploads/2019/11/banner01-2048x798.jpg');`"

          >
            <div
                class="relative pt-32 pb-20 flex content-center items-center justify-center min-h-screen"
            >
            <div class="container relative mx-auto">
              <div class="items-center flex flex-wrap">
                <div class="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
                  <div class="pr-12">
                    <h1 class="text-white font-semibold text-5xl">
                      My favourite Estonian goods
                    </h1>
                    <p class="mt-4 text-lg text-white">
                      Find something memorable, join a community doing good.

                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>

          </div>
          <router-view/>
          <!--          <footer-small absolute/>-->
        </section>
      </main>
    </div>
    <section class="pt-20 pb-48">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center text-center mb-24">
          <div class="w-full lg:w-6/12 px-4">
            <h2 class="text-4xl font-semibold">Made with love</h2>
            <p class="text-lg leading-relaxed m-4 text-blueGray-500">
              Take a piece of Estonia with you, whether in the form of a pair of hand-knitted woollen socks,
              playful mittens, carved wooden mugs, felt hats, juniper coasters or rustic jewellery.
            </p>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div class="px-6" v-for="category in primaryGroupObjects">
              <img
                  alt="..."
                  class="max-w-full rounded-lg shadow-lg"
                  src="https://lh3.googleusercontent.com/6X9PZteF-GRRYf7poNkQCBjHqG37mqaFR7kS3-kPhda_g_cXCKpZEcT1M1KivWf7G99_VqHTn9vhAOvQTBkdtRs9BJQ-qZ44Dj7gorMxhoh_argq5JoHvwB3kKtyw1kIoLokyxOxUZFJqRBswjjSHnztYM1rxOdBDmWWcsSPzTGeiqz-usRfIsVa0U46uPBoMn0LwIeqGu1mrnZCxBtesU5HDj-E8ceZV40ZeXng7uI8tLGMKKEdBtu5_PG1Y8gnLJwV6xdkrJ62QXmuCGK-LSMIWffBeQdbeU-i_HSxQwp04xH8asjj7Y34OY477XFTa9latVwUQ1xipT68Kq5_nP25pnrbmJo3YPJAr4QS77BWweXJgNxgTXsCgoXRabHeXCJO1YPu7JISX5T29Ndfw_OMSVOmRYQ-3_Ne_U0JL3BJNi4XHECHRQFoMvhAdZeIAwTYVUB7heROdTzbd8MTZqEH-0Kv8ksyyQK70Ivmigi4LV4TlMiStcc301KH1eJcEBuflyEO8y8ml-Ikaelhi51sRPErUzGaq9C2i6pkGkUI29JmgHWXeoGLj4tRpjhoB9QFKgKmp4cnzUxk30qrsVDvh50PTCr7CBnsgQjMyVlRYKLxcv2EQLWKReIEVPnA6HZg1mh5zlYFEsRMoiPwqErKw-8kn9JHByu7-VmmNTQmSECTniCQqpMS1AoapO7Rxz05IerqUVuNYMgwt3zblwrt=s903-no?authuser=0"
              />
              <div class="pt-6 text-center">
                <h5 class="text-xl font-bold">Handcraft</h5>
                <p
                    class="mt-1 text-sm text-blueGray-400 uppercase font-semibold"
                >
                  For you, for home
                </p>
                <!--                {{ this.userId }}-->
                <!--                <div class="gallery">-->
                <!--                  <div class="gallery-panel" v-for="category in primaryGroupObjects"-->
                <!--                       v-on:click="redirectToSubgroupPageWith(category.id)">-->
                <!--                    <img src="..\assets\logo.png">-->
                <!--                    {{ category.name }}-->
                <!--                  </div>-->
                <!--                </div>-->
                <div class="mt-6">
                  <div class="py-6 px-3 mt-32 sm:mt-0">
                    <button
                        class="bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"

                        v-on:click="redirectToSubgroupPageWith(category.id)">
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
                  src="https://lh3.googleusercontent.com/4E1RZGM8NT5VJQ1afCnPRp0UqH1RnUb8LHE7r9DGl5N9UVd_wBlLXMly2sX7XY-wjW9fLb4810_XbyDA9QS6VH3TmsIehRtehkXYQptDxV4TBZzQ96-hbNOZiOi3wMCwJVqCjlqexkJ55gaZNLnZSk8swWPdgO8SwzN1Hx5eC0Wl_-_aFEM-Ve5ZpyM0sSqc7YBCAqP0jUFDDVzdiXpvzZOmLY_pFOMlKk2hRM3vmBDaJnzFnwx0g1ly9fnrh1G31RcVJvB5SubN3re43uIk7E76V56pHm1RbbNRedBolQCB0Gfxz27rT9kQ-mjoUqi9CLbuqHFmZSK8fAkPlNoqTB5gsvi0NBsUvPysr0kUI04ZyMTVfoCVBZlBcad4R24scm8_ep-upn_zjTt7JDsf5B9jZBWHq0oG4Vj7R9MMcTqy1LbQqXljqR8j9QVpXaJDuVLtV3768o1fEy0XdzZvgpFAfUTm1280TJuzyEC3Zu7pGfwx7TuYfG8cgQmHLuUBK7Sh3CsKDnaMn9CQ6S9Rx9_iFDX-35DPCiOgJ1ai4paaIpKUs2zO81QYkRDmL-8HmmX6oeFhADxnHh3MpwpeMM3un3BnTlhCyGmLddqehZlXzlulMiF4S8uOgHiosd4hjJnkI2dcayP61XfPQ6enTNHPoZWNv7UdLGLI1ZJuNA23-9yJ1LH-_oUBx8G0XQ5OiKQkbjGmJU0rmtOgGONKMNm2=s903-no?authuser=0"

              />
              <div class="pt-6 text-center">
                <h5 class="text-xl font-bold">From the forest</h5>
                <p
                    class="mt-1 text-sm text-blueGray-400 uppercase font-semibold"
                >
                  Mushrooms, berries
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
                  src="https://lh3.googleusercontent.com/c4zP9WzKlR0K5kG3awHSK3lLCOD1uX9YViY7j0CB-R164Y4GRqD8EGyLOgPcAUB3yoD7W-15VH7bS7PJVs6F2M6feg8pDvR5EiTQpP8kYybMMVPP9Y-S7CH7eSATXFGNd17ae98KSX9fxEUoqSu8MBiUCCp2_QtD5A8YLFEolWKuFu9pzxhyZCvy-aXAniMuu2x-lYUXJUWEbyn9dSHG7FHHKGm8X064IpPIjcXEf_HHNDe1X21A7c5VvrTiUBplFlEpTxMIOFscveBosSEoqQKoA3Rivvs0yEXq97JSGwfqsCxNFEQdD1oOzKLXkywN_6udI6FwtooXGbich5vTjAJHRI2pxO40JCQn2Tn3vzqDW50PKuXM-UOBLiEeSikasxiBoWFbt1tM-c50xwDc9hFXdGEzS0X018PcCWSjAj8e3dewrsrs7sOnYusfzxKw5rIwscFsEZ76hBLl6RwP73EbNbuCQTFJDbkYLcI0rhwrQ0WnNxxb5Nb435ipYZxqtjvle76WZ4SPhUcZY9bCS-9wERw3Oq5ygavsF_dapgx1Vk0x3sH68Z5ruhP-BLzxVvFJ3FM5cjRUsg7p5cTgs1hZWfT8y1Y0eY55iYi6k6UX0dDhLR7L6EH1_cKcNTpmBseNXR6S3J8I0yO_t7wjxkZZwdEVZ1lMMMEuloF5T1Oc0lTDi7o5CwoZh9gyEJ7LZJPn1fsHAQ4mkkJJfsKsr6-x=s903-no?authuser=0"

              />
              <div class="pt-6 text-center">
                <h5 class="text-xl font-bold">From the garden</h5>
                <p
                    class="mt-1 text-sm text-blueGray-400 uppercase font-semibold"
                >
                  Fruits, vegetables
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
                  src="https://lh3.googleusercontent.com/qAcDl47h8-Q_fzLWOgPI7qIVW2jZGsHlbDKi2C1PEpmXOn9ceCproD56IXftluZoHJPQL8gpnmbIUhjUGOw6w0cdt0T6_Nns9bcvp4LC6H-k6Nit8WowZPxbY4c3MtbmZkvdDwWx0spIgnua0Lc9T2iTs8oVQN2D9JlNNzOzb02190jIKu43mhPr7Ib7jkm9dTbfrbdEjOyi8g1geeP1kpNbjkFEsqgaw_WOxuiAzUdf9ju5haG6V125SyrxD8eCeDEwPL3pdgGd4uSZDRzfwhocHjv-S-f3uzqmWDhnpDk_Be_Lp8k6jOd67dzJFoDLPAYSou82IxM4HTSV6Yg_tk0vA_CbRtp4B9ynU2oeANawJ6hpTgyif-6R5iwpXDNw0zpwNBEkoipLMM6JKmKy-GAd7dN_9L_kWOQb8770m1MKhPNlbGkjhFkoZOKTuQ_dxTdHzs-VUg07WLHrpSmEOqCpFjY5r8aES5g27razASkdcN0WaKrI0HgedSgVBG53JPOZfqgvHM36emUHCMhP1QK4PSZgDFw24H2IsBrQucN66D-fcPxewSipFvX3PsJ75l7hnr__mUAiym6fz6D9ppZ-H6JENBzXpTw2adNKEuzbFPCFeBpaiytNZRtYzjnZs6aXne6HW1xs24zql_KuI3vrwv_CqjZVwkD5VeksHUIxXzwis8cp2NmU5VGKo3DRCuLtdbegmUZsBAi7aw0R6QdV=s903-no?authuser=0"

              />
              <div class="pt-6 text-center">
                <h5 class="text-xl font-bold">From the kitchen</h5>
                <p
                    class="mt-1 text-sm text-blueGray-400 uppercase font-semibold"
                >
                  Jam, pastry
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

    <section class="pb-20 relative block bg-blueGray-800">
      <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style="transform: translateZ(0);"
      >
        <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
        >
          <polygon
              class="text-blueGray-800 fill-current"
              points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div class="container mx-auto px-4 lg:pt-24 lg:pb-64">
        <div class="flex flex-wrap text-center justify-center">
          <div class="w-full lg:w-6/12 px-4">
            <h2 class="text-4xl font-semibold text-white">
              #visitestonia
            </h2>
            <p class="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
              Local handicraft showing off traditional Estonian patterns is just about as Estonian as you can go with your gift.
              Knitting, crocheting and embroidery traditions in Estonia date back centuries and here you can find items like no-where else in the world.
              Look for natural fabrics like wool, cotton and linen and wooden kitchen utensils carved from the juniper tree.
            </p>
          </div>
        </div>
        <div class="flex flex-wrap mt-12 justify-center">
          <div class="w-full lg:w-3/12 px-4 text-center">
            <div
                class="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
            >
              <i class="fas fa-medal text-xl"></i>
            </div>
            <h6 class="text-xl mt-5 font-semibold text-white">
              Excelent Services
            </h6>
            <p class="mt-2 mb-4 text-blueGray-400">
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
          </div>
          <div class="w-full lg:w-3/12 px-4 text-center">
            <div
                class="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
            >
              <i class="fas fa-poll text-xl"></i>
            </div>
            <h5 class="text-xl mt-5 font-semibold text-white">
              Grow your market
            </h5>
            <p class="mt-2 mb-4 text-blueGray-400">
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
          </div>
          <div class="w-full lg:w-3/12 px-4 text-center">
            <div
                class="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
            >
              <i class="fas fa-lightbulb text-xl"></i>
            </div>
            <h5 class="text-xl mt-5 font-semibold text-white">
              Launch time
            </h5>
            <p class="mt-2 mb-4 text-blueGray-400">
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="relative block py-24 lg:pt-0 bg-blueGray-800">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
          <div class="w-full lg:w-6/12 px-4">
            <div
                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200"
            >
              <div class="flex-auto p-5 lg:p-10">
                <h4 class="text-2xl font-semibold">
                  Want to work with us?
                </h4>
                <p class="leading-relaxed mt-1 mb-4 text-blueGray-500">
                  Complete this form and we will get back to you in 24 hours.
                </p>
                <div class="relative w-full mb-3 mt-8">
                  <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="full-name"
                  >
                    Full Name
                  </label>
                  <input
                      type="text"
                      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Full Name"
                  />
                </div>

                <div class="relative w-full mb-3">
                  <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                      type="email"
                      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                  />
                </div>

                <div class="relative w-full mb-3">
                  <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                      rows="4"
                      cols="80"
                      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Type a message..."
                  />
                </div>
                <div class="text-center mt-6">
                  <button
                      class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                  >
                    Send Message
                  </button>
                </div>
              </div>
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
