<template>
  <v-row>
    <v-col cols="12">
      <v-row :align="'center'" :justify="'space-between'" no-gutters>
        <v-col cols="3">
          <v-text-field :label="'Pencarian'" single-line></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-overflow-btn
            style="margin-top: 0px;"
            :items="list"
            menu-props="bottom"
            :label="tipe"
            target="#geeks"
          ></v-overflow-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    tipe: {
      type: String,
      default: 'Urutkan',
    },
    list: {
      type : Array,
      default: [
        { text: "Peringkat" },
        { text: "Rating" }
      ],
    }
  },
  data() {
    return {
      tables: []
    };
  },
};
</script>
