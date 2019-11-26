<template>
  <v-container fluid>
    <v-row>
      <v-col :cols="12">
        <v-row justify="center" align="center">
          <v-carousel
            v-model="model"
            :show-arrows="showArrows"
            :hide-delimiters="hideDelimiters"
            :cycle="cycle"
            height="300"
          >
            <v-carousel-item>
              <youtube
                style="margin: auto; display: block;"
                :resize="false"
                height="300"
                video-id="PjgyH3lVI18"
              />
            </v-carousel-item>

            <v-carousel-item>
              <youtube
                style="margin: auto; display: block;"
                :resize="false"
                height="300"
                video-id="JhokU8SlmNg"
              />
            </v-carousel-item>

            <v-carousel-item>
              <youtube
                style="margin: auto; display: block;"
                :resize="false"
                height="300"
                video-id="dFf4AgBNR1E"
              />
            </v-carousel-item>

            <v-carousel-item>
              <youtube
                style="margin: auto; display: block;"
                :resize="false"
                height="300"
                video-id="JhokU8SlmNg"
              />
            </v-carousel-item>

            <v-carousel-item>
              <youtube
                style="margin: auto; display: block;"
                :resize="false"
                height="300"
                video-id="PjgyH3lVI18"
              />
            </v-carousel-item>
          </v-carousel>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col :cols="12"> </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      model: 0,
      showArrows: true,
      hideDelimiters: true,
      cycle: false
    };
  }
};
</script>

<style scoped>
/* iframe {
  margin: auto;
  display: block;
} */
</style>
