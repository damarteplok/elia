<template>
  <v-container fluid>
    <v-row>
      <v-col :cols="12">
        <v-row justify="center" align="center">
          <v-carousel
            dark
            v-model="model"
            :show-arrows="showArrows"
            :hide-delimiters="hideDelimiters"
            :cycle="cycle"
            height="315"
          >
            <v-carousel-item v-for="item in items" :key="item.id" v-html="item.content"></v-carousel-item>
          </v-carousel>
        </v-row>
      </v-col>
    </v-row>
    <RecommendClass
    :title="'Video Rekomendasi'"
    >
    </RecommendClass>

    <RecommendClass
    :title="'Course Rekomendasi'"
    >
    </RecommendClass>

    <RecommendClass
    :title="'Team Rekomendasi'"
    >
    </RecommendClass>
    <RecommendBook>
      
    </RecommendBook>
  </v-container>
</template>

<script>
import RecommendClass from "@/components/recommend/RecommendClass";
import RecommendBook from "@/components/recommend/RecommendBook";
export default {
  components: {
    RecommendClass,
    RecommendBook
  },
  data() {
    return {
      model: 0,
      showArrows: true,
      hideDelimiters: true,
      cycle: false,
      items: [
        {
          id: "1",
          content:
            '<iframe style="display: block; margin: 0 auto;" width="560" height="315" src="https://www.youtube.com/embed/VRZVQVUO4PU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
        },
        {
          id: "2",
          content:
            '<iframe style="display: block; margin: 0 auto;" width="560" height="315" src="https://www.youtube.com/embed/a_IA-8nQ4FY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
        },
        {
          id: "3",
          content:
            '<iframe style="display: block; margin: 0 auto;" width="560" height="315" src="https://www.youtube.com/embed/QpuycU77J5o" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
        },
        {
          id: "4",
          content:
            '<iframe style="display: block; margin: 0 auto;" width="560" height="315" src="https://www.youtube.com/embed/jANE8lpoj2c" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
        },
        {
          id: "5",
          content:
            '<iframe style="display: block; margin: 0 auto;" width="560" height="315" src="https://www.youtube.com/embed/5530I_pYjbo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
        },
      ]
    };
  }
};
</script>

<style scoped>

</style>
