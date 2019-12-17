<template>
  <div>
    <v-row dense>
      <v-col cols="12">
        <v-card color="#673AB7" dark>
          <v-card-title class="headline">{{titleHeader}}</v-card-title>
          <v-card-subtitle>{{subtitleHeader}}</v-card-subtitle>
        </v-card>
      </v-col>

      <v-col v-for="(item, i) in items" :key="i" :cols="mini ? 4 : 6">
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
  </div>
</template>

<script>
export default {
  props: {
    titleHeader: {
      type: String,
      default: 'Unlimited book now'
    },
    subtitleHeader: {
      type: String,
      default: 'Read to your favorite book whenever and wherever, online and offline.'
    }
  },
  data: () => ({
    items: []
  }),
  methods: {
    // getRandomColor() {
    //   let letters = "0123456789ABCDEF";
    //   let color = "#";
    //   for (let i = 0; i < 6; i++) {
    //     color += letters[Math.floor(Math.random() * 16)];
    //   }
    //   return color;
    // }
  },
  created() {
    for (let i = 0; i < 15; i++) {
      this.items.push({
        color: '#2196F3',
        src: "https://cdn.mos.cms.futurecdn.net/8wRq3AgggbXphqRxapGWbZ-320-80.jpg",
        title: Math.random()
          .toString(36)
          .substring(2, 15),
        artist: Math.random()
          .toString(36)
          .substring(2, 15)
      });
    }
  },
  computed: {
    mini() {
      return this.$store.state.mini;
    }
  },
};
</script>
