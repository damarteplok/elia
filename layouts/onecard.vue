<template>
  <v-app :dark="mode">
    <v-content>
      <v-container fluid class="fill-height">
        <v-row no-gutters align="center" justify="center">
          <v-col cols="12" md="6">
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    mode () {
      return this.$store.state.dark
    }
  },
};
</script>
