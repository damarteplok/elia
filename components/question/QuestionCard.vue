<template>
  <div>
    <v-list two-line>
      <v-list-item-group v-model="selected" multiple active-class="primary--text">
        <template v-for="(item, index) in items">
          <v-list-item :key="'list' + item.id + index">
            <template v-slot:default="{ active, toggle }">
              <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    src="https://img.icons8.com/plasticine/2x/user.png"
                    @click="loadUser"
                  ></v-img>
                </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <nuxt-link class="tdn font-weight-bold" to="/questions/all/1">{{ item.title }}</nuxt-link>
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ item.headline }}
                  <nuxt-link class="tdn font-weight-bold" to="/questions/all/1">user</nuxt-link>
                  <template v-if="mode">
                    <span class="font-weight-light mr-1" style="color: #C5BB60;">
                      <v-icon small color="yellow lighten-1">mdi-star-outline</v-icon>total point
                    </span>
                    <span class="font-weight-light mr-1" style="color: #C5BB60;">
                      <v-icon small color="yellow lighten-1">mdi-eye-outline</v-icon>total seen
                    </span>
                  </template>
                  <template v-else>
                    <span class="font-weight-light mr-1 yellow darken-1--text">
                      <v-icon small color="grey lighten-1">mdi-star-outline</v-icon>total point
                    </span>
                    <span class="font-weight-light mr-1 yellow darken-1--text">
                      <v-icon small color="grey lighten-1">mdi-eye-outline</v-icon>total seen
                    </span>
                  </template>
                </v-list-item-subtitle>
                <v-list-item-subtitle class="text--primary" v-text="item.subtitle"></v-list-item-subtitle>
                <v-list-item-subtitle>
                  <template v-if="mode">
                    <span class="font-weight-light" style="color: #C5BB60;">name category1</span>
                    <span class="font-weight-light" style="color: #C5BB60;">name category2</span>
                  </template>
                  <template v-else>
                    <span class="font-weight-light yellow lighten-1--text">name category1</span>
                    <span class="font-weight-light yellow lighten-1--text">name category2</span>
                  </template>
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text v-text="item.action"></v-list-item-action-text>
                <v-icon v-if="!active" color="grey lighten-1">mdi-star-outline</v-icon>

                <v-icon v-else color="yellow">mdi-star</v-icon>
                <v-list-item-action-text>
                  <template v-if="mode">
                    <span class="font-weight-light" style="color: #C5BB60;">total answer</span>
                  </template>
                  <template v-else>
                    <span class="font-weight-light yellow lighten-1--text">total answer</span>
                  </template>
                </v-list-item-action-text>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
    <div v-if="fetchLoading" style="text-align: center;">
      <v-progress-circular
        indeterminate
        color="primary"
        class="bottom"
        />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    bottom: false,
    fetchLoading: false,
    selected: [2],
    items: [
      {
        id: "231",
        action: "time in here",
        headline: "Ditanyakan oleh",
        title: "Header Pertanyaan in here",
        subtitle: "Content Pertanyaan in here"
      },
      {
        id: "12",
        action: "time in here",
        headline: "Ditanyakan oleh",
        title: "Header Pertanyaan in here",
        subtitle: "Content Pertanyaan in here"
      },
      {
        id: "13",
        action: "time in here",
        headline: "Ditanyakan oleh",
        title: "Header Pertanyaan in here",
        subtitle: "Content Pertanyaan in here"
      },
      {
        id: "4311",
        action: "time in here",
        headline: "Ditanyakan oleh",
        title: "Header Pertanyaan in here",
        subtitle: "Content Pertanyaan in here"
      },
      {
        id: "5",
        action: "time in here",
        headline: "Ditanyakan oleh",
        title: "Header Pertanyaan in here",
        subtitle: "Content Pertanyaan in here"
      },
      {
        id: "6",
        action: "time in here",
        headline: "Ditanyakan oleh",
        title: "Header Pertanyaan in here",
        subtitle: "Content Pertanyaan in here"
      }
    ]
  }),
  watch: {
    bottom(bottom) {
      if (bottom) {
        this.fetchLoading = true;
        this.addPertanyaan()
      }
    }
  },
  created() {
    window.addEventListener('scroll', () => {
      this.bottom = this.bottomVisible()
    })
  },
  computed: {
    mode() {
      return this.$store.state.dark;
    }
  },
  methods: {
    bottomVisible() {
      const scrollY = window.scrollY
      const visible = document.documentElement.clientHeight
      const pageHeight = document.documentElement.scrollHeight
      const bottomOfPage = visible + scrollY >= pageHeight
      return bottomOfPage || pageHeight < visible
    },
    loadUser() {
      this.$router.push(`/profiles/me`);
    },
    addPertanyaan() {
      for (let i = 0; i < 5; i++) {
        this.items.push({
          id: Date.now(),
          action: "time in here",
          headline: "Ditanyakan oleh",
          title: "Header Pertanyaan in here",
          subtitle: "Content Pertanyaan in here"
        })
      }
      this.fetchLoading = false;
    }
  }
};
</script>
