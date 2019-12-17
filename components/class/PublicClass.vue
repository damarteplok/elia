<template>
  <div>
    <CarouselClass></CarouselClass>
    <RecommendClass :title="'Video Rekomendasi'"></RecommendClass>
    <RecommendClass :title="'Course Rekomendasi'"></RecommendClass>
    <RecommendClass :title="'Berbageek Rekomendasi'"></RecommendClass>
    <RecommendBook></RecommendBook>
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