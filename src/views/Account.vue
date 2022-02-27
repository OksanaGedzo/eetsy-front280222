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
                            <h4 class="text-2xl font-semibold">
                              My account
                            </h4>
                            <p class="leading-relaxed mt-1 mb-4 text-blueGray-500">
                              Tere, kallis!
                            </p>


                            <div>
                              <table>
                                <!--        <tr>-->
                                <!--&lt;!&ndash;          <th></th>&ndash;&gt;-->
                                <!--&lt;!&ndash;          <th></th>&ndash;&gt;-->
                                <!--        </tr>-->
                                <tr>
                                  <td>First Name</td>
                                  <td><input value="firstName" v-model="firstName"></td>
                                </tr>
                                <tr>
                                  <td>Last Name</td>
                                  <td><input value="lastName" v-model="lastName"></td>
                                </tr>
                                <tr>
                                  <td>Address</td>
                                  <td><input value="address" v-model="address"></td>
                                </tr>
                                <tr>
                                  <td>Zip code</td>
                                  <td><input value="postalIndex" v-model="postalIndex"></td>
                                </tr>
                                <tr>
                                  <td>Country</td>
                                  <td><input value="country" v-model="country"></td>
                                </tr>
                                <tr>
                                  <td>☎️</td>
                                  <td><input value="phoneNumber" v-model="phoneNumber"></td>
                                </tr>
                                <tr>
                                  <td>📧</td>
                                  <td><input value="email" v-model="email"></td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td><button v-on:click="updateUserInfo">Update account</button></td>
                                </tr>
                                <br>

                              </table>
                            </div>


                            <!--                            <div class="relative w-full mb-3 mt-8">-->
                            <!--                              <input-->
                            <!--                                  type="text"-->
                            <!--                                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"-->
                            <!--                                  placeholder="Login" v-model="userName"-->
                            <!--                              />-->
                            <!--                            </div>-->
                            <!--                            <div class="relative w-full mb-3">-->
                            <!--                              <input-->
                            <!--                                  type="text"-->
                            <!--                                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"-->
                            <!--                                  placeholder="Password" v-model="password1"-->
                            <!--                              />-->
                            <!--                            </div>-->
                            <!--                            <div class="relative w-full mb-3">-->
                            <!--                              <input-->
                            <!--                                  type="text"-->
                            <!--                                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"-->
                            <!--                                  placeholder="Confirm password" v-model="password2"-->
                            <!--                              />-->
                            <!--                            </div>-->
                            <!--                            <div class="relative w-full mb-3">-->
                            <!--                              <input-->
                            <!--                                  type="text"-->
                            <!--                                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"-->
                            <!--                                  placeholder="First Name" v-model="contactObject.firstName"-->
                            <!--                              />-->
                            <!--                            </div>-->
                            <!--                            <div class="relative w-full mb-3">-->
                            <!--                              <input-->
                            <!--                                  type="text"-->
                            <!--                                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"-->
                            <!--                                  placeholder="Last Name" v-model="contactObject.lastName"-->
                            <!--                              />-->
                            <!--                            </div>-->
                            <!--                            <div class="relative w-full mb-3">-->
                            <!--                              <input-->
                            <!--                                  type="text"-->
                            <!--                                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"-->
                            <!--                                  placeholder="Address" v-model="contactObject.address"-->
                            <!--                              />-->
                            <!--                            </div>-->
                            <!--                            <div class="relative w-full mb-3">-->
                            <!--                              <input-->
                            <!--                                  type="text"-->
                            <!--                                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"-->
                            <!--                                  placeholder="Post Index" v-model="contactObject.postIndex"-->
                            <!--                              />-->
                            <!--                            </div>-->
                            <!--                            <div class="relative w-full mb-3">-->
                            <!--                              <input-->
                            <!--                                  type="text"-->
                            <!--                                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"-->
                            <!--                                  placeholder="Country" v-model="contactObject.country"-->
                            <!--                              />-->
                            <!--                            </div>-->
                            <!--                            <div class="relative w-full mb-3">-->
                            <!--                              <input-->
                            <!--                                  type="text"-->
                            <!--                                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"-->
                            <!--                                  placeholder="Phone Number" v-model="contactObject.phoneNumber"-->
                            <!--                              />-->
                            <!--                            </div>-->
                            <!--                            <div class="relative w-full mb-3">-->
                            <!--                              <input-->
                            <!--                                  type="text"-->
                            <!--                                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"-->
                            <!--                                  placeholder="e-mail" v-model="contactObject.email"-->
                            <!--                              />-->
                            <!--                            </div>-->


                            <!--                            <div class="text-center mt-6">-->
                            <!--                              <button-->
                            <!--                                  class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"-->
                            <!--                                  type="button" v-on:click="checkThatPasswordIsSame"-->
                            <!--                              >-->
                            <!--                                Create user account-->
                            <!--                              </button>-->
                            <!--                            </div>-->
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
  name: "Account",
  data: function () {
    return {
      userId: sessionStorage.getItem("UserIdToken"),
      user: null,
      firstName: null,
      lastName: null,
      address: null,
      postalIndex: null,
      country: null,
      phoneNumber: null,
      email: null,
    }
  },
  methods: {
    populateContactFields: function () {
      this.firstName = this.user.contact.firstName
      this.lastName = this.user.contact.lastName
      this.address = this.user.contact.address
      this.postalIndex = this.user.contact.postIndex
      this.country = this.user.contact.country
      this.phoneNumber = this.user.contact.phoneNumber
      this.email = this.user.contact.email

    },
    isUserLoggedIn: function () {
      if (sessionStorage.getItem("UserIdToken") === null) {
        alert("Please log in")
      } else {
        this.getUserInfo()
      }
    },
    getUserInfo: function () {
      this.$http.get("get/user/info/by/id", {
            params: {
              id: this.userId
            }
          }
      ).then(response => {
        this.user = response.data
        this.populateContactFields()
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    updateUserInfo: function () {
      let contactObject= {
        "firstName": this.firstName,
        "lastName": this.lastName,
        "address": this.address,
        "postIndex": this.postalIndex,
        "country": this.country,
        "phoneNumber": this.phoneNumber,
        "email": this.email,
        "id":this.user.contact.id
      }
      this.$http.put("/change/user/contact/info", contactObject
      ).then(response => {
        alert("Contact information is updated")
        this.redirectToHomePage()
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    redirectToHomePage: function () {
      this.$router.push({name: 'Home'})
    },
  },
  beforeMount() {
    this.isUserLoggedIn()
  }

}
</script>


<style scoped>

</style>

