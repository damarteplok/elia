<template>
  <v-card class="elevation-12">
    <v-img
      height="350"
      aspect-ratio="2"
      :src="error.statusCode === 404 ? '/404.jpg' : '/500.png'"
    ></v-img>
    <v-card-text>
      <p v-if="error.statusCode === 404" class="display-1 text--primary">
        404
      </p>
      <p v-else class="display-1 text--primary">
        500
      </p>
      <div class="text--primary">
        {{
          error.statusCode === 404
            ? "Halaman tidak ditemukan !"
            : "Terjadi kesalahan !"
        }}<br />
        <NuxtLink to="/">
          Beranda
        </NuxtLink>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  layout: "onecard",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title
    };
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred"
    };
  }
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
