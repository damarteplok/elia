<template>
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
</template>

<script>
export default {
  data() {
    return {
      tables: []
    };
  },
  created() {
    for (let i = 0; i < 10; i++) {
      this.tables.push({
        name: Math.random()
          .toString(36)
          .substring(2, 15),
        jumlah: Math.floor(Math.random() * 100),
        total: Math.floor(Math.random() * 1000),
      });
    }
  }
};
</script>