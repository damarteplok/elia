<template>
  <div>
    <v-row>
      <v-col :cols="12">
        <h2 v-if="tipe == 1">{{title}}</h2>
        <h2 v-else>Kota : {{header}}</h2>
        <div style="margin: 1rem;"></div>
        <v-row dense>
          <v-col v-for="card in cards" :key="card.title" :cols="mini ? 3 : 4">
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
                    <v-list-item-title>{{ Math.floor(Math.random() * 1000) }} joined</v-list-item-title>
                  </v-list-item-content>
                  <v-row align="center" justify="end">
                    <v-icon class="mr-1">mdi-share-variant</v-icon>
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
                  <v-card-actions>
                    <v-btn block color="primary" dark>join</v-btn>
                  </v-card-actions>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col :cols="12" style="text-align:center;">
        <v-btn icon @click="functionAddTeam">
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
      default: "Recommendation Top Tier"
    },
    tipe: {
      type: String,
      default: "1"
    }
  },
  data() {
    return {
      header: "",
      show: false,
      cards: [
        {
          title: Math.random()
            .toString(36)
            .substring(2, 15),
          src:
            "https://cdn.mos.cms.futurecdn.net/8wRq3AgggbXphqRxapGWbZ-320-80.jpg",
          flex: 3,
          show: true
        },
        {
          title: Math.random()
            .toString(36)
            .substring(2, 15),
          src:
            "https://cdn.mos.cms.futurecdn.net/8wRq3AgggbXphqRxapGWbZ-320-80.jpg",
          flex: 3,
          show: true
        },
        {
          title: Math.random()
            .toString(36)
            .substring(2, 15),
          src:
            "https://cdn.mos.cms.futurecdn.net/8wRq3AgggbXphqRxapGWbZ-320-80.jpg",
          flex: 3,
          show: true
        },
        {
          title: Math.random()
            .toString(36)
            .substring(2, 15),
          src:
            "https://cdn.mos.cms.futurecdn.net/8wRq3AgggbXphqRxapGWbZ-320-80.jpg",
          flex: 3,
          show: true
        }
      ]
    };
  },
  computed: {
    mini() {
      return this.$store.state.mini;
    }
  },
  created() {
    fetch("https://extreme-ip-lookup.com/json/")
      .then(res => res.json())
      .then(response => {
        this.header = response.city;
      })
      .catch((data, status) => {
        this.header = "";
      });
  },
  methods: {
    functionAddTeam() {
      for (let i = 0; i < 4; i++) {
        this.cards.push({
          title: Math.random()
            .toString(36)
            .substring(2, 15),
          src:
            "https://cdn.mos.cms.futurecdn.net/8wRq3AgggbXphqRxapGWbZ-320-80.jpg",
          flex: 3,
          show: true
        });
      }
    }
  }
};
</script>