<template>
  <v-row no-gutters>
    <v-col :cols="12">
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>
                    {{Math.random()
                    .toString(36)
                    .substring(2, 15)}}
                  </v-list-item-title>
                </v-list-item-content>

                <v-row align="center" justify="end">
                  <v-icon class="mr-1">mdi-share-variant</v-icon>
                  <!-- <v-btn icon @click="card.show = !card.show">
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                  </v-btn>-->
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Recommendation"
    }
  },
  data() {
    return {
      show: false,
      cards: [
        {
          title: "100K point",
          src:
            "http://www.manufacturingglobal.com/sites/default/files/styles/slider_detail/public/topic/image/GettyImages-889312658.jpg?itok=1wBuR8q_",
          flex: 4,
          show: true
        },
        {
          title: "50K point",
          src:
            "http://www.manufacturingglobal.com/sites/default/files/styles/slider_detail/public/topic/image/GettyImages-889312658.jpg?itok=1wBuR8q_",
          flex: 4,
          show: true
        },
        {
          title: "25K point",
          src:
            "http://www.manufacturingglobal.com/sites/default/files/styles/slider_detail/public/topic/image/GettyImages-889312658.jpg?itok=1wBuR8q_",
          flex: 4,
          show: true
        }
      ]
    };
  }
};
</script>