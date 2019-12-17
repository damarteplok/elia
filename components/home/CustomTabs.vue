<template>
  <div>
    <v-banner
      elevation="6"
      single-line
      :dark="mode"
      v-if="tabs.length == 0"

    >Your favorite tabs is empty, you can add it in add section!</v-banner>
    <v-tabs background-color="primary" :dark="mode" v-if="tabs.length">
      <v-tabs-slider></v-tabs-slider>

      <v-tab v-for="(item, index) of tabs" :key="index">{{item.name}}</v-tab>

      <v-tab-item v-for="(item, index) of tabs" :key="index">
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
  data() {
    return {

    };
  },
  computed: {
    mode() {
      return this.$store.state.dark;
    },
    tabs() {
      return this.$store.state.customTabs;
    }
  },
  components: {
    QuestionCard
  }
};
</script>t>
