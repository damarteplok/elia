<template>
  <v-container fluid>
    <v-row>
      <v-col :xs="12" :sm="12" :md="9" :lg="9" :cols="12">
        <h2>Browse Geek</h2>
        <v-row>
          <v-col :cols="12">
            <v-tabs :background-color="mode ? '#303030' : '#FAFAFA'">
              <v-tab style="text-align: left; padding-left: 0px;">Public</v-tab>
              <v-tab>Team</v-tab>
              <v-tab>Your Geek</v-tab>
              <v-tab-item
                :style="mode ? {'backgroundColor': '#303030'} : {'backgroundColor': '#FAFAFA'}"
              >
                <TeamBrowse :tipe="'Urutkan'" :list="dropdown_icon2"></TeamBrowse>
                <PublicGeeks />
              </v-tab-item>
              <v-tab-item
                :style="mode ? {'backgroundColor': '#303030'} : {'backgroundColor': '#FAFAFA'}"
              >
                <TeamBrowse :tipe="'Urutkan'" :list="dropdown_icon2"></TeamBrowse>
                <TeamGeeks />
              </v-tab-item>
              <v-tab-item
                :style="mode ? {'backgroundColor': '#303030'} : {'backgroundColor': '#FAFAFA'}"
              >
                <YourGeeks />
              </v-tab-item>
            </v-tabs>
          </v-col>
        </v-row>
      </v-col>
      <v-col :xs="12" :sm="12" :md="3" :lg="3" :cols="12">
        <SideBar />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TeamBrowse from "@/components/teams/TeamBrowse";
import PublicGeeks from "@/components/geeks/PublicGeeks";
import TeamGeeks from "@/components/geeks/TeamGeeks";
import YourGeeks from "@/components/geeks/YourGeeks";
import SideBar from "@/components/skeleton/SideBar";
export default {
  components: {
    SideBar,
    TeamBrowse,
    PublicGeeks,
    TeamGeeks,
    YourGeeks
  },
  data() {
    return {
      dropdown_icon2: [{ text: "Peringkat" }, { text: "Rating" }]
    };
  },
  computed: {
    mode() {
      return this.$store.state.dark;
    }
  }
};
</script>
