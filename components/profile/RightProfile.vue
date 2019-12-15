<template>
  <div>
    <v-row dense>
      <v-col v-for="(item, i) in items" :key="i" :cols="12">
        <v-card :color="item.color" dark>
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
      </v-col>
    </v-row>
    <v-row dense v-if="show">
      <v-col v-for="(item, i) in items2" :key="i" :cols="12">
        <v-card :color="item.color" dark>
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
          color: this.getRandomColor(),
          src:
            "https://cdn.mos.cms.futurecdn.net/8wRq3AgggbXphqRxapGWbZ-320-80.jpg",
          title: "Crazy Wardrobe",
          artist: "2017"
        },
        {
          color: this.getRandomColor(),
          src:
            "https://cdn.mos.cms.futurecdn.net/8wRq3AgggbXphqRxapGWbZ-320-80.jpg",
          title: "Idol Produce",
          artist: "2018"
        },
        {
          color: this.getRandomColor(),
          src:
            "https://cdn.mos.cms.futurecdn.net/8wRq3AgggbXphqRxapGWbZ-320-80.jpg",
          title: "Hi! Housemate",
          artist: "2018"
        },
        {
          color: this.getRandomColor(),
          src:
            "https://cdn.mos.cms.futurecdn.net/8wRq3AgggbXphqRxapGWbZ-320-80.jpg",
          title: "Love Timing",
          artist: "2019"
        }
      ],
      items: [
        {
          color: this.getRandomColor(),
          src:
            "https://cdn.mos.cms.futurecdn.net/8wRq3AgggbXphqRxapGWbZ-320-80.jpg",
          title: "Produce 101",
          artist: "2016"
        },
        {
          color: this.getRandomColor(),
          src:
            "https://cdn.mos.cms.futurecdn.net/8wRq3AgggbXphqRxapGWbZ-320-80.jpg",
          title: "Oppa Thinking",
          artist: "2017"
        }
      ]
    };
  },
  methods: {
    getRandomColor() {
      let letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  }
};
</script>