<template>
  <div>
    <v-card>
      <v-card-title class="justify-center">Aktifitas Terbaru</v-card-title>
      <v-divider></v-divider>
      <v-card-text class="pa-0">
        <v-list two-line>
          <v-list-item-group
            v-model="selected"
            multiple
            active-class="primary--text"
          >
            <template v-for="(item, index) in items">
              <v-list-item :key="item.id">
                <template v-slot:default="{ active, toggle }">
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                    <v-list-item-subtitle
                      class="text--primary"
                      v-text="item.headline"
                    ></v-list-item-subtitle>
                    <v-list-item-subtitle
                      v-text="item.subtitle"
                    ></v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-list-item-action-text
                      v-text="item.action"
                    ></v-list-item-action-text>
                    <v-icon v-if="!active" color="grey lighten-1">
                      mdi-star-outline
                    </v-icon>

                    <v-icon v-else color="yellow">
                      mdi-star
                    </v-icon>
                  </v-list-item-action>
                </template>
              </v-list-item>

              <v-divider
                v-if="index + 1 < items.length"
                :key="index"
              ></v-divider>
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
        action: "15 min",
        headline: "Lorem",
        title: "Lorem",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: "12",
        action: "15 min",
        headline: "Lorem",
        title: "Lorem",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: "13",
        action: "15 min",
        headline: "Lorem",
        title: "Lorem",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: "43123",
        action: "15 min",
        headline: "Lorem",
        title: "Lorem",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: "315",
        action: "15 min",
        headline: "Lorem",
        title: "Lorem",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: "216",
        action: "15 min",
        headline: "Lorem",
        title: "Lorem",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ]
  })
};
</script>
