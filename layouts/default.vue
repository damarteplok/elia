<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list nav subheader>
        <v-list-item @click.stop="miniVariant = !miniVariant">
          <v-list-item-action>
            <v-icon>
              mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'Menu'"/>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          color="primary"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
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
          router
          exact
          color="primary"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app dense>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-text-field
        class="mx-4 justify-center"
        flat
        hide-details
        label="Cari jawaban berdasarkan kata kunci, tag, atau topik..."
        prepend-inner-icon="mdi-magnify"
        solo
      ></v-text-field>
      <v-spacer />
      <ModalTopQuestion />
      <ModalPertanyaan />
      <v-btn
        class="mx-1"
        small
        color="secondary"
        to="/login"
      >
        Login
      </v-btn>
      <v-btn
        class="mx-1"
        small
        color="primary"
        to="/register"
      >
        Sign Up
      </v-btn>
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
import ModalPertanyaan from '~/components/ModalPertanyaan.vue'
import ModalTopQuestion from '~/components/ModalTopQuestion.vue'

export default {
  components: {
    ModalPertanyaan,
    ModalTopQuestion
  },
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      dashboards: [
        {
          icon: "mdi-account-circle",
          title: "Profile",
          to: "/profiles/me"
        },
        {
          icon: "mdi-message",
          title: "Pertayaanmu",
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
  }
};
</script>
