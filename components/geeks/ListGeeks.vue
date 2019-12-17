<template>
  <v-row>
    <v-col cols="12">
      <v-row :align="'center'" :justify="'space-between'" no-gutters>
        <v-col cols="4">
          <v-text-field label="Pencarian" single-line></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-overflow-btn
            style="margin-top: 0px;"
            :items="dropdown_icon"
            menu-props="bottom"
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
                  <th class="text-left">Nama</th>
                  <th class="text-left">Lokasi</th>
                  <th class="text-left">Team</th>
                  <th class="text-left">Pekerjaan</th>
                  <th class="text-left">Skills</th>
                  <th class="text-left">Tingkatan</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) of tables" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>
                    <v-avatar color="grey darken-3" size="28">
                      <v-img
                        class="elevation-6"
                        src="https://img.icons8.com/plasticine/2x/user.png"
                      ></v-img>
                    </v-avatar>
                    {{ item.name }}
                  </td>
                  <td>{{ item.alamat }}</td>
                  <td>{{ item.office }}</td>
                  <td>{{ item.job }}</td>
                  <td>Skills</td>
                  <td>{{ item.rating }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
        <div v-if="fetchLoading" style="text-align: center;">
          <v-progress-circular indeterminate color="primary" class="bottom" />
        </div>
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
      bottom: false,
      fetchLoading: false,
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
    
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.bottom = this.bottomVisible();
    });
  },
  watch: {
    bottom(bottom) {
      if (bottom) {
        this.fetchLoading = true;
        this.addTable();
      }
    }
  },
  methods: {
    bottomVisible() {
      const scrollY = window.scrollY;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight;
      return bottomOfPage || pageHeight < visible;
    },
    addTable() {
      for (let i = 0; i < 5; i++) {
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
      this.fetchLoading = false;
    }
  }
};
</script>