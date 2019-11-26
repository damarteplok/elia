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
        <!-- <v-list-item @click.stop="miniVariant = !miniVariant">
          <v-list-item-action>
            <v-icon>
              mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'Menu'"/>
          </v-list-item-content>
        </v-list-item> -->
        <v-subheader v-if="!miniVariant">Menu</v-subheader>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          nuxt
          exact
          color="primary"
        >
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
            <template
              v-if="item.title == 'Pertanyaanmu' || item.title == 'Kelasmu'"
            >
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
      <v-toolbar-title v-text="title" />
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
        <ModalTopQuestion />
        <ModalPertanyaan />
        <v-btn class="mx-1" small color="secondary" to="/login">
          Login
        </v-btn>
        <v-btn class="mx-1" small color="primary" to="/register">
          Sign Up
        </v-btn>
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
  components: {
    ModalPertanyaan,
    ModalTopQuestion
  },
  data() {
    return {
      checkNight: false,
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
  // created() {
    // var date = new Date();
    // this.checkNight = (date.getHours() > 22 || date.getHours() < 6);
  // }
};
</script>
