<template>
  <div class="container">
    <nav class="navbar is-custom-spaced" role="navigation" aria-label="main navigation" >
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item is-size-5">
          <h2 class="is-size-4 has-text-weight-bold">NEWSMAN</h2>
        </router-link>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu is-size-6">
        <div class="navbar-end">
          <a class="navbar-item">
            about
          </a>
        </div>
        <div class="">
          <div class="navbar-item">
            <div class="buttons">
              <button v-if="loggedIn" v-on:click="logout" class="button is-light">logout</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Login',
  components: {
  },
  data() {
    return {
      loggedIn: false,
    };
  },
  mounted() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/login');
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar-item {
  margin: 0px 5px;
}
.is-custom-spaced {
  padding: 1rem 0;
}
</style>
