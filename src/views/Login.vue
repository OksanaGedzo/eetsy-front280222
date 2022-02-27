<template>
  <div>
    <section class="relative block py-24 lg:pt-0 bg-blueGray-800">
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <div class="container mx-auto px-4">
        <br>
        <br>
        <br>
        <br>
        <br>
        <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
          <div class="w-full lg:w-6/12 px-4">
            <div
                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200"
            >
              <div class="flex-auto p-5 lg:p-10">
                <h4 class="text-2xl font-semibold">
                  Enter login details
                </h4>
                <p class="leading-relaxed mt-1 mb-4 text-blueGray-500">
                  Welcome!
                </p>
                <div class="relative w-full mb-3 mt-8">
                  <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="full-name"
                  >
                    User Name
                  </label>
                  <input
                      type="text"
                      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Full Name" v-model="userName"
                  />
                </div>

                <div class="relative w-full mb-3">

                  <input
                      type="password"
                      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="password" v-model="userPassword"
                  />
                </div>


                <div class="text-center mt-6">
                  <button
                      class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button" v-on:click="loginUser()"
                  >
                    LOG IN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
<!--    Enter login details-->
<!--    <div>-->
<!--      User Name <input v-model="userName">-->
<!--      User Password <input type="password" v-model="userPassword">-->
<!--      <br>-->
<!--      <br>-->
<!--      <button v-on:click="loginUser()">LOG IN</button>-->
<!--      <br>-->

<!--    </div>-->

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
import {eventBus} from "@/main.js";
export default {
  name: "Login",
  data: function () {
    return {
      userName: '',
      userPassword: '',
      userId: '',
      orderId: '',
      testObject: {one: 1, two: 2, three: 'kolm'},
      testObjectFromToken: {}
    }

  },
  methods: {
    loginUser: function () {
      this.$http.get("/login", {
            params: {
              username: this.userName,
              password: this.userPassword
            }
          }
      ).then(response => {

        eventBus.$emit('fireMethod', 'misiganes tekst või väärtus vms');

        this.userId = response.data
        //UserIdTokenit kutsume välja App.vue meetodis
        sessionStorage.setItem('UserIdToken', this.userId);
        this.checkForOpenUserOrder(this.userId);
        alert("Login success.")
        this.redirectToMainPage()
        console.log(response.data)
      }).catch(error => {
        alert("USER OR PASSWORD WRONG")
        console.log(error)
      })
    },
    redirectToMainPage: function () {
      this.$router.push({name: 'Home'})
    },
    checkForOpenUserOrder: function () { //todo
      this.$http.get("/check/for/open/order/by/user/id", {
            params: {
              userId: this.userId
            }
          }
      ).then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    }

  },
  beforeMount() {

  }

}
</script>

<!--<style scoped>-->

<!--</style>-->