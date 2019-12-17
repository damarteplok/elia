<template>
  <div>
    <v-row>
      <v-col :cols="12">
        <v-card>
          <v-img
            :src="card.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="315px"
          >
            <v-card-title v-text="card.title"></v-card-title>
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-list-item class="grow">
              <v-list-item-avatar color="grey darken-3">
                <v-img class="elevation-6" src="https://img.icons8.com/plasticine/2x/user.png"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>
                  {{Math.random()
                  .toString(36)
                  .substring(2, 15)}}
                </v-list-item-title>
              </v-list-item-content>

              <v-row align="center" justify="end">
                <v-icon class="mr-1">mdi-share-variant</v-icon>
                <!-- <v-btn icon @click="card.show = !card.show">
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>-->
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Jenis</th>
                <th class="text-left">Jumlah</th>
                <th class="text-left">Total Poin</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) of tables" :key="index">
                <td>{{ item.name }}</td>
                <td>{{ item.jumlah }}</td>
                <td>{{ item.total }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      card: {
        title: "100K point (Immortal 10)",
        src:
          "http://www.manufacturingglobal.com/sites/default/files/styles/slider_detail/public/topic/image/GettyImages-889312658.jpg?itok=1wBuR8q_",
        flex: 4,
        show: true
      },
      tables: []
    };
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      this.tables.push({
        name: Math.random()
          .toString(36)
          .substring(2, 15),
        jumlah: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 1000)
      });
    }
  }
};
</script>
