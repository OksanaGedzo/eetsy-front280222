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
    <section class="pb-20 bg-blueGray-200 -mt-24">
      <!--todo-->

      <!--todo-->

      <div class="container mx-auto px-4">
        <div class="flex flex-wrap ">


          <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center ">

            <div class="flex flex-wrap items-center mt-32 ">
              <h3 class="text-3xl mb-2 font-semibold leading-normal ">
                About the product:
              </h3>

              <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600 ">
              {{ itemObject.name }}<br>
              {{ itemObject.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="itemGallery">
        <div class="itemGallery-panel lg:self-center" v-for="image in itemObject.pictures">
          <img :src="image.data"><br>
        </div>
      </div>
    </section>
    <br>
    <p class="mt-1 text-blueGray-400 uppercase font-semibold" style="  font-size: 1.275rem;  line-height: 1.25rem;">
      Price {{ itemObject.price }} €
    </p>
    <br>
    <input type="number" value="1" v-model="itemQuantity">
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

