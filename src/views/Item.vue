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
          <footer-small absolute />
        </section>
      </main>
    </div> <section class="pb-20 bg-blueGray-200 -mt-24">
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
              <h6 class="text-xl font-semibold">Awarded Agency</h6>
              <p class="mt-2 mb-4 text-blueGray-500">
                Divide details about your product or agency work into parts.
                A paragraph describing a feature will be enough.
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
              <h6 class="text-xl font-semibold">Free Revisions</h6>
              <p class="mt-2 mb-4 text-blueGray-500">
                Keep you user engaged by providing meaningful information.
                Remember that by this time, the user is curious.
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
              <h6 class="text-xl font-semibold">Verified Company</h6>
              <p class="mt-2 mb-4 text-blueGray-500">
                Write a few lines about each one. A paragraph describing a
                feature will be enough. Keep you user engaged!
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
            Working with us is a pleasure
          </h3>
          <p
              class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600"
          >
            Don't let your uses guess by attaching tooltips and popoves to
            any element. Just make sure you enable them first via
            JavaScript.
          </p>
          <p
              class="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600"
          >
            The kit comes with three pre-built pages to help you get started
            faster. You can change the text and images and you're good to
            go. Just make sure you enable them first via JavaScript.
          </p>
          <router-link to="/" class="font-bold text-blueGray-700 mt-8">
            Check Vue Notus!
          </router-link>
        </div>

        <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
          <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500"
          >
            <img
                alt="..."
                src="https://lh3.googleusercontent.com/c4zP9WzKlR0K5kG3awHSK3lLCOD1uX9YViY7j0CB-R164Y4GRqD8EGyLOgPcAUB3yoD7W-15VH7bS7PJVs6F2M6feg8pDvR5EiTQpP8kYybMMVPP9Y-S7CH7eSATXFGNd17ae98KSX9fxEUoqSu8MBiUCCp2_QtD5A8YLFEolWKuFu9pzxhyZCvy-aXAniMuu2x-lYUXJUWEbyn9dSHG7FHHKGm8X064IpPIjcXEf_HHNDe1X21A7c5VvrTiUBplFlEpTxMIOFscveBosSEoqQKoA3Rivvs0yEXq97JSGwfqsCxNFEQdD1oOzKLXkywN_6udI6FwtooXGbich5vTjAJHRI2pxO40JCQn2Tn3vzqDW50PKuXM-UOBLiEeSikasxiBoWFbt1tM-c50xwDc9hFXdGEzS0X018PcCWSjAj8e3dewrsrs7sOnYusfzxKw5rIwscFsEZ76hBLl6RwP73EbNbuCQTFJDbkYLcI0rhwrQ0WnNxxb5Nb435ipYZxqtjvle76WZ4SPhUcZY9bCS-9wERw3Oq5ygavsF_dapgx1Vk0x3sH68Z5ruhP-BLzxVvFJ3FM5cjRUsg7p5cTgs1hZWfT8y1Y0eY55iYi6k6UX0dDhLR7L6EH1_cKcNTpmBseNXR6S3J8I0yO_t7wjxkZZwdEVZ1lMMMEuloF5T1Oc0lTDi7o5CwoZh9gyEJ7LZJPn1fsHAQ4mkkJJfsKsr6-x=s903-no?authuser=0"
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
                Top Notch Services
              </h4>
              <p class="text-md font-light mt-2 text-white">
                The Arctic Ocean freezes every winter and much of the
                sea-ice then thaws every summer, and that process will
                continue whatever happens.
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
                src="https://lh3.googleusercontent.com/4E1RZGM8NT5VJQ1afCnPRp0UqH1RnUb8LHE7r9DGl5N9UVd_wBlLXMly2sX7XY-wjW9fLb4810_XbyDA9QS6VH3TmsIehRtehkXYQptDxV4TBZzQ96-hbNOZiOi3wMCwJVqCjlqexkJ55gaZNLnZSk8swWPdgO8SwzN1Hx5eC0Wl_-_aFEM-Ve5ZpyM0sSqc7YBCAqP0jUFDDVzdiXpvzZOmLY_pFOMlKk2hRM3vmBDaJnzFnwx0g1ly9fnrh1G31RcVJvB5SubN3re43uIk7E76V56pHm1RbbNRedBolQCB0Gfxz27rT9kQ-mjoUqi9CLbuqHFmZSK8fAkPlNoqTB5gsvi0NBsUvPysr0kUI04ZyMTVfoCVBZlBcad4R24scm8_ep-upn_zjTt7JDsf5B9jZBWHq0oG4Vj7R9MMcTqy1LbQqXljqR8j9QVpXaJDuVLtV3768o1fEy0XdzZvgpFAfUTm1280TJuzyEC3Zu7pGfwx7TuYfG8cgQmHLuUBK7Sh3CsKDnaMn9CQ6S9Rx9_iFDX-35DPCiOgJ1ai4paaIpKUs2zO81QYkRDmL-8HmmX6oeFhADxnHh3MpwpeMM3un3BnTlhCyGmLddqehZlXzlulMiF4S8uOgHiosd4hjJnkI2dcayP61XfPQ6enTNHPoZWNv7UdLGLI1ZJuNA23-9yJ1LH-_oUBx8G0XQ5OiKQkbjGmJU0rmtOgGONKMNm2=s903-no?authuser=0"
            />
          </div>
          <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div class="md:pr-12">
              <div
                  class="text-emerald-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-emerald-300"
              >
                <i class="fas fa-rocket text-xl"></i>
              </div>
              <h3 class="text-3xl font-semibold">A growing company</h3>
              <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                The extension comes with three pre-built pages to help you get
                started faster. You can change the text and images and you're
                good to go.
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
                        Carefully crafted components
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
                        Amazing page examples
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
    <br>
    <br>

    ITEM TITLE: {{ itemObject.name }} <br>
    ITEM SELLER: {{ itemObject.sellerName }} <br>
    ITEM DESCRIPTION: {{ itemObject.description }} <br>
    ITEM PRICE: {{ itemObject.price }} <br>
    <br>
    <input type="number" value="1" v-model="itemQuantity">
    <button v-on:click="addOrderItemToDatabase">   ADD TO CART</button>
    <br>
    <br>
    <br>
    <br>
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
      itemQuantity: '',
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

