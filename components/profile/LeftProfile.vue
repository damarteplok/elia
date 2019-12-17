<template>
  <div>
    <v-card class="mx-auto" tile>
      <v-img height="100%" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg">
        <v-row align="end" class="fill-height">
          <v-col align-self="start" class="pa-0" cols="12">
            <v-avatar class="profile" color="grey" :size="$vuetify.breakpoint.xl ? 224 : 164" tile>
              <v-img
                src="https://seoulbeats.com/wp-content/uploads/2016/04/20160414_seoulbeats_produce101_pledis_pinky.jpg"
              ></v-img>
            </v-avatar>
          </v-col>
          <v-col class="py-0">
            <v-list-item color="rgba(0, 0, 0, .4)" dark>
              <v-list-item-content>
                <v-list-item-title class="title">Zhou Jieqiong</v-list-item-title>
                <v-list-item-subtitle>Artis</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-img>
    </v-card>
    <div style="margin: 1rem"></div>
    <v-card class="mx-auto">
      <v-card-text>
        <h3>Personal</h3>
        <p>
          Zhou Jieqiong, known professionally as Jieqiong or Kyulkyung,
          is a Chinese singer based in South Korea and signed under Pledis Entertainment.
          After finishing sixth in survival show Produce 101,
          she became a member of the girl group I.O.I.
          She was also a member of Pristin and its subgroup Pristin V
        </p>
        <h3>Pengalaman</h3>
        <ul>
          <li>2016: Produce 101 and I.O.I</li>
          <li>2017: Debut with Pristin</li>
          <li>2018–present: Pristin V and solo career</li>
        </ul>
        <h3>Skill</h3>
        <ul>
          <li>Singing</li>
          <li>Dancing</li>
        </ul>
      </v-card-text>
    </v-card>
    <div style="margin: 1rem"></div>
    <LeftChart></LeftChart>
  </div>
</template>

<script>
import LeftChart from "@/components/profile/LeftChart";
export default {
  components: {
    LeftChart
  },
  mounted() {
 
  }
};
</script>