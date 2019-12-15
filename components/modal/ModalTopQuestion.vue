<template>
  <div>
    <v-dialog v-model="dialog" scrollable max-width="400px">
      <template v-slot:activator="{ on }">
        <v-btn
          color="primary"
          outlined
          v-on="on"
          small
          :dark="mode"
          style="margin-right: .25rem; margin-left: .25rem;"
        >
          <v-icon>mdi-star</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="justify-center">Header Promo, Suggestion</v-card-title>
        <v-divider></v-divider>
        <v-card-text
          v-if="mode"
          style="height: 80vh; padding-right:1rem; padding-left: 1rem; background-color: #303030"
        >
          <!-- promo -->
          <v-card
            v-for="(item, i) in items"
            :key="i"
            :color="item.color"
            dark
            style="margin-top:1rem;"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="headline" v-text="item.title"></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>
              </div>
              <v-avatar class="ma-3" size="125" tile>
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
          <!-- end promo -->
          <div v-for="index in 10" :key="'top' + index">
            <CardTopQuestion :index="index" @dialogShowTop="dialog = false" />
          </div>
        </v-card-text>
        <v-card-text v-else style="height: 80vh; padding-right:1rem; padding-left: 1rem;">
          <!-- promo -->
          <v-card
            v-for="(item, i) in items"
            :key="i"
            :color="item.color"
            dark
            style="margin-top:1rem;"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="headline" v-text="item.title"></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>
              </div>
              <v-avatar class="ma-3" size="125" tile>
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
          <!-- end promo -->
          <div v-for="index in 5" :key="'top' + index">
            <CardTopQuestion :index="index" @dialogShowTop="dialog = false" />
          </div>
        </v-card-text>
        <v-divider></v-divider>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import CardTopQuestion from "@/components/card/CardTopQuestion";
export default {
  components: {
    CardTopQuestion
  },
  computed: {
    mode() {
      return this.$store.state.dark;
    }
  },
  data() {
    return {
      dialogm1: "",
      dialog: false,
      items: [
        {
          color: "#1F7087",
          src: "https://www.petanikode.com/img/php/php.png",
          title: "Free Tutorial",
          artist: "PHP from zero to hero"
        },
        {
          color: "#952175",
          src: "https://www.tipplap.hu/images/article/cover/2/0/1/2019-11-18-20-42-29-windowjpg-1574106167.jpg",
          title: "Try Premium",
          artist: "only $10"
        }
      ]
    };
  }
};
</script>

<style>
.v-dialog--scrollable {
  position: absolute;
  top: 30px !important;
  right: 25px !important;
}
</style>
