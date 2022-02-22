<template>
    <div>
      <h1>create account</h1>
      <div>
        username <input type="text"></div>
      <br>
      <div>
        password <input type="text">
      </div>
      <br>
      <div>
        confirm password <input type="text">
      </div>
      <br>
      <br>
      <br>
      <div>
        <button v-on:click="checkThatPasswordIsSame">proceed to contact details </button>
      </div>
    </div>
</template>

<script>
export default {
  name: "Signup",
  data: function () {
    return {
      userName: '',
      userPassword: '',
      password1:'',
      password2:'',
      userExists:null,

    }
  },
  methods:{
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
      var user= {contact:this.contact,
        username:this.username,
        password:this.password
      }
      this.$http.post("/some/path", this.someDtoObject
      ).then(response => {
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