<template>
  <div>
    <h1>Create account</h1>
    <div>
      username <input type="text" v-model="userName">
    </div>
    <br>
    <div>
      password <input type="text" v-model="password1">
    </div>
    <br>
    <div>
      confirm password <input type="text" v-model="password2">
    </div>
    <br>
    <div>
      first name <input placeholder="firstName" v-model="contactObject.firstName">
    </div>
    <br>
    <div>
      last name <input placeholder="lastName" v-model="contactObject.lastName">
    </div>
    <br>
    <div>
      address <input placeholder="address" v-model="contactObject.address">
    </div>
    <br>
    <div>
      zip code <input placeholder="postIndex" v-model="contactObject.postIndex">
    </div>
    <br>
    <div>
      country <input placeholder="country" v-model="contactObject.country">
    </div>
    <br>
    <div>
      phone number <input placeholder="phoneNumber" v-model="contactObject.phoneNumber">
    </div>
    <br>
    <div>
      e-mail <input placeholder="email" v-model="contactObject.email">
    </div>
    <br>
    <div>
      <button v-on:click="checkThatPasswordIsSame">create user account</button>
    </div>

  </div>

</template>

<script>
export default {
  name: "Signup",
  data: function () {
    return {
      userName: '',
      password1: '',
      password2: '',
      userExists: null,
      contactObject: {
        "firstName": null,
        "lastName": null,
        "address": null,
        "postIndex": null,
        "country": null,
        "phoneNumber": null,
        "email": null
      },
      userObject: {
        "contact": null,
        "userName": null,
        "password": null
      },
    }
  },
  methods: {
    checkIfUserExists: function () {
      this.$http.get("/check/if/user/exist", {
            params: {
              username: this.userName
            }
          }
      ).then(response => {
        this.userExists = response.data
        if (this.userExists === false) {
          this.createNewUser()
          alert("New user is created")
          this.redirectToLoginPage()
        }

        console.log(response.data);
      }).catch(error => {
        console.log(error)
      })
    },
    checkThatPasswordIsSame: function () {
      if (this.password1 === this.password2) {
        this.checkIfUserExists()
      } else {
        alert("passwords do not match")
      }
    },
    createNewUser: function () {
      let user = {
        contact: this.contactObject,
        userName: this.userName,
        password: this.password1
      }
      this.$http.post("/add/new/user", user
      ).then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    redirectToLoginPage: function () {
      this.$router.push({name: 'Login'})
    },
  }


}
</script>

<style scoped>

</style>