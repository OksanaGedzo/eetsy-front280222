<template>
  <div>

    <main class="profile-page">
      <section class="relative block h-500-px">
        <div
            class="absolute top-0 w-full h-full bg-center bg-cover"
            style="
           background-image: url('https://viraito.ee/wp-content/uploads/2019/11/banner01-2048x798.jpg');
         "
        >
        </div>
        <div
            class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
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
                class="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section class="relative py-16 bg-blueGray-200">
        <div class="container mx-auto px-4">
          <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
          >
            <div class="px-6">
              <div class="flex flex-wrap justify-center">
                <div
                    class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"
                >
                  <div class="relative">
                    <img
                        alt="..."
                        src="https://lh3.googleusercontent.com/pw/AM-JKLVKiw21hutwSjjd4KXSW8VItkhV_z6h4VwhaAOdW1RXK57S4ccLcTc4T7WrbS7lV3qRt4ZVMFmzdrDnvu_Rpg_kv7_At7wWtxcOmUAYBdYEFPjpzu1gh4jaZmWm9rTASsVuHuXosxJc88-cQcUI00p5=s903-no?authuser=0"
                        class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                    />
                  </div>
                </div>
                <div
                    class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"
                >
                  <div class="py-6 px-3 mt-32 sm:mt-0">
                    <button
                        class="bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                    >
                      My googs
                    </button>
                  </div>
                </div>
                                <div class="w-full lg:w-4/12 px-4 lg:order-1">
                                  <div class="flex justify-center py-4 lg:pt-4 pt-8">
                                    <div class="mr-4 p-3 text-center">
                                     <span
                                         class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                                     >
                                       58
                                     </span>
                                      <span class="text-sm text-blueGray-400">Happy customers</span>
                                    </div>
                                    <div class="mr-4 p-3 text-center">
                                     <span
                                         class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                                     >
                                       118
                                     </span>
                                      <span class="text-sm text-blueGray-400">Goods</span>
                                    </div>
                                    <div class="lg:mr-4 p-3 text-center">
                                     <span
                                         class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                                     >
                                       1788
                                     </span>
                                      <span class="text-sm text-blueGray-400">Likes</span>
                                    </div>
                                  </div>
                                </div>
              </div>
              <div class="text-center mt-12">
                <h3
                    class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2"
                >

                </h3>
                <div
                    class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"
                >
                  <i
                      class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"
                  ></i>


                </div>
                <div class="mb-2 text-blueGray-600 mt-10">
                  <i
                      class="fas fa-briefcase mr-2 text-lg text-blueGray-400"
                  ></i>


                </div>
                <div class="mb-2 text-blueGray-600">
                  <i
                      class="fas fa-university mr-2 text-lg text-blueGray-400"
                  ></i>
                  <!--                  Tere tulemast!-->
                </div>
              </div>
              <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">

                    <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                      <div class="w-full lg:w-6/12 px-4">
                        <div
                            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200"
                        >
                          <div class="flex-auto p-5 lg:p-10">
                            <h4 class="text-2xl font-semibold">My database</h4>
                            <p class="leading-relaxed mt-1 mb-4 text-blueGray-500">Appload something beautiful</p>
                            <br>
                            <div>
                              <input class="bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                     type="file" @change="handleImage" accept="image/x-png,image/jpeg">
                              <br>
                              <br>
                              <img :src="piltObject.data"> <br>
                              <button class="bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                      type="button"  v-on:click="sendImageDataToBackend">Upload To Database</button>
                              <br>
                              <br>
                              <img :src="piltBackendist">
                              <br>
                              <button class="bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                      type="button" v-on:click="requestLastImgFromBackend">Receive Last Image From Database</button>
                            </div>
                            <br>
                            <br>
                            <div>
                              <ul>
                                <router-link class="bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                             type="button"  to="/itemCrud">Add or Edit or Remove Items</router-link>
                              </ul>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <!--    <footer-component/>-->
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

<script>
export default {
  name: "Admin",
  data() {
    return {
      pilt: null,
      piltBackendist: null,
      piltObject: {
        "data": null
      },
    }
  },
  methods: {
    handleImage(event) {
      const selectedImage = event.target.files[0];
      this.createBase64Image(selectedImage);
    },

    redirectToItemCrud: function () {
      this.$router.push({name: 'ItemCrud'})
    },

    createBase64Image(fileObject) {
      //reader tundub töötavat tagurpidi? Enne läheb käima kõige viimane rida reader.readAsDataURL(fileObject) ... vist
      const reader = new FileReader();
      reader.onload = () => {
        //pärast *edukat* laadimist antakse meie 'pilt' failile tema lõplik väärtus ning konsooli prinditakse testiks toores info
        this.piltObject.data = reader.result;
        console.log(this.piltObject)
      };
      reader.onerror = function (error) {
        alert(error);
      }
      reader.readAsDataURL(fileObject);
    },

    sendImageDataToBackend: function () {
      this.$http.post("/upload/image", this.piltObject
      ).then(response => {
        console.log(this.piltObject)
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    requestLastImgFromBackend: function () {
      this.$http.get("/receive/image", {}
      ).then(response => {
        this.piltBackendist = response.data.data //lgtm
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

  }
}
</script>

<!--<style scoped>-->

<!--</style>-->