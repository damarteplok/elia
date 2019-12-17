<template>
  <div>
    <v-row justify="start" align="center">
      <v-col cols="6">
        <v-select
          v-model="select"
          :items="items"
          label="Kategori"
        ></v-select>
      </v-col>
      <v-col cols="3">
        <v-btn :disabled="!select" color="success" class="mr-4" @click="validate">Add</v-btn>
      </v-col>
    </v-row>

    <v-simple-table>
        <thead>
          <tr>
            <th class="text-left">Nama</th>
            <th class="text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) of tabs" :key="index">
            <td class="text-left">{{ item.name }}</td>
            <td class="text-left">
              <v-btn icon small color="error" @click="delTabs(item)">
                <v-icon>
                  mdi-minus
                </v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select: null,
      items: ["Programming", "UI/UX", "Server", "BPMN"],
      tables: []
    };
  },
  computed: {
    tabs() {
      return this.$store.state.customTabs;
    }
  },
  methods: {
    validate() {
      if (this.select) {
        let table = {
          name: this.select
        }
        this.$store.dispatch("setCustomTabs", table);
        this.select = null;
      }
    },
    delTabs(item) {
      let index = this.tabs.indexOf(item)
      this.$store.dispatch("delCustomTabs", index);
    }
  }
};
</script>
