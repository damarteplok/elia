<template>
  <v-row>
    <v-col cols="12">
      <v-row align="center" justify="center">
        <v-btn class="mx-2" fab :dark="mode" small outlined color="indigo">
          <v-icon :dark="mode">mdi-facebook</v-icon>
        </v-btn>
        <v-btn class="mx-2" fab :dark="mode" small outlined color="red">
          <v-icon :dark="mode">mdi-google</v-icon>
        </v-btn>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    mode () {
      return this.$store.state.dark
    }
  },
};
</script>