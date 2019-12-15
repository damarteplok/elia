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
      <TopTri></TopTri>
      <v-row>
        <v-col cols="12">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">No</th>
                  <th class="text-left">Name</th>
                  <th class="text-left">Domicile</th>
                  <th class="text-left">Office</th>
                  <th class="text-left">Jobs</th>
                  <th class="text-left">Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) of tables" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>
                    <v-avatar color="indigo" size="28">
                      <v-icon dark>mdi-account-circle</v-icon>
                    </v-avatar>
                    {{ item.name }}
                  </td>
                  <td>{{ item.alamat }}</td>
                  <td>{{ item.office }}</td>
                  <td>{{ item.job }}</td>
                  <td>{{ item.rating }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import TopTri from "@/components/geeks/TopTri";
export default {
  components: {
    TopTri
  },
  data() {
    return {
      dropdown_icon: [
        { text: "Peringkat", callback: () => console.log("test") },
        { text: "Rating", callback: () => console.log("test") }
      ],
      tables: []
    };
  },
  created() {
    for (let i = 0; i < 10; i++) {
      this.tables.push({
        name: Math.random()
          .toString(36)
          .substring(2, 15),
        alamat: Math.random()
          .toString(36)
          .substring(2, 15),
        office: Math.random()
          .toString(36)
          .substring(2, 15),
        job: Math.random()
          .toString(36)
          .substring(2, 15),
        rating: Math.random()
          .toString(36)
          .substring(2, 15)
      });
    }
  }
};
</script>