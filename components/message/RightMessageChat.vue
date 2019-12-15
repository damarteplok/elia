<template>
  <v-row no-gutters>
    <v-col :cols="12">
      <v-list style="max-height: 96.2vh" class="overflow-y-auto">
        <v-list-item v-for="item in items" :key="item.title">
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-card color="#2196F3"
            max-width="480"
            dark>
              <v-card-text>
                <div class="text--primary">{{ item.message }}</div>
              </v-card-text>
            </v-card>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    items: []
  }),
  created() {
    for (let i = 0; i < 20; i++) {
      this.items.push({
        title: Math.random()
          .toString(36)
          .substring(2, 15),
        avatar: "https://img.icons8.com/plasticine/2x/user.png",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar urna mauris, quis malesuada dolor dignissim ac. Donec sagittis nec ex vel semper. Nam id orci ut est iaculis malesuada ut dictum nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
      });
    }
  }
};
</script>