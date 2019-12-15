<template>
  <v-card class="mx-auto">
    <v-list three-line style="max-height: 100vh" class="overflow-y-auto">
      <template v-for="(item, index) in items">
        <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>

        <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

        <v-list-item v-else :key="item.title" @click="funcClick">
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      { header: "Channels" },
      {
        avatar: "https://img.icons8.com/plasticine/2x/user.png",
        title: Math.random()
          .toString(36)
          .substring(2, 15),
        subtitle: Math.random()
          .toString(36)
          .substring(2, 30)
      },
      { divider: true, inset: true },
      {
        avatar: "https://img.icons8.com/plasticine/2x/user.png",
        title: Math.random()
          .toString(36)
          .substring(2, 15),
        subtitle: Math.random()
          .toString(36)
          .substring(2, 30)
      },
      { divider: true, inset: true },
      {
        avatar: "https://img.icons8.com/plasticine/2x/user.png",
        title: Math.random()
          .toString(36)
          .substring(2, 15),
        subtitle: Math.random()
          .toString(36)
          .substring(2, 30)
      },
      { divider: true, inset: true },
      {
        avatar: "https://img.icons8.com/plasticine/2x/user.png",
        title: Math.random()
          .toString(36)
          .substring(2, 15),
        subtitle: Math.random()
          .toString(36)
          .substring(2, 30)
      },
      { divider: true, inset: true },
      {
        avatar: "https://img.icons8.com/plasticine/2x/user.png",
        title: Math.random()
          .toString(36)
          .substring(2, 15),
        subtitle: Math.random()
          .toString(36)
          .substring(2, 30)
      },
      { divider: true, inset: true },
      { header: "Private" },
      {
        avatar: "https://img.icons8.com/plasticine/2x/user.png",
        title: Math.random()
          .toString(36)
          .substring(2, 15),
        subtitle: Math.random()
          .toString(36)
          .substring(2, 30)
      },
      { divider: true, inset: true },
      {
        avatar: "https://img.icons8.com/plasticine/2x/user.png",
        title: Math.random()
          .toString(36)
          .substring(2, 15),
        subtitle: Math.random()
          .toString(36)
          .substring(2, 30)
      },
      { divider: true, inset: true },
      {
        avatar: "https://img.icons8.com/plasticine/2x/user.png",
        title: Math.random()
          .toString(36)
          .substring(2, 15),
        subtitle: Math.random()
          .toString(36)
          .substring(2, 30)
      },
      { divider: true, inset: true },
      {
        avatar: "https://img.icons8.com/plasticine/2x/user.png",
        title: Math.random()
          .toString(36)
          .substring(2, 15),
        subtitle: Math.random()
          .toString(36)
          .substring(2, 30)
      },
      { divider: true, inset: true },
      {
        avatar: "https://img.icons8.com/plasticine/2x/user.png",
        title: Math.random()
          .toString(36)
          .substring(2, 15),
        subtitle: Math.random()
          .toString(36)
          .substring(2, 30)
      },
      { divider: true, inset: true }
    ]
  }),
  methods: {
      funcClick() {

      }
  }
};
</script>