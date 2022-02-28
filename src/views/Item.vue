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
    </div> <section class="pb-20 bg-blueGray-200 -mt-24">
<!--todo-->
    <div class="itemGallery">
      <div class="itemGallery-panel" v-for="image in itemObject.pictures">
        <img :src="image.data"><br>
      </div>
    </div>
    <!--todo-->

    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
          <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
          >
            <div class="px-4 py-5 flex-auto">
              <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
              >
                <i class="fas fa-award"></i>
              </div>
              <h6 class="text-xl font-semibold"> Point 1 <br></h6>
              <p class="mt-2 mb-4 text-blueGray-500">
<!--                TODO POINT TO PRIMARY GROUP-->
                Handcraft
              </p>
            </div>
          </div>
        </div>

        <div class="w-full md:w-4/12 px-4 text-center">
          <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
          >
            <div class="px-4 py-5 flex-auto">
              <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400"
              >
                <i class="fas fa-retweet"></i>
              </div>
              <h6 class="text-xl font-semibold"> Point 2 <br></h6>
              <p class="mt-2 mb-4 text-blueGray-500">
                Real wool
              </p>
            </div>
          </div>
        </div>

        <div class="pt-6 w-full md:w-4/12 px-4 text-center">
          <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
          >
            <div class="px-4 py-5 flex-auto">
              <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400"
              >
                <i class="fas fa-fingerprint"></i>
              </div>
              <h6 class="text-xl font-semibold"> Point 3 <br></h6>
              <p class="mt-2 mb-4 text-blueGray-500">
                Unique


              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap items-center mt-32">
        <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
          <div
              class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
          >
            <i class="fas fa-user-friends text-xl"></i>
          </div>
          <h3 class="text-3xl mb-2 font-semibold leading-normal">
            About good:
          </h3>
          <p
              class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600"
          >
            Very good feedback
          </p>
          <p
              class="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600"
          >
            Title from database: {{ itemObject.name }}

            Material: 20% merino, 80% cotton

            A soft, lightweight and warm hat made of high-quality Estonian yarn.
            Perfect for cool weather all year round. It is easy to combine it with a coat, jacket or blazer.
            Looks good on both men and women.
            There is an additional invisible elastic in the brim.
            Attached to the brim, there is a white cotton ribbon of 2.5 x 12 cm with the University of Tartu logo.
            The long ribbon allows folding the brim twice.
            The hat has been designed in Estonia and handmade following the zero-waste method.
            Machine washable at a low spin cycle. Not prone to pilling in wear or wash.


          </p>
          <router-link to="/" class="font-bold text-blueGray-700 mt-8">
            Be unique!
          </router-link>
        </div>

        <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
          <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500"
          >
            <img
                alt="..."
                src="https://lh3.googleusercontent.com/5rWgBQiz1hhEIFs4z0ThpkQwZzmOE6gQCKAVB7jNnjIV-uMs7tZHnGe_J2vYkUkqKo_o49Ep47M38KPM8kV4OkzhzebQmmOPMzO6AdW92yQ_SCmxM2zd3TXMkro8XphVa-GSEO7I1tcq1c-qHjjsOBI3TlO3_xbfDiq7fR7OD6_BnQzl_SpmXlXqgwo_oydfnOBXKray_QfrPpWfm-vDdzXeCM629heI2Fp9elJ9U2fLByxU0GJEmU8gxLM7PxmntDV3oKSBIHM7yjoI4KFGXwgnDDuu1N51t_qLzQpH6E8KlLUWkGx67wv0UR22Or2t-V_0tHFRWAT3uUYualH8_GMNZsOyc9rBStB1UN7SAx3AB7UVdnuax9ElIxMG133OC4igaAySlPxWQlMTzk6YKinRqtDjzxA8ZSM6g1PbTg3QMPzicweXH1VnGJlXNAd98A1OM63Kowiqsxp1t4SGpxO_Hl5CEbnsK4z0zg-tsmf-wSe8Q2NKVQOClywcKcyoDqvAOneNEF_3JP5x6jivH-K_XSOC5JLnwj3AHBhouk9xnQ2enGpAYKACj1bC5oDrVLFMMO-ZOLKr9boNVRzuzRAfEgcVQLGk0z_fBg7b66L9Inmnxe3C6PsmhmS5STKOvnHz1IX1ZbP38MgqPTcsUN3UMi48bmWcjVDVMjJCfadjuU26c3Z6wXriyFvTaRohG-1bpb6JoE5WlBVkRgXiP2Zo=s903-no?authuser=0"
                class="w-full align-middle rounded-t-lg"
            />
            <blockquote class="relative p-8 mb-4">
              <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  class="absolute left-0 w-full block h-95-px -top-94-px"
              >
                <polygon
                    points="-30,95 583,95 583,65"
                    class="text-emerald-500 fill-current"
                ></polygon>
              </svg>
              <h4 class="text-xl font-bold text-white">
                National woolen hat
              </h4>
              <p class="text-md font-light mt-2 text-white">
                {{ itemObject.price }} euro
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>
    <section class="relative py-20">
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
              class="text-white fill-current"
              points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div class="container mx-auto px-4">
        <div class="items-center flex flex-wrap">
          <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img
                alt="..."
                class="max-w-full rounded-lg shadow-lg"
                src="https://lh3.googleusercontent.com/5rWgBQiz1hhEIFs4z0ThpkQwZzmOE6gQCKAVB7jNnjIV-uMs7tZHnGe_J2vYkUkqKo_o49Ep47M38KPM8kV4OkzhzebQmmOPMzO6AdW92yQ_SCmxM2zd3TXMkro8XphVa-GSEO7I1tcq1c-qHjjsOBI3TlO3_xbfDiq7fR7OD6_BnQzl_SpmXlXqgwo_oydfnOBXKray_QfrPpWfm-vDdzXeCM629heI2Fp9elJ9U2fLByxU0GJEmU8gxLM7PxmntDV3oKSBIHM7yjoI4KFGXwgnDDuu1N51t_qLzQpH6E8KlLUWkGx67wv0UR22Or2t-V_0tHFRWAT3uUYualH8_GMNZsOyc9rBStB1UN7SAx3AB7UVdnuax9ElIxMG133OC4igaAySlPxWQlMTzk6YKinRqtDjzxA8ZSM6g1PbTg3QMPzicweXH1VnGJlXNAd98A1OM63Kowiqsxp1t4SGpxO_Hl5CEbnsK4z0zg-tsmf-wSe8Q2NKVQOClywcKcyoDqvAOneNEF_3JP5x6jivH-K_XSOC5JLnwj3AHBhouk9xnQ2enGpAYKACj1bC5oDrVLFMMO-ZOLKr9boNVRzuzRAfEgcVQLGk0z_fBg7b66L9Inmnxe3C6PsmhmS5STKOvnHz1IX1ZbP38MgqPTcsUN3UMi48bmWcjVDVMjJCfadjuU26c3Z6wXriyFvTaRohG-1bpb6JoE5WlBVkRgXiP2Zo=s903-no?authuser=0"
            />
          </div>
          <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div class="md:pr-12">
              <div
                  class="text-emerald-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-emerald-300"
              >
                <i class="fas fa-rocket text-xl"></i>
              </div>
              <h3 class="text-3xl font-semibold">A growing Estonian company</h3>
              <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                About seller from database: {{ itemObject.sellerName }}

                Mekoome comes from „me koome“ („we knit“ in Estonian) and means that we make knitwear.

                In 2016, Larissa Kondina, an architect by training, decided to create a brand of knitted clothes.
                She wanted to join her knitting hobby and the digital design skills she acquired while studying architecture
                at the Estonian Academy of Arts and the University of Applied Arts Vienna.

                Mekoome creates high-quality and durable products with elaborate design.
                The entire production process takes place in our Tallinn studio – from design to the knitting of finished products,
                ensuring excellent flexibility. The limited number of manufactured products and an individual approach to customers’
                needs allow us to ensure the quality of products.

                As we carefully select the best yarns, our knits are durable, soft and pleasant to touch.
                Even after several years of active use, they will retain their shape and will not lose their beauty.

                We follow the principle of zero-waste production: we aim for the rational use of resources and respect
                the world around us. We do not simply cut out parts from knitted fabric, throwing out the scraps.
                Each piece is knitted to shape and only 3-4 cm long yarn ends remain, which will also find use.
              </p>
              <ul class="list-none mt-6">
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                       <span
                           class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                       >
                         <i class="fas fa-fingerprint"></i>
                       </span>
                    </div>
                    <div>
                      <h4 class="text-blueGray-500">
                        Carefully crafted
                      </h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                       <span
                           class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                       >
                         <i class="fab fa-html5"></i>
                       </span>
                    </div>
                    <div>
                      <h4 class="text-blueGray-500">
                        Amazing examples
                      </h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                       <span
                           class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                       >
                         <i class="far fa-paper-plane"></i>
                       </span>
                    </div>
                    <div>
                      <h4 class="text-blueGray-500">Dynamic components</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <br>
    <br>

    <br>
    <p
        class="mt-1 text-sm text-blueGray-400 uppercase font-semibold"
    >
      Price {{ itemObject.price }} EURO
    </p>
<!--    PRICE: {{ itemObject.price }} <br>-->
    <br>
    <input type="number" value="1" v-model="itemQuantity">
    <!--    <button v-on:click="addOrderItemToDatabase">   ADD TO CART</button>-->
    <!--    <br>-->

    <button
        class="bg-emerald-500 text-white active:bg-emerald-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
        type="button" v-on:click="addOrderItemToDatabase"
    >
      <i class="fas fa-arrow-alt-circle-down"></i> ADD TO SHOPPING CART
    </button>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <!--    <br>-->
    <!--    <input type="number" value="1" v-model="itemQuantity">-->
    <!--    <button v-on:click="addOrderItemToDatabase">   ADD TO CART</button>-->
    <!--    <br>-->
    <!--    <br>-->


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

<script>
export default {
  name: "Item",
  data: function () {
    return {
      itemId: this.$route.query.id,
      itemObject: {},
      itemQuantity: 1,
      userIsLoggedIn: false,
      itemObjectRequest: {
        "userId": null,
        "itemId": null,
        "quantity": null,
      }
    }
  },
  methods: {
    getItemById: function (itemId) {
      this.$http.get("/get/product/by/id", {
            params: {
              id: itemId
            }
          }
      ).then(response => {
        this.itemObject = response.data,
            console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

    isUserLoggedIn: function () {
      if (sessionStorage.getItem("UserIdToken") === null) {
        this.userIsLoggedIn = false;
        return false;
      } else {
        this.userIsLoggedIn = true;
        return true;
      }
    }
    ,
    addOrderItemToDatabase: function () {
      if (this.isUserLoggedIn) {
        this.itemObjectRequest.itemId = this.itemId
        this.itemObjectRequest.userId = sessionStorage.getItem("UserIdToken")
        this.itemObjectRequest.quantity = this.itemQuantity
        this.$http.post("/add/orderitem/to/cart", this.itemObjectRequest
        ).then(response => {
          console.log(response.data)
          alert(response.data.message + "" + response.data.error)
        }).catch(error => {
          console.log(error)
        })
      } else {
        alert("please log in")
      }
    }
  },
// computed: {
//   dataUrl() {
//     return 'data:image/jpeg;base64,' + btoa(
//         new Uint8Array(this.itemObject.seller.logoPicture)
//             .reduce((data, byte) => data + String.fromCharCode(byte), '')
//     );
//   }
// },
  beforeMount() {
    this.getItemById(this.itemId)
  }
}
</script>

