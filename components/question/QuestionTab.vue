<template>
  <div>
    <v-tabs background-color="primary" :dark="mode">
      <v-tabs-slider></v-tabs-slider>

      <v-tab :href="'#popular'">Terbaru</v-tab>

      <v-tab-item value="popular">
        <v-card flat tile>
          <v-card-text class="pa-0">
            <QuestionCard />
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab :href="'#new'">
        <v-chip small color="white" class="mr-1">
          <span style="color: black;">2</span>
        </v-chip>Popular
      </v-tab>

      <v-tab-item value="new">
        <v-card flat tile>
          <v-card-text class="pa-0">
            <QuestionCard />
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab :href="'#month'">
        <v-chip small color="white" class="mr-1">
          <span style="color: black;">10</span>
        </v-chip>Team
      </v-tab>

      <v-tab-item value="month">
        <v-card flat tile>
          <v-card-text class="pa-0">
            <QuestionCard />
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab :href="'#week'">Kategori 1</v-tab>

      <v-tab-item value="week">
        <v-card flat tile>
          <v-card-text class="pa-0">
            <QuestionCard />
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import QuestionCard from "@/components/question/QuestionCard";

export default {
  computed: {
    mode () {
      return this.$store.state.dark
    }
  },
  components: {
    QuestionCard
  },
  data() {
    return {};
  }
};
</script>
