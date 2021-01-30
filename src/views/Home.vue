<template>
  <div class="">
    <progress class="progress is-small is-warning" value="65" max="100">45%</progress>
    <Navigation />
    <NewsContent />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue';
import NewsContent from '@/components/NewsContent.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Navigation,
    NewsContent,
    Footer,
  },
};
</script>
