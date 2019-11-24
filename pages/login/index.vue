<template>
  <v-row no-gutters>
    <v-col cols="12" sm="6" class="pl-8 pb-8 pr-8 pt-8">
      <FormLogin />
    </v-col>

    <v-col cols="12" sm="6">
      <v-card  outlined tile>
        One of three columns
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import FormLogin from '@/components/FormLogin'
export default {
  layout: "onecard",
  components: {
    FormLogin
  },
  data() {
    return {};
  }
};
</script>
