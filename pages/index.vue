<template>
  <v-container fluid>
    <v-row>
      <v-col :xs="12" :sm="12" :md="9" :lg="9" :cols="12">
        <h2>Browse Question</h2>
        <v-row>
          <v-col :cols="12">
            <v-tabs :background-color="mode ? '#303030' : '#FAFAFA'">
              <v-tab style="text-align: left; padding-left: 0px;">Public</v-tab>
              <v-tab>Team</v-tab>
              <v-tab>Add your favorite tab</v-tab>
              <v-tab-item
                :style="mode ? {'backgroundColor': '#303030'} : {'backgroundColor': '#FAFAFA'}"
              >
                <TeamBrowse :tipe="'Urutkan'" :list="dropdown_icon2"></TeamBrowse>
                <PublicTabs />
              </v-tab-item>
              <v-tab-item
                :style="mode ? {'backgroundColor': '#303030'} : {'backgroundColor': '#FAFAFA'}"
              >
                <TeamBrowse :tipe="'Urutkan'" :list="dropdown_icon2"></TeamBrowse>
                <TeamTabs />
              </v-tab-item>
              <v-tab-item
                :style="mode ? {'backgroundColor': '#303030'} : {'backgroundColor': '#FAFAFA'}"
              >
                <v-row>
                  <v-col cols="12" style="text-align: right;">
                    <v-btn icon @click="show = !show">
                      <v-icon>mdi-settings</v-icon>
                    </v-btn>
                    <AddCustomTabs v-if="show"></AddCustomTabs>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <CustomTabs></CustomTabs>
                  </v-col>
                </v-row>
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
import PublicTabs from "@/components/home/PublicTabs";
import TeamTabs from "@/components/home/TeamTabs";
import CustomTabs from "@/components/home/CustomTabs";
import AddCustomTabs from "@/components/home/AddCustomTabs";
import SideBar from "@/components/skeleton/SideBar";
export default {
  components: {
    SideBar,
    PublicTabs,
    TeamTabs,
    TeamBrowse,
    CustomTabs,
    AddCustomTabs
  },
  data() {
    return {
      show: false,
      dropdown_icon2: [
        { text: "1", callback: () => console.log("test") },
        { text: "2", callback: () => console.log("test") },
        { text: "3", callback: () => console.log("test") },
        { text: "4", callback: () => console.log("test") },
        { text: "5", callback: () => console.log("test") }
      ]
    };
  },
  computed: {
    mode() {
      return this.$store.state.dark;
    }
  }
};
</script>
