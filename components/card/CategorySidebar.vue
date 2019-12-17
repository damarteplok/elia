<template>
  <div>
    <v-card>
      <v-card-title class="justify-center">Kategori</v-card-title>
      <v-divider></v-divider>
      <v-card-text class="pa-0">
        <v-list single-line>
          <v-list-item-group  active-class="primary--text">
            <template v-for="(item, index) in items">
              <v-list-item :key="item.id">
                <!-- <template v-slot:default="{ active, toggle }"> -->
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                    <!-- <v-list-item-subtitle class="text--primary" v-text="item.headline"></v-list-item-subtitle>
                    <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle> -->
                  </v-list-item-content>

                  <!-- <v-list-item-action>
                    <v-list-item-action-text v-text="item.action"></v-list-item-action-text>
                    <v-icon v-if="!active" color="grey lighten-1">mdi-star-outline</v-icon>

                    <v-icon v-else color="yellow">mdi-star</v-icon>
                  </v-list-item-action> -->
                <!-- </template> -->
              </v-list-item>

              <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
            </template>
          </v-list-item-group>
        </v-list>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    selected: [2],
    items: [
      {
        id: "12131",
        action: "time",
        headline: "Header",
        title: "Programming",
        subtitle:
          "content mini"
      },
      {
        id: "12",
        action: "time",
        headline: "Header",
        title: "UI/UX",
        subtitle:
          "content mini"
      },
      {
        id: "13",
        action: "time",
        headline: "Header",
        title: "BPMN",
        subtitle:
          "content mini"
      },
      {
        id: "43123",
        action: "time",
        headline: "Header",
        title: "Server",
        subtitle:
          "content mini"
      },
      {
        id: "315",
        action: "time",
        headline: "Header",
        title: "Laravel",
        subtitle:
          "content mini"
      },
      {
        id: "216",
        action: "time",
        headline: "Header",
        title: "PHP",
        subtitle:
          "content mini"
      }
    ]
  })
};
</script>
