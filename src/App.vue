<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home |</router-link>
      <router-link to="/about">About |</router-link>
      <router-link to="/order">Order |</router-link>
      <router-link to="/admin">Admin |</router-link>
      <router-link to="/account">Account |</router-link>
      <router-link id="loginLink"  to="/login">Login |</router-link>
      <router-link id ="signupLink"  to="/signup">Sign Up |</router-link>
      <a href="/" id="logoutLink" style="display: none" v-on:click="logUserOut">Log Out</a>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import {eventBus} from "@/main.js";

export default {
  name: "App",
  data: function() {
    return {
    userIsLoggedIn: false,
    someText: null
        }
    },
    created () {
          eventBus.$on('fireMethod', (event) => {
            this.someText = event;
            console.log('bus fired')

            this.hideLoginElements();
    })
    },
    methods: {
      hideLoginElements: function() {
  document.getElementById('loginLink').style.display = "none";
  document.getElementById('signupLink').style.display = "none";
  document.getElementById('logoutLink').style.display = "";
},


    logUserOut: function(){
      sessionStorage.removeItem('UserIdToken');

    },
    beforeMount() {
    },
  }
}
</script>