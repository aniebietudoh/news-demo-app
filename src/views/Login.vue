<template>
  <div class="">
    <progress class="progress is-small is-warning" value="65" max="100">45%</progress>
    <Navigation />
    <div class="container">
      <p class="is-size-5 mb-6 ml-1"> Login to Read The News You Love</p>
      <div class="columns">
        <div class="column is-4">
            <div class="field">
              <label class="label">Username</label>
              <div class="control">
                <input class="input" type="text" placeholder="e.g animan" v-model="username">
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input class="input" type="password" placeholder="e.g. 123456" v-model="password">
              </div>
            </div>

          <button class="button is-success is-fullwidth" v-on:click="checkCredentials">Login</button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'Login',
  components: {
    Navigation,
  },
  data() {
    return {
      username: null,
      password: null,
    };
  },
  created() {
    localStorage.setItem('cred', JSON.stringify({ username: 'animan', password: 'ioStream' }));
  },
  methods: {
    checkCredentials() {
      const correctCred = JSON.parse(localStorage.getItem('cred'));
      if (this.username === correctCred.username && this.password === correctCred.password) {
        localStorage.setItem('isLoggedIn', 'true');
        this.$router.push('/');
      } else {
        alert('Wrong credentials');
        this.$router.push('/login');
      }
    },
  },
};
</script>
