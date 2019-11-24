<template>
  <div>
    <v-dialog v-model="dialog" scrollable max-width="400px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" outlined v-on="on" small dark style="margin-right: .25rem; margin-left: .25rem;">
          <v-icon>mdi-star</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="justify-center">Top Question For You!</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 80vh; padding-right:1rem; padding-left: 1rem;">
          <div v-for="index in 10" :key="'top'+index">
            <CardTopQuestion :index="index"/>
          </div>
        </v-card-text>
        <v-divider></v-divider>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import CardTopQuestion from '@/components/CardTopQuestion'
export default {
  components: {
    CardTopQuestion
  },
  data() {
    return {
      dialogm1: "",
      dialog: false
    };
  }
};
</script>

<style>
.v-dialog--scrollable {
  position: absolute;
  top: 30px !important;
  right: 25px !important;
}
</style>
