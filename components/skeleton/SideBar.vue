<template>
  <v-row>
    <v-col cols="12">
      <AboutBerbageek />
    </v-col>
    <v-col cols="12">
      <NewActivity />
    </v-col>
    <v-col cols="12">
      <CategorySidebar />
    </v-col>
  </v-row>
</template>

<script>
import NewActivity from "@/components/card/NewActivity";
import CategorySidebar from "@/components/card/CategorySidebar";
import AboutBerbageek from "@/components/card/AboutBerbageek";
export default {
  components: {
    NewActivity,
    AboutBerbageek,
    CategorySidebar
  },
  data() {
    return {};
  }
};
</script>
