<template>
  <div>
    <v-row dense>
      <v-col
        v-for="(item, i) in items"
        :key="i"
        :cols="12"
        :style="i == 0 ? {'paddingTop': '0px'} : {}"
      >
        <v-card :color="item.color" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline" v-text="item.title"></v-card-title>
              <v-card-subtitle v-text="item.artist"></v-card-subtitle>
              <v-card-text>
                <p>Tes satu dua tiga</p>
              </v-card-text>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="item.src"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense v-if="show">
      <v-col v-for="(item, i) in items2" :key="i" :cols="12">
        <v-card :color="item.color" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline" v-text="item.title"></v-card-title>
              <v-card-subtitle v-text="item.artist"></v-card-subtitle>
              <v-card-text>
                <p>Tes satu dua tiga</p>
              </v-card-text>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="item.src"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col :cols="12" style="text-align:center;">
        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12">
        <v-card color="#673AB7" dark>
          <v-card-title class="headline">Total Poin : 10K (Hero)</v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <RightPoin></RightPoin>
  </div>
</template>

<script>
import RightPoin from "@/components/profile/RightPoin";
export default {
  components: {
    RightPoin
  },
  data() {
    return {
      show: false,
      items2: [
        {
          color: "#673AB7",
          src:
            "https://cdn.mos.cms.futurecdn.net/8wRq3AgggbXphqRxapGWbZ-320-80.jpg",
          title: "Crazy Wardrobe",
          artist: "2017"
        },
        {
          color: "#673AB7",
          src:
            "https://cdn.mos.cms.futurecdn.net/8wRq3AgggbXphqRxapGWbZ-320-80.jpg",
          title: "Idol Produce",
          artist: "2018"
        },
        {
          color: "#673AB7",
          src:
            "https://cdn.mos.cms.futurecdn.net/8wRq3AgggbXphqRxapGWbZ-320-80.jpg",
          title: "Hi! Housemate",
          artist: "2018"
        },
        {
          color: "#673AB7",
          src:
            "https://cdn.mos.cms.futurecdn.net/8wRq3AgggbXphqRxapGWbZ-320-80.jpg",
          title: "Love Timing",
          artist: "2019"
        }
      ],
      items: [
        {
          color: "#673AB7",
          src:
            "https://cdn.mos.cms.futurecdn.net/8wRq3AgggbXphqRxapGWbZ-320-80.jpg",
          title: "Produce 101",
          artist: "2016"
        },
        {
          color: "#673AB7",
          src:
            "https://cdn.mos.cms.futurecdn.net/8wRq3AgggbXphqRxapGWbZ-320-80.jpg",
          title: "Oppa Thinking",
          artist: "2017"
        }
      ]
    };
  },
  methods: {}
};
</script>