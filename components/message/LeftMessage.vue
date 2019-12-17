<template>
  <div>
    <v-tabs>
      <v-tab style="padding-left: 0px">Public</v-tab>
      <v-tab>Team</v-tab>
      <v-tab-item>
          <LeftTabMessage></LeftTabMessage>
      </v-tab-item>
      <v-tab-item>
          <LeftTabMessage></LeftTabMessage>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import LeftTabMessage from "@/components/message/LeftTabMessage";
export default {
  components: {
    LeftTabMessage
  }
};
</script>