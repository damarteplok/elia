<template>
  <v-app :dark="mode">
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list nav subheader>
        <!-- <v-list-item @click.stop="miniVariant = !miniVariant">
          <v-list-item-action>
            <v-icon>
              mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'Menu'"/>
          </v-list-item-content>
        </v-list-item>-->
        <v-subheader v-if="!miniVariant">Menu</v-subheader>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" nuxt exact color="primary">
          <v-list-item-action>
            <template v-if="item.title == 'Pesan'">
              <v-badge overlap>
                <template v-slot:badge>0</template>
                <v-icon>{{ item.icon }}</v-icon>
              </v-badge>
            </template>
            <template v-else>
              <v-icon>{{ item.icon }}</v-icon>
            </template>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>

        <v-subheader v-if="!miniVariant">Dashboard</v-subheader>
        <v-list-item
          v-for="(item, i) in dashboards"
          :key="'dashboard' + i"
          :to="item.to"
          nuxt
          exact
          color="primary"
        >
          <v-list-item-action>
            <template v-if="item.title == 'Pertanyaanmu' || item.title == 'Kelasmu'">
              <v-badge overlap>
                <template v-slot:badge>!</template>
                <v-icon>{{ item.icon }}</v-icon>
              </v-badge>
            </template>
            <template v-else>
              <v-icon>{{ item.icon }}</v-icon>
            </template>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-img src="/new-berbageek-logo.png"  max-width="180" class="mr-3"></v-img>
      <v-spacer />
      <div class="d-none d-sm-none d-md-flex align-center" style="width: 50%">
        <v-text-field
          class="mx-4 justify-center"
          flat
          hide-details
          label="Cari jawaban berdasarkan kata kunci, tag, atau topik..."
          prepend-inner-icon="mdi-magnify"
          solo
        ></v-text-field>
      </div>
      <v-spacer />
      <div class="d-none d-sm-none d-md-flex align-center">
        <v-switch style="margin-top: 1.5rem;" v-model="switch1"></v-switch>
        <ModalTopQuestion />
        <ModalPertanyaan />
        <!-- <v-btn class="mx-1" small color="secondary" to="/login">Login</v-btn>
        <v-btn class="mx-1" small color="primary" to="/register">Sign Up</v-btn>-->
        <v-menu>
          <template v-slot:activator="{ on }">
            <v-btn dark icon v-on="on">
              <v-icon color="primary">mdi-login</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item to="/login">
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item>
            <v-list-item to="/register">
              <v-list-item-title>Sign Up</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span>&copy; damar 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import ModalPertanyaan from "@/components/modal/ModalPertanyaan.vue";
import ModalTopQuestion from "@/components/modal/ModalTopQuestion.vue";

export default {
  head () {
    return {
      title: 'berbageek',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'berbageek-layout', name: 'berbageek-layout', content: 'Berbageek-layout' }
      ]
    }
  },
  components: {
    ModalPertanyaan,
    ModalTopQuestion
  },
  data() {
    return {
      switch1: false,
      clipped: true,
      drawer: true,
      fixed: false,
      dashboards: [
        {
          icon: "mdi-account-circle",
          title: "Profile",
          to: "/profiles"
        },
        {
          icon: "mdi-message",
          title: "Pertanyaanmu",
          to: "/questions/me"
        },
        {
          icon: "mdi-book-open-page-variant",
          title: "Kelasmu",
          to: "/class/me"
        },
        {
          icon: "mdi-settings",
          title: "Setting",
          to: "/settings"
        }
      ],
      items: [
        {
          icon: "mdi-home",
          title: "Home",
          to: "/"
        },
        {
          icon: "mdi-book-open-page-variant",
          title: "Kelas",
          to: "/class"
        },
        {
          icon: "mdi-glasses",
          title: "Geek",
          to: "/geeks"
        },
        {
          icon: "mdi-account-multiple",
          title: "Team",
          to: "/teams"
        },
        {
          icon: "mdi-email",
          title: "Pesan",
          to: "/messages"
        }
      ],
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: "BerbaGeek"
    };
  },
  computed: {
    mode() {
      return this.$store.state.dark;
    },
    mini() {
      return this.$store.state.mini;
    }
  },
  watch: {
    switch1() {
      if (this.switch1 == true) {
        this.$store.dispatch("setDark", true);
      } else {
        this.$store.dispatch("setDark", false);
      }
    },
    mode() {
      if (this.mode) {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    },
    miniVariant() {
        this.$store.dispatch("setMini", this.miniVariant);
    }
  },
  created() {
    if (this.mode) {
      this.switch1 = true
      this.$vuetify.theme.dark = true;
    } else {
      this.switch1 = false
      this.$vuetify.theme.dark = false;
    }
  }
};
</script>
