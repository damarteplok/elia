<template>
  <div>
    <!-- <CarouselClass></CarouselClass> -->
    <RecommendClass :title="'Teman 1 Rekomendasi'"></RecommendClass>
    <RecommendClass :title="'Teman 2 Rekomendasi'"></RecommendClass>
    <RecommendClass :title="'Teman 3 Rekomendasi'"></RecommendClass>
    <RecommendBook :titleHeader="'Your collections team books'" :subtitleHeader="''"></RecommendBook>
  </div>
</template>

<script>
import RecommendClass from "@/components/class/RecommendClass";
import RecommendBook from "@/components/class/RecommendBook";
import CarouselClass from "@/components/class/CarouselClass";
export default {
  components: {
    RecommendClass,
    RecommendBook,
    CarouselClass
  }
};
</script>
