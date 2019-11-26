<template>
  <div>
    <v-list two-line>
      <v-list-item-group
        v-model="selected"
        multiple
        active-class="primary--text"
      >
        <template v-for="(item, index) in items">
          <v-list-item :key="'list'+item.id">
            <template v-slot:default="{ active, toggle }">
              <v-list-item-avatar>   
                <v-img src="/default_avatar.png" @click="loadUser"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title> <nuxt-link class="tdn font-weight-bold" to="/questions/all/1">{{item.title}}</nuxt-link> </v-list-item-title>
                <v-list-item-subtitle>
                {{item.headline}} <nuxt-link class="tdn font-weight-bold" to="/questions/all/1">damar</nuxt-link> <span class="font-weight-light yellow darken-1--text"><v-icon small color="grey lighten-1">mdi-star-outline</v-icon>700</span> <span class="font-weight-light yellow darken-1--text"><v-icon small color="grey lighten-1">mdi-eye-outline</v-icon> 20</span>
                </v-list-item-subtitle>
                <v-list-item-subtitle
                  class="text--primary"
                  v-text="item.subtitle"
                ></v-list-item-subtitle>
                <v-list-item-subtitle
                >
                  <span class="font-weight-light yellow lighten-1--text">php</span>  
                  <span class="font-weight-light yellow lighten-1--text">laravel</span>      

                </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action >
                <v-list-item-action-text
                  v-text="item.action"
                ></v-list-item-action-text>
                <v-icon v-if="!active" color="grey lighten-1">
                  mdi-star-outline
                </v-icon>

                <v-icon v-else color="yellow">
                  mdi-star
                </v-icon>
                <v-list-item-action-text
                ><span class="font-weight-light yellow lighten-1--text">120 jawaban</span></v-list-item-action-text>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
export default {
  data: () => ({
    selected: [2],
    items: [
      {
        id: "231",
        action: "15 min",
        headline: "Ditanyakan oleh",
        title: "Apa sih itu pertanyaan?",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: "12",
        action: "15 min",
        headline: "Ditanyakan oleh",
        title: "Apa sih itu pertanyaan?",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: "13",
        action: "15 min",
        headline: "Ditanyakan oleh",
        title: "Apa sih itu pertanyaan?",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: "4311",
        action: "15 min",
        headline: "Ditanyakan oleh",
        title: "Apa sih itu pertanyaan?",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: "5",
        action: "15 min",
        headline: "Ditanyakan oleh",
        title: "Apa sih itu pertanyaan?",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: "6",
        action: "15 min",
        headline: "Ditanyakan oleh",
        title: "Apa sih itu pertanyaan?",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ]
  }),
  methods: {
    loadUser() {
      this.$router.push(`/profiles/me`)
    }
  }
};
</script>
