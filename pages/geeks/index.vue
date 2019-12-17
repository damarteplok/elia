<template>
  <v-container fluid>
    <v-row>
      <v-col :xs="12" :sm="12" :md="9" :lg="9" :cols="12">
        <h2>Browse Geek</h2>
        <ListGeeks></ListGeeks>
      </v-col>
      <v-col :xs="12" :sm="12" :md="3" :lg="3" :cols="12">
        <SideBar />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ListGeeks from "@/components/geeks/ListGeeks";
import SideBar from "@/components/skeleton/SideBar";
export default {
  components: {
    SideBar,
    ListGeeks
  },
  data() {
    return {};
  }
};
</script>