<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home |</router-link> 
      <router-link to="/about">About |</router-link>  
      <router-link v-if="!this.userIsLoggedIn" to="/login">Login |</router-link> 
      <router-link v-if="!this.userIsLoggedIn" to="/signup">Sign Up |</router-link> 
      <a href="/" v-if="this.userIsLoggedIn" v-on:click="logUserOut">Log Out</a>
      {{this.userIsLoggedIn}}
      <!-- navbari element ei refreshi ennast kui seal sees ei toimu mingit tüüpi event, näiteks nupu vajutus -->
    
      <button v-on:click="isUserLoggedIn">Check if user is logged in</button>
    
    </div>
    <router-view :key="$route.fullPath"/>
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
export default {
  name: "App",
  data: function() {
    return {
    userIsLoggedIn: false
        }
    },
    methods: {
      isUserLoggedIn: function(){
        if (localStorage.getItem("UserIdToken") === null){
          this.userIsLoggedIn = false;
          alert("id is null")
        }
        else{
          this.userIsLoggedIn = true;
          alert("id exists")
        }
      },
    logUserOut: function(){
      localStorage.removeItem('UserIdToken');
      this.userIsLoggedIn = false
    },
    beforeMount(){
            this.isUserLoggedIn;
    },
  }
}
</script>