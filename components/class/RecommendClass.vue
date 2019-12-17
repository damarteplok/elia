<template>
  <div>
    <v-row>
      <v-col :cols="12">
        <h2>{{title}}</h2>
        <div style="margin: 1rem;"></div>
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
                      src="https://img.icons8.com/plasticine/2x/user.png"
                    ></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>Name Tutor</v-list-item-title>
                  </v-list-item-content>

                  <v-row align="center" justify="end">
                    <v-icon class="mr-1">mdi-heart</v-icon>
                    <v-icon class="mr-1">mdi-bookmark</v-icon>
                    <v-icon class="mr-1">mdi-share-variant</v-icon>
                    <!-- <v-btn icon @click="card.show = !card.show">
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>-->
                  </v-row>
                </v-list-item>
              </v-card-actions>
              <v-expand-transition>
                <div v-show="card.show">
                  <v-divider></v-divider>

                  <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam at auctor augue. Nunc porta, magna eu porta bibendum,
                    diam est sollicitudin ipsum, eget ultrices risus lacus
                    a tellus.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row v-if="show">
      <v-col :cols="12">
        <v-row dense>
          <v-col v-for="card in cards2" :key="card.title" :cols="card.flex">
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
                      src="https://img.icons8.com/plasticine/2x/user.png"
                    ></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>Name User</v-list-item-title>
                  </v-list-item-content>

                  <v-row align="center" justify="end">
                    <v-icon class="mr-1">mdi-heart</v-icon>
                    <v-icon class="mr-1">mdi-bookmark</v-icon>
                    <v-icon class="mr-1">mdi-share-variant</v-icon>
                    <!-- <v-btn icon @click="card.show = !card.show">
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>-->
                  </v-row>
                </v-list-item>
              </v-card-actions>
              <v-expand-transition>
                <div v-show="card.show">
                  <v-divider></v-divider>

                  <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam at auctor augue. Nunc porta, magna eu porta bibendum,
                    diam est sollicitudin ipsum, eget ultrices risus lacus
                    a tellus.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col :cols="12" style="text-align:center;">
        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
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
          title: "Machine Learning",
          src: "https://miro.medium.com/max/2400/1*c_fiB-YgbnMl6nntYGBMHQ.jpeg",
          flex: 4,
          show: true
        },
        {
          title: "PHP from zero to hero",
          src: "https://www.petanikode.com/img/php/php.png",
          flex: 4,
          show: true
        },
        {
          title: "React in 1 day",
          src: "https://miro.medium.com/max/2400/1*jDIj2SKAE-Bp32owLoHDjw.png",
          flex: 4,
          show: true
        }
      ],
      cards2: [
        {
          title: "Vue in 1 day",
          src: "https://149364066.v2.pressablecdn.com/wp-content/uploads/2017/03/vue.jpg",
          flex: 4,
          show: true
        },
        {
          title: "JavaScript from zero to hero",
          src: "https://colorlib.com/wp/wp-content/uploads/sites/2/Templating-Engines-for-JavaScript.png",
          flex: 4,
          show: true
        },
        {
          title: "C++ in 1 day",
          src: "https://d33wubrfki0l68.cloudfront.net/49aee5fa96e490bb03748d978eef21f0b479b14f/c32d1/img/cpp.png",
          flex: 4,
          show: true
        }
      ]
    };
  }
};
</script>