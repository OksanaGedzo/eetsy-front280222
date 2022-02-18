<template>
  <div>
    This is a login page.

    <div>
      User Name <input v-model="userName">
      User Password <input type="password" v-model="userPassword">
      <br>
      <button v-on:click="loginUser()">LOG IN</button>
      <br>
      testObjectFromToken value:
      <input disabled v-model="testObjectFromToken">

    </div>
  </div>
</template>

<script>
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
        this.userId = response.data

        //UserIdTokenit kutsume välja App.vue meetodis
        localStorage.setItem('UserIdToken', this.userId);
        localStorage.setItem('TestObjectToken', this.testObject);
        this.testObjectFromToken = localStorage.getItem('TestObjectToken')
        //Pole 100% kindel kas objektiga töötab või mitte.
        alert("Login success.")
        this.redirectToMainPage()
        console.log(response.data)
      }).catch(error => {
        alert("USER OR PASSWORD WRONG")
        console.log(error)
      })
    },
    redirectToMainPage: function () {
      this.$router.push({name: 'About'})
    },
    checkForOpenUserOrder: function () { //todo
      this.$http.get("/some/path", {
            params: {
              userId: this.userId
            }
          }
      ).then(response => {
        this.orderId = response.data
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    }

  }

}
</script>

<style scoped>

</style>