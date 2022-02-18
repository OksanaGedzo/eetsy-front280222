<template>
<div>
  This is a login page.

  <div>
    User Name <input v-model="userName">
    User Password <input type="password" v-model="userPassword">
    <br>
    <button v-on:click="loginUser()">LOG IN</button>
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
      userId: ''
    }

  },
  methods: {
    loginUser: function () {
      this.$http.get("/login", {
            params: {
              username: this.userName,
              password: this.userPassword,
            }
          }
      ).then(response => {
        this.userId = response.data
        localStorage.setItem('UserIdToken', this.userId);
        alert("Login success.")
        this.redirectToMainPage(this.userId)
        console.log(response.data)
      }).catch(error => {
        alert("USER OR PASSWORD WRONG")
        console.log(error)
      })
    },
    redirectToMainPage: function (userId) {
      this.$router.push({name: 'Home', query: {userId: userId}})
    },
  }

}
</script>

<style scoped>

</style>