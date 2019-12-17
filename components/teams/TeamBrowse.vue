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
            :items="(tipe == 'peringkat') ? dropdown_icon : dropdown_icon2"
            menu-props="bottom"
            :label="(tipe == 'peringkat') ? 'Urutkan' : tipe"
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
      default: 'peringkat',
    }
  },
  data() {
    return {
      dropdown_icon: [
        { text: "Peringkat", callback: () => console.log("test") },
        { text: "Rating", callback: () => console.log("test") }
      ],
      dropdown_icon2: [
        { text: "1", callback: () => console.log("test") },
        { text: "2", callback: () => console.log("test") },
        { text: "3", callback: () => console.log("test") },
        { text: "4", callback: () => console.log("test") },
        { text: "5", callback: () => console.log("test") }
      ],
      tables: []
    };
  },
};
</script>