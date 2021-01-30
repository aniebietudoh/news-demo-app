<template>
  <div class="">
    <section class="hero is-warning is-medium is-bold mb-6 has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h1 class="is-size-2 has-text-weight-bold">
             <i class="fas fa-smile-wink"></i> Read The News You Love
          </h1>
          <h2 class="subtitle">
            newsman is the #1 destination to find and read incredible stories.
          </h2>
        </div>
      </div>
    </section>

    <section>
      <div class="container mb-6 mt-6">
        <h2 class="is-size-5 pb-5 pl-2 has-text-weight-bold"><i class="fas fa-newspaper"></i> Latest News</h2>
        <div class="columns is-multiline">
          <div class="column is-4" v-for="article in newsItems.articles" :key="article.publishedAt">
            <div class="container ad-bg card m-2">
              <p class="is-size-6 pb-4 has-text-weight-bold has-height">{{article.title}}</p>

              <div class="card-image">
                <figure class="image">
                  <img :src="article.urlToImage" alt="Placeholder image">
                </figure>
              </div>

              <div class="card-content">
                <div class="content is-size-7-0">
                 <strong>SUMMARY: </strong> {{article.description}}
                  <br/><br/>
                  <p class="is-size-6-5">{{article.content}}</p>
                  <p class="is-6"><strong class="has-text-warning-dark">Author: </strong> {{article.author}} |
                  <time><strong>Published: </strong>{{new Date(article.publishedAt).toLocaleString()}}</time>
                  </p>
                  <p class="is-size-6-5"><strong>Source:</strong> {{article.source.id}} {{article.source.name}}</p>
                  <p class="is-6 has-text-link"><strong>Read more: </strong> <a :href="article.url">Click to Read</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="buttons is-centered">
      <button v-if="isLoadingMore" class="button is-warning is-loading has-text-centered is-rounded">Loading</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

// @ is an alias to /src
export default {
  name: 'News',
  data() {
    return {
      pageItems: 9,
      isLoadingMore: false,
    };
  },
  computed: {
    ...mapGetters({ newsItems: 'getNews/seeAllNews' }),
  },
  created() {
    this.getTheNews();
  },
  mounted() {
    this.loadOnscroll();
  },
  methods: {
    getTheNews() {
      const pageSize = this.pageItems;
      this.$store.dispatch('getNews/getAllNews', pageSize).then(() => {
      });
    },
    loadOnscroll() {
      window.onscroll = () => {
        const bottomOfscreen = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfscreen) {
          this.pageItems += 9;
          this.getTheNews();
          this.isLoadingMore = true;
        } else {
          this.isLoadingMore = false;
        }
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.ad-bg {
  background-color: #fdfdfd;
  padding: 1rem;
  border-radius: 3px;
}
.trend-bg {
  background-color: azure;
  padding: 1rem;
  border-radius: 1px;
}
.column {
  display: flex !important;
}
.has-height {
  max-height: 110px;
}
.card-content {
  padding: 1em 0em;
}
.is-size-6-5 {
  font-size: 0.9rem;
}
.is-size-7-0 {
  font-size: 0.7rem;
}
.subtitle {
  font-family: 'Poppins', sans-serif;
}
</style>
