<template>
  <v-container fluid>
    <v-row>
      <v-col :cols="12">
        <h2>Browse Class</h2>
        <v-row>
          <v-col :cols="12">
            <v-tabs :background-color="mode ? '#303030' : '#FAFAFA'">
              <v-tab style="text-align: left; padding-left: 0px;">Public</v-tab>
              <v-tab>Teams</v-tab>
              <v-tab-item
                :style="mode ? {'backgroundColor': '#303030'} : {'backgroundColor': '#FAFAFA'}"
              >
                <TeamBrowse></TeamBrowse>
                <PublicClass></PublicClass>
              </v-tab-item>
              <v-tab-item
                :style="mode ? {'backgroundColor': '#303030'} : {'backgroundColor': '#FAFAFA'}"
              >
                <TeamBrowse></TeamBrowse>
                <TeamClass></TeamClass>
              </v-tab-item>
            </v-tabs>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TeamBrowse from "@/components/teams/TeamBrowse";
import PublicClass from "@/components/class/PublicClass";
import TeamClass from "@/components/class/TeamClass";
export default {
  components: {
    TeamBrowse,
    PublicClass,
    TeamClass
  },
  data() {
    return {};
  },
  computed: {
    mode() {
      return this.$store.state.dark;
    }
  }
};
</script>

<style scoped>
</style>
