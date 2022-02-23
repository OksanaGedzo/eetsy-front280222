<template>
  <div>
    <h1>Account information</h1>
    <div>
    </div>
    <div>
      <table>
        <tr>
          <th></th>
          <th></th>
        </tr>
        <tr><td>First Name</td><td><input value="firstName" v-model="firstName"></td></tr>
        <tr><td>Last Name</td><td><input value="lastName" v-model="lastName"></td></tr>
        <tr><td>Address</td><td><input value="address" v-model="address"></td></tr>
        <tr><td>Zip code</td><td><input value="postalIndex" v-model="postalIndex"></td></tr>
        <tr><td>Country</td><td><input value="country" v-model="country"></td></tr>
        <tr><td>☎️</td><td><input value="phoneNumber" v-model="phoneNumber"></td></tr>
        <tr><td>📧</td><td><input value="email" v-model="email"></td></tr>


      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Account",
  data: function () {
    return {
      userId: sessionStorage.getItem("UserIdToken"),
      user:null,
      firstName:null,
      lastName:null,
      address:null,
      postalIndex:null,
      country:null,
      phoneNumber:null,
      email:null

    }
  },
  methods: {
    populateContactFields: function () {
      this.firstName = this.user.contact.firstName
      this.lastName = this.user.contact.lastName
      this.address = this.user.contact.address
      this.postalIndex = this.user.contact.postIndex
      this.country= this.user.contact.country
      this.phoneNumber= this.user.contact.phoneNumber
      this.email= this.user.contact.email

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
    }

  },
  beforeMount() {
    this.isUserLoggedIn()
  }

}
</script>


<style scoped>

</style>