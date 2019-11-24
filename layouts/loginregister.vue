<template>
  <v-app>
    <v-content>
      <v-container
        fluid
        class="row-custom-login fill-height"
        style="padding: 0;"
      >
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
  }
};
</script>

<style>
.row-custom-login {
  background-image: url("/1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
