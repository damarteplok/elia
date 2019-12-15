<template>
  <v-row>
    <v-col cols="12">
      <v-row :align="'center'" :justify="'space-between'" no-gutters>
        <v-col cols="4">
          <v-text-field label="Pencarian"></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-overflow-btn
            style="margin-top: 0px;"
            dense
            :items="dropdown_icon"
            menu-props="top"
            label="Urutkan"
            target="#geeks"
          ></v-overflow-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dropdown_icon: [
        { text: "Peringkat", callback: () => console.log("test") },
        { text: "Rating", callback: () => console.log("test") }
      ],
      tables: []
    };
  },
};
</script>