


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
                        My favorite Estonian goods
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
              Take a piece of Estonia with you wherever you are, whether in the form of a pair of hand-knitted woollen socks,
              playful mittens, carved wooden mugs, felt hats, juniper coasters or rustic jewellery.
            </p>
          </div>
        </div>

        <div class="gallery">
          <div class="px-6" v-for="category in primaryGroupObjects">
            <img
                alt="..."
                class="max-w-full rounded-lg shadow-lg"
                :src="category.pictureData">

            <div class="pt-6 text-center">
              <h5 class="text-xl font-bold">{{ category.name }}</h5>
              <div class="mt-6">
                <div class="py-6 px-3 mt-32 sm:mt-0">
                  <button
                      class="bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      v-on:click="redirectToSubgroupPageWith(category.id)">
                    Shop now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          </div>
          <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          </div>
        </div>

      </div>
    </section>

    <section class="pb-20 relative block bg-blueGray-800">
      <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style="">
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

