<template>
  <div>
    <v-tabs  background-color="primary" dark>
      <v-tabs-slider></v-tabs-slider>

      <v-tab :href="'#popular'">
        Popular
      </v-tab>

      <v-tab-item value="popular">
        <v-card flat tile>
          <v-card-text><QuestionCard /></v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab :href="'#new'">
        <v-chip small color="white" class="mr-1"
          ><span style="color: black;">2</span></v-chip
        >
        Terbaru
      </v-tab>

      <v-tab-item value="new">
        <v-card flat tile>
          <v-card-text><QuestionCard /></v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab :href="'#month'">
        <v-chip small color="white" class="mr-1"
          ><span style="color: black;">10</span></v-chip
        >
        Bulan ini
      </v-tab>

      <v-tab-item value="month">
        <v-card flat tile>
          <v-card-text><QuestionCard /></v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab :href="'#week'">
        Minggu ini
      </v-tab>

      <v-tab-item value="week">
        <v-card flat tile>
          <v-card-text><QuestionCard /></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import QuestionCard from "@/components/QuestionCard";

export default {
  components: {
    QuestionCard
  },
  data() {
    return {};
  }
};
</script>
