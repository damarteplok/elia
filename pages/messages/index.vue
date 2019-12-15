<template>
  <v-container fluid>
    <v-row>
      <v-col :xs="12" :sm="12" :md="4" :lg="4" :cols="12">
        <LeftMessage></LeftMessage>
      </v-col>
      <v-col :xs="12" :sm="12" :md="8" :lg="8" :cols="12">
        <v-card>
          <v-container style="padding-top: 0px;">
            <v-row :align="'center'" :justify="'space-between'">
              <v-col cols="4">
                <h2>Header Pesan</h2>
              </v-col>
              <v-col cols="4" style="text-align: right;">
                <v-btn-toggle rounded>
                  <v-btn small>
                    <v-icon>mdi-account-multiple-outline</v-icon>
                  </v-btn>
                  <v-btn small>
                    <v-icon>mdi-settings</v-icon>
                  </v-btn>
                </v-btn-toggle>
              </v-col>
            </v-row>
            <RightMessageChat></RightMessageChat>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LeftMessage from "@/components/message/LeftMessage";
import RightMessageChat from "@/components/message/RightMessageChat";

export default {
  components: {
    RightMessageChat,
    LeftMessage
  },
  data() {
    return {};
  }
};
</script>