<template>
  <v-row>
    <v-col cols="12">
      <AboutBerbageek />
    </v-col>
    <v-col cols="12">
      <NewActivity />
    </v-col>
  </v-row>
</template>

<script>
import NewActivity from "@/components/NewActivity";
import AboutBerbageek from "@/components/AboutBerbageek";
export default {
  components: {
    NewActivity,
    AboutBerbageek
  },
  data() {
    return {};
  }
};
</script>
